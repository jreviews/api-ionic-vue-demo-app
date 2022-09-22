import { ref } from 'vue';
import { useIonRouter } from '@ionic/vue'
import { ApiFavorite, ApiUnfavorite } from '@/services/api-listing-favorites'
import { useAuthStore } from '@/stores'
import { useListingStore } from '@/stores'

export default () => {

    const authStore = useAuthStore()

    const listingsStore = useListingStore()

    const router = useIonRouter();

    const processing = ref(false)

    const toggle = async (listingId: number, state: boolean) =>  {
        if (! authStore.isLoggedIn()) {
            router.push('/login')
            return
        }
        
        processing.value = true
    
        let data
        
        if (state) {
            ({ data } = await ApiUnfavorite(listingId))
        } else {
            ({ data } = await ApiFavorite(listingId))
        }
    
        listingsStore.updateListing(listingId, { favorites: { count: data.count, did_favorite: ! state }})
    
        processing.value = false
    }

	return { processing, toggle }
}
