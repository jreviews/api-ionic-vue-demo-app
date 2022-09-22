import { Http, HttpResponse } from '@capacitor-community/http'
import { useAuthStore } from '@/stores'

async function addDefaultHeaders(headers: any = {}) {
    const authStore = useAuthStore()
    
    const token = authStore.getToken()

    if (token) {
        headers['Authorization'] = `Bearer ${token}`
    }

    return headers
}

export async function doGet(endpoint: string, requestOptions: any = {}) {

    requestOptions.params = requestOptions.params || {}

    requestOptions.params = {...requestOptions.params, ...{ format: 'raw' }}
    
    // Automatically convert all parameters to strings to prevent crashes on iOS which 
    // doesn't like numeric values in parameters
    if (requestOptions.params !== undefined) {
        Object.keys(requestOptions.params).forEach((key) => requestOptions.params[key] = requestOptions.params[key].toString())
    }

    const defaultOptions = {
        url: endpoint,
        headers: { 
            'Content-Type': 'application/json', 
            'Accept': 'application/json' 
        }
    }

    requestOptions.headers = await addDefaultHeaders(requestOptions.headers || {})

    const response: HttpResponse = await Http.get({ ...defaultOptions, ...requestOptions })

    return response
}

export async function doPost(endpoint: string, data: any = {}, requestOptions: any = {}) {
    const defaultOptions = {
        url: endpoint,
        data: data,
    }

    const defaultHeaders = {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
    }

    requestOptions.headers = await addDefaultHeaders(requestOptions.headers || {})

    requestOptions.headers = { ...defaultHeaders, ...requestOptions.headers }

    const response: HttpResponse = await Http.post({ ...defaultOptions, ...requestOptions })

    return response
}

export async function doDelete(endpoint: string, data: any = {}, requestOptions: any = {}) {
    const defaultOptions = {
        url: endpoint,
        data: data,
    }

    const defaultHeaders = {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
    }

    requestOptions.headers = await addDefaultHeaders(requestOptions.headers || {})

    requestOptions.headers = { ...defaultHeaders, ...requestOptions.headers }

    const response: HttpResponse = await Http.del({ ...defaultOptions, ...requestOptions })

    return response
}
