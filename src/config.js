const BASE_URL = "https://api.momus.io"
const apiKey = process.env.API_KEY

const deitiesEndpoint = `${BASE_URL}/deities/`
const mortalsEndpoint = `${BASE_URL}/mortals/`
const creaturesEndpoint = `${BASE_URL}/creatures/`
const worksEndpoint = `${BASE_URL}/works/`
const itemsEndpoint = `${BASE_URL}/items/`
const authorsEndpoint = `${BASE_URL}/authors/`

export {
    apiKey,
    deitiesEndpoint,
    mortalsEndpoint,
    creaturesEndpoint,
    worksEndpoint,
    itemsEndpoint,
    authorsEndpoint
}