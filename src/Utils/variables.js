const assembling = process.env.NODE_ENV
const localApiUrl = "http://81.31.246.5"

const API_URL = assembling === "development" ? `${localApiUrl}/api/v1` :  process.env.DOMAIN_URL

export { API_URL }