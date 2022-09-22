<template>
    <div class="m-4 overflow-hidden rounded-md border border-[color:var(--ion-color-light-shade)] bg-[color:var(--ion-color-light)] dark:border-0 dark:bg-[color:var(--ion-color-light)]">
        <router-link :to="{ name: 'listings.show', params: {id : listing.id} }" class="relative">
            
            <featured-badge v-if="listing.featured" class="top-2 left-2" />
            
            <img v-if="listing?.photos[0]?.thumbnails?.md" :src="listing.photos[0].thumbnails.md"
                class="h-48 w-full object-cover object-center" />
            
            <div class="pt-4 pb-2 px-4 flex justify-between items-center">
                <p class="text-base font-medium inline-block truncate text-[color:var(--ion-color-dark-shade)]">
                    {{ listing.title }}
                </p>

                <listing-indicators size="sm" :listing="listing" />
            </div>
        </router-link>

        <div
            class="pl-3 pt-0.5 pb-1 flex justify-between items-center border-t border-[color:var(--ion-color-light-shade)] dark:border-[color:var(--ion-color-light-tint)]">
            <listing-favorite :listing-id="listing.id" :state="listing.favorites.did_favorite ?? false" />
            <ion-button :router-link="{ name: 'listings.show', params: {id : listing.id} }" size="small" fill="clear"
                expand="block">
                <span>Read more</span>
            </ion-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { toRef } from 'vue'
import { IonButton } from '@ionic/vue'
import ListingIndicators from '@/components/ListingIndicators.vue'
import ListingFavorite from '@/components/ListingFavorite.vue'
import FeaturedBadge from '@/components/FeaturedBadge.vue'

const props = defineProps({
    listing: {
        type: Object,
        required: true
    }
})

const listing = toRef(props, 'listing')
</script>