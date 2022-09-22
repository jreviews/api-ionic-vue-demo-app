import { doGet } from '@/services/api-service'

export async function ApiGetListings(requestOptions: any = {}) {

    const { data, status } = await doGet(process.env.VUE_APP_JREVIEWS_API_URL+`/jreviews/listings`, requestOptions);

    const results = data.data

    const meta = data.meta

    return { status, results, meta };
}

export async function ApiGetListing(id: number, requestOptions: any = {}) {

    const { data, status } = await doGet(process.env.VUE_APP_JREVIEWS_API_URL+`/jreviews/listings/${id}`, requestOptions);

    return { data, status };
}

export async function ApiGetMeFavorites(requestOptions: any = {}) {

    const { data, status } = await doGet(process.env.VUE_APP_JREVIEWS_API_URL+`/jreviews/me/favorites`, requestOptions);

    const results = data.data

    const meta = data.meta

    return { status, results, meta };
}

export async function ApiGetMeListings(requestOptions: any = {}) {

    const { data, status } = await doGet(process.env.VUE_APP_JREVIEWS_API_URL+`/jreviews/me/listings`, requestOptions);

    const results = data.data

    const meta = data.meta

    return { status, results, meta };
}
