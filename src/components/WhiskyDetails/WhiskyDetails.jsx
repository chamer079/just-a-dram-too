import { useParams, Link } from "react-router"
import { useState, useEffect } from "react"

import * as whiskyService from "../../services/whiskyService"
import NavBar from "../NavBar/NavBar"
import StockImg from "../../images/StockImg.png"

const WhiskyDetails = (props) => {
  const { whiskyId } = useParams()

  const [whisky, setWhisky] = useState()

  useEffect(() => {
    const fetchWhisky = async () => {
      const whiskyData = await whiskyService.show(whiskyId)
      setWhisky(whiskyData.whisky)
    };
    fetchWhisky()
  }, [whiskyId])

  if (!whisky) {
    return <h1>Loading...</h1>
  }

  return (
    <main>
      <NavBar />
      <h1>{whisky.name}</h1>
      <section>
        <div>
          {!whisky.image ? (
            <img src={StockImg} alt="filler image" />
          ) : (
            <img src={whisky.image} alt={whisky.name} />
          )}
        </div>
        <div>
          <p>Distillery: {whisky.distillery}</p>
          <p>Type: {whisky.type}</p>
          <p>Country: {whisky.origin}</p>
          <p>Age: {whisky.age}</p>
          <p>Alcohol Content: {whisky.alcohol_content}</p>
          <p>Flavor: {whisky.flavor}</p>
          <p>Hue: {whisky.hue}</p>
          <p>Notes: {whisky.notes}</p>
        </div>
      </section>
      <section>
        <Link to={`/whiskies/${whisky.id}/edit`}>Update</Link>
        <button onClick={() => props.handleDeleteWhisky(whiskyId)}>DELETE</button>
      </section>
    </main>
  )
}

export default WhiskyDetails
