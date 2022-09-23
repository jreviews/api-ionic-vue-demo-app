<template>
    <div class="flex flex-row items-center space-x-2 justify-center">
        <ion-icon class="w-6 h-6" slot="end" :icon="sunny" color="medium" />
        <ion-toggle @ion-change="($event) => theme($event.detail.checked)" />
        <ion-icon class="w-6 h-6" :icon="moon" color="medium" />
    </div>
</template>

<script setup lang="ts">
import { IonToggle, IonIcon } from '@ionic/vue'
import { moon, sunny } from 'ionicons/icons'

const theme = (checked: boolean) => {
    document.body.classList.toggle('dark', checked)
}
</script>