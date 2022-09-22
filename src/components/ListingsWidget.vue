<template>
    <div class="h-72 py-3">
        <div>
            <ion-item lines="none">
                <ion-text color="dark" class="font-bold" v-text="props.heading" />
                <router-link :to="{ name: props.route }" slot="end">
                    <ion-text class="font-semibold text-sm">View more<span> &rarr;</span></ion-text>
                </router-link>
            </ion-item>

            <div v-if="! listings.length" class="h-full">
                <div class="flex flex-row">
                    <listing-widget-skeleton class="w-[70%] flex-shrink-0" />
                    <div class="w-full overflow-hidden">
                        <listing-widget-skeleton class="w-[200px]"/>
                    </div>
                </div>
            </div>

            <swiper v-if="listings.length" :slidesPerView="1.5" class="py-4" :freeMode="true" :modules="modules">
                <swiper-slide v-for="listing in (filteredListings as any)" :key="listing.id">
                    <router-link :to="{ name: 'listings.show', params: {id : listing.id} }" class="relative">
                        <featured-badge v-if="listing.featured" class="top-2 left-4" />
                        <div class="rounded-lg overflow-hidden mx-2 border border-[color:var(--ion-color-light-shade)] dark:border-0 bg-[color:var(--ion-color-light)] dark:bg-[color:var(--ion-color-light)]">
                            <div class="min-h-[10rem]">
                                <ion-img v-if="listing?.photos[0]?.thumbnails?.md" :src="listing.photos[0].thumbnails.md" />
                            </div>

                            <div class="pt-4 px-3 h-14 flex flex-row items-center justify-between bg-[color:var(--ion-color-light)] dark:bg-[color:var(--ion-color-light-tint)]">
                                <p v-text="listing.title"
                                    class="text-sm font-medium truncate text-[color:var(--ion-color-dark-shade)]"></p>
                                
                                <listing-indicators size="sm" :listing="listing" class="flex-shrink-0" />                                    
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>

            </swiper>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, toRef, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode } from "swiper";
import { IonImg, IonText, IonItem } from '@ionic/vue';
import { useListingStore } from '@/stores'
import { ApiGetListings } from '@/services/api-listings';
import ListingIndicators from '@/components/ListingIndicators.vue'
import FeaturedBadge from '@/components/FeaturedBadge.vue'
import ListingWidgetSkeleton from './ListingWidgetSkeleton.vue';
import 'swiper/css';
import "swiper/css/free-mode";

const modules = [FreeMode]

const props = defineProps({
    route: {
        type: String,
        default: ''
    },
    heading: {
        type: String,
        default: ''
    },
    params: {
        type: Object,
        default: () => ({})
    },
})

const listingStore = useListingStore()

const params = toRef(props, 'params')

const listings = ref([])

const filteredListings = computed(() => {
    return listingStore.getUpdatedListings(listings.value)
})

const loadListings = async() => {
    ({ results: listings.value } = await ApiGetListings({ params: {...params.value, ...{exclude: 'fields'}} }))
}

loadListings()
</script>

<style scoped>
ion-img {
    height: 10rem;
    width: 100%;
}

ion-img::part(image) {
    object-position: center;
    object-fit: cover;
    height: 10rem;
}
</style>