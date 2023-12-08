import axios from "axios"
import { API_URL, getDataFromLocalStorage } from "Utils"

const login = async ({ email, password }) => {
  const tokenData = await axios.post(`${API_URL}/auth/token/login/`, {
    email,
    password,
  })                                                                                                        
  
  const res = await axios.get(`${API_URL}/auth/users/me/`, {
    headers: { Authorization: `Token ${tokenData.data.auth_token}` },
  })

  res.data && localStorage.setItem(
    "user",
    JSON.stringify({ ...tokenData.data }),
  )

  return res.data
}

const tokenCheck = async () => {
  const res = await axios.get(`${API_URL}/auth/users/me/`, {
    headers: { Authorization: `Token ${getDataFromLocalStorage("user")?.auth_token}` },
  })

  return res.data
}

const signUp = async ({ email, password }) => {
  return await axios.post(`${API_URL}/auth/users/`, {email, password})
}

const logout = async () => {
   const res = await axios.post(`${API_URL}/auth/token/logout/`, {
      headers: { Authorization: `Token ${getDataFromLocalStorage("user")?.auth_token}` },
   })
   
   res.data && localStorage.removeItem("user")

   return res.data
}


const authService = {
  signUp,
  login,
  logout,
  tokenCheck,
}

export default authService