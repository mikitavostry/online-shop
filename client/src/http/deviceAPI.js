import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    localStorage.setItem('token', data.token)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}


export const createBrand = async (brand) => {
    const { data } = await $authHost.post('api/brand', brand)
    localStorage.setItem('token', data.token)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    const { data } = await $authHost.post('api/device', device)
    localStorage.setItem('token', data.token)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit = 3) => {
    const { data } = await $host.get('api/device', {
        params: {
            typeId, brandId, page, limit
        }
    })
    return data
}

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get('api/device/' + id)
    return data
}