import { apiKey, deitiesEndpoint } from "../config"

//NOTE: Make this "true" authorization
const HEADERS = {
    "Access-Control-Allow-Origin": "*",
    Authorization: apiKey
}

export const getDeities = async (domain) => {
    let deities = []
    const endpoint = domain ? `${deitiesEndpoint}?domain=${domain}` : deitiesEndpoint
    try {
        const response = await fetch(endpoint,
            {
                headers: HEADERS
            }
        )

        if (response.status === 204) {
            throw new Error("No deities to show!")
        }

        deities = await response.json()

        return deities

    } catch (err) {
        console.log(err)
        return deities

    } finally {
        console.log("Fetching finished")
    }
}

export const getById = async (id) => {
    let deity
    try {
        const response = await fetch(
            `${deitiesEndpoint}/${id}`,
            {
                headers: HEADERS
            }
        )

        if (response.status === 204) {
            throw new Error("No deities to show!!")
        }

        deity = await response.json()
        return deity

    } catch (err) {
        console.log(err)
    } finally {
        console.log("Fetching finished")
    }
}