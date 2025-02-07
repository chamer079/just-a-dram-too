import { useParams } from 'react-router'


const WhiskyDetails = () => {
    const { whiskyId } = useParams()
    console.log("whiskyId:", whiskyId)  //<-DELETE WHEN CLEANING CODE
    return(
        <h1>SHOW PAGE</h1>
    )
}

export default WhiskyDetails