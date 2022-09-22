<template>
    <div class="flex flex-row space-x-2">
        <div class="flex flex-row items-center space-x-1">
            <ion-icon :class="{ 'w-5 h-5': size == 'lg', 'w-4 h-4': size == 'sm'}" class="shrink-0 text-yellow-500"
                :icon="star" />
            <span class="text-sm text-[color:var(--ion-color-medium-shade)]">
                {{ listing.aggregates.user_rating }}
            </span>
        </div>

        <div class="flex flex-row items-center space-x-1">
            <ion-icon  :class="{ 'w-6 h-6 ': size == 'lg', 'w-5 h-5': size == 'sm'}"  class="shrink-0 text-red-500"
                :icon="heartCircle" />
            <span class="text-sm text-[color:var(--ion-color-medium-shade)]">
                {{ listing.favorites.count ?? 0 }}
            </span>
        </div>
    </div>    
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import { IonIcon } from '@ionic/vue'
import { heartCircle, star } from 'ionicons/icons'

const props = defineProps({
    listing: {
        type: Object,
        required: true
    },
    size: {
        type: String,
        default: 'lg'
    }    
})

const listing = toRef(props, 'listing')
</script>