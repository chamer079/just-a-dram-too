import { useParams, Link } from "react-router"
import { useState, useEffect } from "react"

import * as whiskyService from "../../services/whiskyService"
import NavBar from "../NavBar/NavBar"
import StockImg from "../../images/StockImg.png"
import "./WhiskyDetails.css"

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
      <h1 className="detail-name">{whisky.name}</h1>
      <section className="whisky-details">
        <div className="detail-img-container">
          {!whisky.image ? (
            <img className="detail-img" src={StockImg} alt="filler image" />
          ) : (
            <img src={whisky.image} alt={whisky.name} />
          )}
        </div>
        <div className="detail-content">
          <p className="detail-text"><span className="detail-category">Distillery:</span> {whisky.distillery}</p>
          <p className="detail-text"><span className="detail-category">Type:</span> {whisky.type}</p>
          <p className="detail-text"><span className="detail-category">Country:</span> {whisky.origin}</p>
          <p className="detail-text"><span className="detail-category">Age</span>: {whisky.age}</p>
          <p className="detail-text"><span className="detail-category">Alcohol Content:</span> {whisky.alcohol_content}</p>
          <p className="detail-text"><span className="detail-category">Flavor:</span> {whisky.flavor}</p>
          <p className="detail-text"><span className="detail-category">Hue:</span> {whisky.hue}</p>
          <p className="detail-text"><span className="detail-category">Notes:</span> {whisky.notes}</p>
        </div>
      <div className="edit-delete-buttons">
        <Link to={`/whiskies/${whisky.id}/edit`}>Update</Link>
        <button onClick={() => props.handleDeleteWhisky(whiskyId)}>DELETE</button>
      </div>
      </section>
    </main>
  )
}

export default WhiskyDetails
