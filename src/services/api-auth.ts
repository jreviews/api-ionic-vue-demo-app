import { doGet, doPost } from '@/services/api-service'

export async function ApiEmailLogin(requestData: any) {

    const { data, status } = await doPost(process.env.VUE_APP_JREVIEWS_API_URL+`/jreviews/auth/email`, requestData)

    if (status !== 200) {
        throw data.message;
    }

    return { data, status };
}

export async function ApiLogout() {

    const { data, status } = await doGet(process.env.VUE_APP_JREVIEWS_API_URL+`/jreviews/auth/logout`)

    return { data, status };
}