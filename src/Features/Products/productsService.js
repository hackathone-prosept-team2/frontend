import axios from "axios"
import { 
    API_URL, 
    getDataFromLocalStorage,
    urlParamsGenerate, 
} from "Utils"

const token = `Token ${getDataFromLocalStorage("user")?.auth_token}`

const getProductAll = async({pages}) => {
    const params = urlParamsGenerate({pages})

    const res = await axios.get(`${API_URL}/products${params}`, {
        headers: { Authorization: token },
    })

    return res
}

const getProductId = async({idProduct}) => {
    const res = await axios.get(`${API_URL}/products/${idProduct}/`, {
        headers: { Authorization: token },
    })

    return res
}

const productsService = {
    getProductId,
    getProductAll,
}

export default productsService