import { Link } from "react-router"

import NavBar from "../NavBar/NavBar"
import "./Index.css"
import StockImg from "../../images/StockImg.png"

const Index = (props) => {
  const cardImgStyle = {
    width: "250px",
    height: "335px",
  }

  return (
    <main>
      <NavBar />
     
      <section className="index-section">
        {props.whiskies?.map((whisky) => (
          <Link className="card-link"
            key={whisky.id}
            style={{ textDecoration: "none" }}
            to={`/whiskies/${whisky.id}`}
          >
            <div className="whisky-card">
              <div className="card-img">
                {!whisky.image ? (
                  <img style={cardImgStyle} src={StockImg} alt="filler image" />
                ) : (
                  <img
                    style={cardImgStyle}
                    src={whisky.image}
                    alt={whisky.name}
                  />
                )}
              </div>
              <div className="card-text">
                <h2>{whisky.name}</h2>
                <h2>{whisky.type}</h2>
                <p className="card-notes">{whisky.notes}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Index
