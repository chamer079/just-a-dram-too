const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/whiskies`

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
        })
        const data = await res.json()

        if(data.err){
            throw new Error(data.err)
        }
        return data
    } catch(err){
        console.log(err)    //<- DELETE WHEN CLEANING CODE
        throw new Error(err)
    }
}

const show = async (whiskyId) => {
    try {
        const res = await fetch(`${BASE_URL}/${whiskyId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        return res.json()
    } catch(err){
        throw new Error(err)
    }
}

const create = async (whiskyFormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(whiskyFormData),
        })
        return res.json()
    } catch(err){
        throw new Error(err)
    }
}

const deleteWhisky = async(whiskyId) => {
    try {
        const res = await fetch(`${BASE_URL}/${whiskyId}`, {
            method: "DELeTE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        return res.json()
    } catch(err){
        throw new Error(err)
    }
}

const update = async (whiskyId, whiskyFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${whiskyId}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(whiskyFormData)
        })
        return res.json()
    } catch(err){
        throw new Error(err)
    }
}


export {
    index,
    show,
    create,
    deleteWhisky,
    update,
}