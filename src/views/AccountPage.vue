<template>
    <ion-page>
        <ion-header :translucent="true" class="ion-no-border">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button ref="backButton" v-if="router.canGoBack()" default-href="/"></ion-back-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
                
            <h1 class="text-center">Account Page</h1>

            <div class="mx-4 mt-8 px-4 py-6 ring-1 ring-[color:var(--ion-color-light-shade)] rounded-md">

                <div class="w-full text-center">
                    <div class="inline-block rounded-full w-24 h-24 overflow-hidden ring-1 ring-[color:var(--ion-color-primary)] bg-[color:var(--ion-color-light)]">
                        <img v-if="user?.avatar" :src="user?.avatar">
                    </div>
                </div>

                <div class="mt-6">
                    <label class="font-semibold text-sm">Username</label>
                    <div class="mt-1 rounded-md px-4 py-2 bg-[color:var(--ion-color-light)] text-[color:var(--ion-color-medium)]">
                        {{ user?.name }}
                    </div>
                </div>
                
                <div class="mt-4">
                    <label class="font-semibold text-sm">Email</label>
                    <div class="mt-1 rounded-md px-4 py-2 bg-[color:var(--ion-color-light)] text-[color:var(--ion-color-medium)]">
                        {{ user?.email }}
                    </div>
                </div>
                
                <div class="mt-8">
                    <ion-button @click="logout()" expand="block">Logout</ion-button>
                </div>

            </div>

        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import {
    useIonRouter,
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonButtons,
    IonButton,
    IonBackButton
} from '@ionic/vue';
import { useAuthStore } from '@/stores'

const router = useIonRouter()

const authStore = useAuthStore()

const user = authStore.getUser()

const logout = async () => {

    authStore.logout()

    if (router.canGoBack()) {
        router.back()
    } else {
        router.replace('/')
    }
}
</script>

<style scoped>
ion-item::part(native) {
    background: transparent
}
</style>