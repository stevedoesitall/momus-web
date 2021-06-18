/* eslint-disable no-undef */
const apiKey = process.env.API_KEY
const BASE_URL = "https://api.momus.io"
const HEADERS = {
    "Access-Control-Allow-Origin": "*"
}

const deitiesEndpoint = `${BASE_URL}/deities?api_key=${apiKey}`
const mortalsEndpoint = `${BASE_URL}/mortals?api_key=${apiKey}`
const creaturesEndpoint = `${BASE_URL}/creatures?api_key=${apiKey}`
const worksEndpoint = `${BASE_URL}/works?api_key=${apiKey}`
const itemsEndpoint = `${BASE_URL}/items?api_key=${apiKey}`
const authorsEndpoint = `${BASE_URL}/authors?api_key=${apiKey}`

export {
    deitiesEndpoint,
    mortalsEndpoint,
    creaturesEndpoint,
    worksEndpoint,
    itemsEndpoint,
    authorsEndpoint,
    HEADERS
}