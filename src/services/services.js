import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/'

const axiosInstance = axios.create({
    baseURL: url,

})

export const api = {
    get(endpoint){
        return axiosInstance.get(endpoint)
    }
}