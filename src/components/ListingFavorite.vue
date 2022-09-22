<template>
    <button @click="toggle(props.listingId, props.state)">
        <ion-icon :class="{'w-8 h-8': props.size == 'lg', 'w-6 h-6': props.size == 'sm'}" class="text-red-500" :icon="state ? heart : heartOutline"></ion-icon>
    </button>
</template>

<script setup lang="ts">
import { IonIcon } from '@ionic/vue';
import { heartOutline, heart } from 'ionicons/icons'
import { useListingFavorite } from '@/composables'

const props = defineProps({
    listingId: {
        type: Number,
        required: true
    },
    state: {
        type: Boolean,
        required: true
    },
    size: {
        type: String,
        default: 'sm'
    }
})

const { toggle } = useListingFavorite()
</script>

<style scoped>
    ion-icon {
        --ionicon-stroke-width: 50px;
    }
</style>