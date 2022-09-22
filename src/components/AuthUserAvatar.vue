<template>
    <ion-avatar type="button" class="flex items-center justify-center">
        <router-link :to="{ name: authStore.isLoggedIn() ? 'account' : 'login'}" class="w-8 h-8">
            <img v-if="user?.avatar" :src="user.avatar" class="w-8 h-8 rounded-full overflow-hidden" />
            <ion-icon v-else :color="authStore.isLoggedIn() ? 'primary' : 'medium'" class="w-8 h-8 rounded-full overflow-hidden" :icon="personCircle" />
        </router-link>
    </ion-avatar>
</template>

<script setup lang="ts">
import { IonAvatar, IonIcon } from '@ionic/vue';
import { personCircle } from 'ionicons/icons'
import { useAuthStore } from '@/stores'

const authStore = useAuthStore()

const user = authStore.getUser()
</script>