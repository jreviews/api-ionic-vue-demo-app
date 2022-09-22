<template>
    <ion-page>
        <ion-header :translucent="true" class="ion-no-border">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button ref="backButton" v-if="router.canGoBack()" default-href="/"></ion-back-button>
                </ion-buttons>
                <ion-buttons slot="end">
                    <auth-user-avatar />
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true" :scroll-y="true">
            <div v-if="Object.keys(listing).length" class="pb-8">
                <div class="relative w-full min-h-[10rem] bg-[color:var(--ion-color-light)] dark:bg-[color:var(--ion-color-light)]">
                    <featured-badge v-if="listing.featured" class="top-2 left-2" />
                    
                    <img v-if="listing?.photos[0]?.thumbnails?.md" :src="listing.photos[0].thumbnails.md"
                        class="h-48 w-full object-cover object-center" />

                        <div class="rounded-full bg-gray-900 w-8 h-8 flex items-center justify-center absolute top-3 right-3 opacity-50"></div>
                        <listing-favorite :listing-id="listing.id" :state="listing.favorites.did_favorite ?? false" class="absolute top-4 right-4" />
                </div>

                <div class="px-4 pt-4">
                    <div class="flex flex-row items-start justify-between">
                        <p v-text="listing.title" class="flex-grow text-[color:var(--ion-color-dark-shade)] text-xl font-medium inline-block"></p>
                        <listing-indicators :listing="listing" class="flex-shrink-0" />
                    </div>

                    <!-- Custom Fields -->
                    <div class="mt-3 pt-4 border-t border-[color:var(--ion-color-light-shade)] dark:border-[color:var(--ion-color-light-tint)]">
                        <dl class="grid grid-cols-2 gap-x-4 gap-y-3">
                            <template v-for="field in (listing.fields as any)" :key="field.name">
                                <div v-if="field.selected_text && field.selected_text.length">
                                    <dt class="text-sm font-medium text-[color:var(--ion-color-medium-shade)] dark:text-[color:var(--ion-color-step-600)]">{{ field.label }}</dt>
                                    <dd class="mt-1 text-sm">{{
                                    field?.selected_text[0] ?? '' }}</dd>
                                </div>
                            </template>
                        </dl>
                    </div>

                    <div v-html="listing.summary" class="mt-3"></div>

                    <div v-html="listing.description" class="mt-3"></div>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref, toRef, computed } from 'vue'
import { useIonRouter, IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonBackButton } from '@ionic/vue';
import { useListingStore } from '@/stores'
import { ApiGetListing } from '@/services/api-listings';
import AuthUserAvatar from '@/components/AuthUserAvatar.vue';
import ListingFavorite from '@/components/ListingFavorite.vue'
import ListingIndicators from '@/components/ListingIndicators.vue'
import FeaturedBadge from '@/components/FeaturedBadge.vue'

const props = defineProps({
    id: {
        type: String,
        default: ''
    }
})

const item = ref({})

const router = useIonRouter()

const listingStore = useListingStore()

const id = toRef(props, 'id')

const listing: any = computed(() => {
    return listingStore.getUpdatedListing(item.value)
})

const init = async () => {
    ({ data: item.value } = await ApiGetListing(Number(id.value), { params: {layout: 'detail'} }))
}

init()
</script>
