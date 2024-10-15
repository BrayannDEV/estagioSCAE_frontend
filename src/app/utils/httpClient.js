'use client'
const baseUrl = "http://localhost:5000";

const httpClient = {
    get: async (endpoint) => {
        let response = await fetch(baseUrl + endpoint, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
        })

        if (!response.ok) {
            throw new Error(`Error ${response.statusText}`)
        }

        const data = await response.json()
        return data;

    },
    
    post: async (endpoint, body) => {
        let response = await fetch(baseUrl + endpoint, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })


        if (!response.ok) {
            throw new Error(`Error ${response.statusText}`)
        }

        const data = await response.json()
        return data;
    },

    put: (endpoint, body) => {
        let p = fetch(baseUrl + endpoint, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })

        return p;
    },

    delete: (endpoint) => {
        let p = fetch(baseUrl + endpoint, {
            method: "DELETE",
            credentials: "include"
        })

        return p;
    }
}

export default httpClient;