import { doPost, doDelete } from '@/services/api-service'

export async function ApiFavorite(id: number, requestOptions: any = {}) {

    const { data, status } = await doPost(process.env.VUE_APP_JREVIEWS_API_URL+`/jreviews/listings/${id}/favorite`, requestOptions);

    return { data, status };
}

export async function ApiUnfavorite(id: number, requestOptions: any = {}) {

    const { data, status } = await doDelete(process.env.VUE_APP_JREVIEWS_API_URL+`/jreviews/listings/${id}/favorite`, requestOptions);

    return { data, status };
}
