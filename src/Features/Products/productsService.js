import axios from "axios"
import { API_URL, getDataFromLocalStorage } from "Utils"

const getProductAll = async({pages}) => {

}

const getProductId = async({idProduct}) => {
    const res = await axios.get(`${API_URL}/products/${idProduct}/`, {
        headers: { Authorization: `Token ${getDataFromLocalStorage("user")?.auth_token}` },
    })

    return res
}

const productsService = {
    getProductId,
    getProductAll,
}

export default productsService