import axios from "axios"
import { 
    API_URL, 
    getDataFromLocalStorage, 
    urlParamsGenerate,
} from "Utils"

const token = `Token ${getDataFromLocalStorage("user")?.auth_token}`

const keysList = async ({ article, dealer_id, page, status }) => {
    const params = urlParamsGenerate({article, dealer_id, page, status})
    
    const res = await axios.get(`${API_URL}/keys${params}`, {
        headers: { Authorization: token },
    })

    return res
}

const keysRetrieve = async ({ id }) => {
    const res = await axios.get(`${API_URL}/keys/${id}`, {
        headers: { Authorization: token },
    })

    return res
}

const keysChoseMatch = async ({ id }) => {
    const res = await axios.post(`${API_URL}/keys/${id}/choose_match/`, {
        headers: { Authorization: token },
    })

    return res
}

const keysDeclineMatchesList = async ({ id }) => {
    const res = await axios.post(`${API_URL}/keys/${id}/decline_matches/`, {
        headers: { Authorization: token }
    })

    return res
}

const keysMatchesList = async ({ id, page }) => {
    const params = urlParamsGenerate({page})

    const res = await axios.post(`${API_URL}/keys/${id}/matches/${params}`, {
        headers: { Authorization: token }
    })

    return res
}

const keysPricesList = async ({ id, page }) => {
    const params = urlParamsGenerate({ page })
    const res = await axios.post(`${API_URL}/keys/${id}/matches/${params}`, {
        headers: { Authorization: token }
    })

    return res
}

const keysService = {
    keysList,
    keysRetrieve,
    keysChoseMatch,
    keysDeclineMatchesList,
    keysMatchesList,
    keysPricesList,
}

export default keysService