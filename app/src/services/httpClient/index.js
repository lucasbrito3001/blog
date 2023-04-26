import axios from 'axios'

const services = {
    nodejsmailer: 'VITE_NODEJSMAILER_API_URL',
    blogposts: 'VITE_BLOGPOSTS_API_URL'
}

export function httpClient(service) {
    return axios.create({
        baseURL: import.meta.env[services[service]],
    })
}