import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import * as whiskyService from '../../services/whiskyService'


const WhiskyDetails = () => {
    const { whiskyId } = useParams()
    console.log(whiskyId)
    console.log("whiskyId:", whiskyId)  //<-DELETE WHEN CLEANING CODE

    const [whisky, setWhisky] = useState()

    useEffect(() => {
        const fetchWhisky = async () => {
            const whiskyData = await whiskyService.show(whiskyId)
            setWhisky(whiskyData.whisky)
        }
        fetchWhisky()
    }, [whiskyId])

    if(!whisky){
        return <h1>Loading...</h1>
    }

    console.log("whisky state:", whisky)

    return(
        <>
            <h1>SHOW PAGE</h1>
            <h2>{whisky.name}</h2>
        </>
    )
}

export default WhiskyDetails