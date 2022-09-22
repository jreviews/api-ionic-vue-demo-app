<template>
  <ion-app>
    <ion-menu content-id="main-content" type="overlay">
      <ion-header>
        <ion-toolbar :translucent="true" color="light">
          <ion-title>Directory App</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>

        <ion-list id="app-menu">

          <ion-menu-toggle :auto-hide="false">

            <ion-item role="button" v-for="(page, index) in publicPages" :key="index" router-direction="forward" :router-link="page.url">
              <ion-label v-text="page.title" />
            </ion-item>

            <ion-item v-if="! authStore.isLoggedIn()" role="button" router-direction="forward" router-link="/login" class="mt-8">
              <ion-label>Sign In</ion-label>
            </ion-item>

            <div v-else class="mt-8">

              <ion-item role="button" v-for="(page, index) in authPages" :key="index" router-direction="forward" :router-link="page.url">
                <ion-label v-text="page.title" />
              </ion-item>

            </div>

          </ion-menu-toggle>

        </ion-list>

      </ion-content>

    </ion-menu>

    <ion-router-outlet id="main-content"></ion-router-outlet>
  </ion-app>
</template>

<script setup lang="ts">
import { 
  IonApp, 
  IonContent, 
  IonHeader, 
  IonToolbar, 
  IonLabel, 
  IonItem, 
  IonList, 
  IonTitle, 
  IonMenu, 
  IonMenuToggle, 
  IonRouterOutlet 
} from '@ionic/vue';
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()

const publicPages = [
  {
    title: 'Hotels',
    url: '/tabs/hotels',
  },
  {
    title: 'Restaurants',
    url: '/tabs/restaurants',
  },
  {
    title: 'Galleries',
    url: '/tabs/galleries',
  },
]

const authPages = [
  {
    title: 'Account',
    url: '/account',
  },
  {
    title: 'My Favorites',
    url: '/my-favorites',
  },
  {
    title: 'My Listings',
    url: '/my-listings',
  },
]
</script>