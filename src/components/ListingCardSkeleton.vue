<template>
<div class="m-4 overflow-hidden rounded-md border border-[color:var(--ion-color-light-shade)] bg-[color:var(--ion-color-light)] dark:border-0 dark:bg-[color:var(--ion-color-light)]">
    <div class="relative">
                
        <ion-thumbnail class="h-48 w-full object-cover object-center">
            <ion-skeleton-text animated></ion-skeleton-text>
        </ion-thumbnail>
        
        <div class="py-2 px-4">
            <ion-skeleton-text animated class="h-4"></ion-skeleton-text>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import { IonThumbnail, IonSkeletonText } from '@ionic/vue'
</script>