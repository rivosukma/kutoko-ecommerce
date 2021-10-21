import axios from 'axios'
import {getAppDisplayMode, getCookie} from 'helpers'

export const apiInstance = axios.create({
    baseURL: '',
    timeout: 60000,
    validateStatus: status => status >= 200 && status < 300
})

class ApiRequest {
    static get(route, token, payload = {}) {
        return this.request('GET', route, payload, token)
    }

    static put(route, token, payload = {}) {
        return this.request('PUT', route, payload, token)
    }

    static post(route, token, payload = {}) {
        return this.request('POST', route, payload, token)
    }

    static delete(route, token, payload = {}) {
        return this.request('DELETE', route, payload, token)
    }

    static patch(route, token, payload = {}) {
        return this.request('PATCH', route, payload, token)
    }

    static resolveParams(params) {
        const paramsResult = []
        Object.keys(params).map(e => paramsResult.push(`${e}=${params[e]}`))
        return paramsResult.join('&')
    }

    static request(method, route, payload = {}, token, isExternal = false) {
        return new Promise((resolve, reject) => {
        const path = payload.path ? `/${payload.path}` : ''
        const params = payload.params
            ? `?${this.resolveParams(payload.params)}`
            : ''
        const customUrl = payload.url ? payload.url : ''
        let baseHeaders = {
            'Content-Type':
            payload.type === 'form-data'
                ? 'multipart/form-data'
                : 'application/json'
        }

        if(payload.headers) {
            baseHeaders = {...payload.headers}
        }
        if (!isExternal) {
            baseHeaders['X-API-Auth'] = process.env.API_KEY
            baseHeaders['X-API-Platform'] = this.getPlatform()
        }
        if (token) {
            const bearer = getCookie("USER")
            baseHeaders.Authorization = bearer
        }

        apiInstance
            .request({
                url: customUrl.length > 0 ? customUrl : route + path + params,
                method,
                headers: baseHeaders,
                data: payload.body ? payload.body : {}
            })
            .then(res => {
                if (res && res.data) {
                    resolve(res.data)
                } else {
                    reject(
                        new Error({
                            status: false,
                            message: 'Koneksi/Server Bermasalah'
                        })
                    )
                }
            })
            .catch(err => {
                if (err && err.response) {
                    reject(err.response)
                } else if (err) {
                    reject(err)
                }
            })
        })
    }
}

export default ApiRequest