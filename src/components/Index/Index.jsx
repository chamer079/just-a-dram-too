import { Link } from "react-router"

import NavBar from "../NavBar/NavBar"
import "./Index.css"
import StockImg from "../../images/StockImg.png"

const Index = (props) => {
  
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
              <div className="card-img-container">
                {!whisky.image ? (
                  <img className="card-img"  src={StockImg} alt="filler image" />
                ) : (
                  <img
                    className="card-img"
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
