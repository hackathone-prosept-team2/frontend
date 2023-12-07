import axios from "axios"
import { API_URL, getDataFromLocalStorage } from "Utils"

const token = `Token ${getDataFromLocalStorage("user")?.auth_token}`

const dealersList = async () => {
    const res = await axios.get(`${API_URL}/dealers`, {
        headers: { Authorization: token },
    })

    return res
}

const dealersListProsept = async () => {
    const res = await axios.get(`${API_URL}/dealers/report`, {
        headers: { Authorization: token },
    })

    return res
}

const delerRetrieve = async ({ delerId }) => {
    const res = await axios.get(`${API_URL}/dealers/${delerId}`, {
        headers: { Authorization: token },
    })

    return res
}

const dealersService = {
    dealersList,
    dealersListProsept,
    delerRetrieve,
}
  
export default dealersService