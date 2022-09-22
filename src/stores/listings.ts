import { ref } from 'vue'

const listings = ref({}) as any

export function useListingStore() {

    const updateListing = (id: any, data: object) => {
        if (listings.value[id] !== undefined) {
            listings.value[id] = { ...listings.value[id], ...data}
        } else {
            listings.value[id] = data
        }
    }

    const getUpdatedListings = (results: object[]) => {
        results.forEach((listing: any, index: number) => {
            if (listings.value[listing.id] !== undefined) {
                results[index] = {...listing, ...listings.value[listing.id]}
            }
        })

        return results
    }

    const getUpdatedListing = (listing: any) => {
        if (listings.value[listing.id] !== undefined) {
            listing = { ...listing, ...listings.value[listing.id] }
        }

        return listing
    }

    const reset = () => {
        Object.keys(listings.value).forEach((id) => {
            listings.value[id] = {...listings.value[id], ...{ favorites: { did_favorite: false }} }
        })
    }

    return {
        listings,
        updateListing,
        getUpdatedListing,
        getUpdatedListings,
        reset
    }
}