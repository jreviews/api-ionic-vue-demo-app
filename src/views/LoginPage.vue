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
            <div class="flex min-h-full flex-col justify-center items-center">
                <div class="pb-36 w-full">
                    <h1 class="text-center">Sign in to your account</h1>
                    <form class="w-full p-0 mt-6 px-4 py-8 mx-auto bg-[color:var(--ion-color-light)]" @submit.prevent="login()">
                        <ion-item color="transparent">
                            <ion-label position="stacked">Email</ion-label>
                            <ion-input v-model="email" type="email" placeholder="your@email.com" required>
                            </ion-input>
                        </ion-item>
                        <ion-item color="none">
                            <ion-label position="stacked">Password</ion-label>
                            <ion-input v-model="password" type="password" placeholder="Password" required>
                            </ion-input>
                        </ion-item>
                        <div class="mt-8 mx-4">
                            <ion-button type="submit" expand="block">Login</ion-button>
                        </div>
                    </form>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
    useIonRouter,
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButtons,
    IonButton,
    IonBackButton,
    alertController
} from '@ionic/vue';
import { useAuthStore } from '@/stores'
import { ApiEmailLogin } from '@/services/api-auth'

const router = useIonRouter()

const email = ref()

const password = ref()

const authStore = useAuthStore()

const login = async () => {
    let data

    try {

        ({ data } = await ApiEmailLogin({ email: email.value, password: password.value }))

        authStore.setUser(data)
    
        if (router.canGoBack()) {
            router.back()
        } else {
            router.replace('/')
        }
        
    } catch (e) {

        await failedLogin()

    }
}   

const failedLogin = async() => {
    const alert = await alertController.create({
        header: 'Login error',
        message: 'Please try again.',
        buttons: ['OK'],
    });

    await alert.present()
}
</script>

<style scoped>
    ion-item::part(native) {
        background: transparent
    }
</style>