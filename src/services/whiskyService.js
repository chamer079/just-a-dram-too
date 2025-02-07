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
    }catch(err) {
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
    }catch(err) {
        console.log(err)
    }
}


export {
    index,
    show,
}