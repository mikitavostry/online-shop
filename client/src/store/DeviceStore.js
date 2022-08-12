import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Phone' },
            { id: 2, name: 'TV' }
        ]
        this._brands = [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Samsung' }
        ]

        this._devices = [
            { id: 1, name: "Iphone 12 pro", price: 1200, rating: 5, img: '../../public/logo192.png' },
            { id: 2, name: "Iphone 12 pro", price: 1200, rating: 5, img: '../../public/logo192.png' },
            { id: 3, name: "Iphone 12 pro", price: 1200, rating: 5, img: '../../public/logo192.png' },
            { id: 4, name: "Iphone 12 pro", price: 1200, rating: 5, img: '../../public/logo192.png' },
            { id: 5, name: "Iphone 12 pro", price: 1200, rating: 5, img: '../../public/logo192.png' }

        ]
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}