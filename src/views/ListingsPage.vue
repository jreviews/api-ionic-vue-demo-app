<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar v-if="true || ! route.path.startsWith('/tabs')">
                <ion-buttons slot="start">
                    <ion-back-button ref="backButton" v-if="router.canGoBack()" default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-title v-if="props.me == 'favorites'">My Favorites</ion-title>
                <ion-title v-if="props.me == 'listings'">My Listings</ion-title>
                <ion-title v-if="! props.me">{{ pageHeading }}</ion-title>
                <ion-buttons slot="end" class="mt-1">
                    <auth-user-avatar />
                </ion-buttons>
            </ion-toolbar>
            <ion-toolbar class="relative flex">
                <ion-searchbar :placeholder="`Search ${pageHeading}`" inputmode="text" :debounce="500"
                    @ionChange="($event: any) => search($event.detail.value)"></ion-searchbar>

                <button @click="($event) => showSortOptions($event)" slot="end" class="h-full flex items-center pb-4 pr-2">
                    <ion-icon class="w-6 h-6" color="medium" :icon="options" />
                </button>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            
            <template v-if="loading">
                <listing-card-skeleton v-for="n in 5" :key="n"  />
            </template>
            
            <template v-for="listing in (filteredListings as any)" :key="listing.id">
                <listing-card-layout :listing="listing" />
            </template>

            <ion-infinite-scroll @ionInfinite="nextPage($event)" :disabled="infiniteScrollDisabled" threshold="350px">
                <ion-infinite-scroll-content />
            </ion-infinite-scroll>
        </ion-content>
    </ion-page>
</template>
``
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
    useIonRouter,
    IonContent,
    IonPage,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonButtons,
    IonBackButton,
    popoverController,
    IonIcon,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    InfiniteScrollCustomEvent
} from '@ionic/vue'
import { options } from 'ionicons/icons'
import { useListingStore } from '@/stores'
import { ApiGetListings, ApiGetMeFavorites, ApiGetMeListings } from '@/services/api-listings'
import AuthUserAvatar from '@/components/AuthUserAvatar.vue'
import ListingCardLayout from '@/components/ListingCardLayout.vue'
import ListingSort from '@/components/ListingSort.vue'
import ListingCardSkeleton from '@/components/ListingCardSkeleton.vue'

const props = defineProps({
    query: {
        type: Object,
        default: () => ({})
    },
    me: {
        type: String,
        default: ''
    }
})

const listingStore = useListingStore()

const route = useRoute()

const router = useIonRouter()

const infiniteScrollDisabled = ref(false)

const loading = ref(false)

const listings = ref([] as any)

const params = ref({ pg: 1, sort: 'created' }) as any

let queryString = ({ ...props.query, ...route.query, ...{ pg: 1 } }) as any

delete queryString['heading']

const filteredListings = computed(() => {
    return listingStore.getUpdatedListings(listings.value)
})

const pageHeading = computed(() => {
    return route.query.heading ?? props.query.heading ?? 'Listings'
})

const search = (q: string) => {
    listings.value = []
    params.value = { ...params.value, ...{ pg: 1, q } }
}

const showSortOptions = async (event: Event) => {
    const popover = await popoverController.create({
        component: ListingSort,
        event: event,
        componentProps: { selected: params.value.sort },
    }) as any

    await popover.present()

    popover.el.querySelector('ion-radio-group').addEventListener('click', (event: any) => {
        sort(event.target.value)
        popover.dismiss()
    })
}
const sort = (order: string) => {
    listings.value = []
    params.value = { ...params.value, ...{ pg: 1, sort: order } }
}

const loadPage = async () => {
    let results
    
    let meta

    loading.value = true

    if (props.me == 'favorites') {
        ({ results, meta } = await ApiGetMeFavorites({ params: { ...params.value, ...{ exclude: 'fields' } } }))
    } else if (props.me == 'listings') {
        ({ results, meta } = await ApiGetMeListings({ params: { ...params.value, ...{ exclude: 'fields' } } }))
    } else {
        ({ results, meta } = await ApiGetListings({ params: { ...params.value, ...{ exclude: 'fields' } } }))
    }

    loading.value = false

    if (meta.current_page == meta.last_page) {
        infiniteScrollDisabled.value = true
    }

    listings.value = [...listings.value, ...results]
}

const nextPage = async (event: InfiniteScrollCustomEvent) => {
    if (!infiniteScrollDisabled.value) {
        params.value.pg++
        event.target.complete()
    }
}

watch(
    () => params,
    () => loadPage(),
    { deep: true }
)

params.value = { ...queryString, ...{ pg: 1 } }
</script>

<style scoped>
ion-searchbar.md {
    --box-shadow: none;
}
</style>