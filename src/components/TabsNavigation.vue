<template>
    <ion-page>
        <ion-content :scroll-y="false">
            <ion-tabs>
                
                <ion-router-outlet></ion-router-outlet>

                <ion-tab-bar slot="bottom" class="pt-2 ios:pb-6 android:pb-2">
                    <ion-tab-button tab="widgets" href="/tabs/widgets">
                        <ion-icon :icon="home" class="text-gray-400"/>
                        <ion-label class="text-xs tracking-tighter text-gray-400">Home</ion-label>
                    </ion-tab-button>
                    
                    <ion-tab-button tab="hotels" href="/tabs/hotels">
                        <ion-icon :icon="hotel" class="text-gray-400" />
                        <ion-label class="text-xs tracking-tighter text-gray-400">Hotels</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="restaurants" href="/tabs/restaurants">
                        <ion-icon :icon="restaurant" class="text-gray-400" />
                        <ion-label class="text-xs tracking-tighter text-gray-400">Restaurants</ion-label>
                    </ion-tab-button>

                    <ion-tab-button tab="galleries" href="/tabs/galleries">
                        <ion-icon :icon="gallery" class="text-gray-400" />
                        <ion-label class="text-xs tracking-tighter text-gray-400">Galleries</ion-label>
                    </ion-tab-button>                    

                    <ion-tab-button tab="menu" @click="toggleMenu">
                        <ion-icon :icon="more" class="text-gray-400" />
                        <ion-label class="text-xs tracking-tighter text-gray-400">More</ion-label>
                    </ion-tab-button>
                </ion-tab-bar>
                
            </ion-tabs>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonContent,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
    menuController,
} from '@ionic/vue';

import { 
    homeOutline as home, 
    restaurantOutline as restaurant, 
    bedOutline as hotel,
    menuOutline as more,
    brushOutline as gallery,
} from 'ionicons/icons';

const toggleMenu = () => {
    menuController.toggle()
}
</script>

<style scoped>
.tab-selected svg, 
.tab-selected ion-icon,
.tab-selected ion-label {
    color: theme('colors.blue.500');
}
ion-icon {
    height: 1.5rem;
    width: 1.5rem;
}
</style>