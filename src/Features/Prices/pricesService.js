import axios from "axios"
import { API_URL, getDataFromLocalStorage } from "Utils"

const token = `Token ${getDataFromLocalStorage("user")?.auth_token}`

const addPrices = async () => {
    const res = await axios.post(`${API_URL}/prices/`, {
        headers: { Authorization: token },
    })

    return res
}

const deletePrices = async () => {
    const res = await axios.delete(`${API_URL}/prices/`, {
        headers: { Authorization: token },
    })

    return res
}

const pricesService = {
    addPrices,
    deletePrices,
}

export default pricesService