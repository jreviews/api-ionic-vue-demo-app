<template>
    <div class="relative">
        <div class="rounded-lg overflow-hidden mx-2 border border-[color:var(--ion-color-light-shade)] dark:border-0 bg-[color:var(--ion-color-light)] dark:bg-[color:var(--ion-color-light)]">
            <div>
                <ion-thumbnail class="h-40 w-full object-cover object-center">
                    <ion-skeleton-text animated />
                </ion-thumbnail>
            </div>

            <div class="px-3 h-14 flex flex-row items-center justify-between">
                <ion-skeleton-text animated class="h-4" />
            </div>
        </div>
    </div>
</template>
    
<script setup lang="ts">
import { IonThumbnail, IonSkeletonText } from '@ionic/vue'
</script>