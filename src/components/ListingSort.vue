<template>
    <ion-list lines="none" class="py-3">
        <ion-radio-group :value="selected" @ionChange="($event) => sort($event)">
            <ion-item>
                <ion-label>Most recent</ion-label>
                <ion-radio value="created"></ion-radio>
            </ion-item>
            <ion-item>
                <ion-label>Top rated</ion-label>
                <ion-radio value="rating"></ion-radio>
            </ion-item>
            <ion-item>
                <ion-label>Featured</ion-label>
                <ion-radio value="featured"></ion-radio>
            </ion-item>
            <ion-item>
                <ion-label>Alphabetically</ion-label>
                <ion-radio value="title"></ion-radio>
            </ion-item>
        </ion-radio-group>
    </ion-list>
</template>

<script setup lang="ts">
import { toRef } from 'vue';
import {    
    IonList,
    IonRadioGroup,
    IonRadio,
    IonLabel,
    IonItem,
} from '@ionic/vue'

const props = defineProps({
    selected: {
        type: String,
        required: true
    }
})

const selected = toRef(props, 'selected')

const emit = defineEmits(['order-changed'])

const sort = (event: CustomEvent) => {
    emit('order-changed', event.detail.value)
}
</script>