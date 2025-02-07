import { Link } from "react-router";

import NavBar from "../NavBar/NavBar";
import StockImg from "../../images/StockImg.png";

const Index = (props) => {
  const cardImgStyle = {
    width: "250px",
    height: "335px",
  };

  return (
    <main>
      <NavBar />
      <>
        {props.whiskies?.map((whisky) => (
          <Link
            key={whisky._id}
            style={{ textDecoration: "none" }}
            to={`/whiskies/${whisky.id}`}
          >
            <article className="whiskyCard">
              <div className="cardImg">
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
              <div className="cardText">
                <h2>{whisky.name}</h2>
                <p>{whisky.type}</p>
                <p>{whisky.notes}</p>
              </div>
            </article>
          </Link>
        ))}
      </>
    </main>
  );
};

export default Index;
