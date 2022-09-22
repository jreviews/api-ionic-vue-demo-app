<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="medium"></ion-menu-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <auth-user-avatar />
          </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <listings-widget heading="Hotels" :params="{ sort: 'created', cat: 23 }" route="hotels" />
      <listings-widget heading="Restaurants" :params="{ sort: 'created', cat: 24 }" route="restaurants"  />
      <listings-widget heading="Galleries" :params="{ sort: 'created', cat: 26 }" route="galleries" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonToolbar, IonButtons, IonMenuButton } from '@ionic/vue';
import ListingsWidget from '@/components/ListingsWidget.vue';
import AuthUserAvatar from '@/components/AuthUserAvatar.vue';
</script>