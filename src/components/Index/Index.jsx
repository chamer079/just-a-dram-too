import { Link } from "react-router";

import NavBar from "../NavBar/NavBar";
import "./Index.css";
import StockImg from "../../images/StockImg.png";

const Index = (props) => {
  return (
    <main>
      <NavBar />
      <section className="index-section">
        {props.whiskies?.map((whisky) => (
          <Link
            className="card-link"
            key={whisky.id}
            style={{ textDecoration: "none" }}
            to={`/whiskies/${whisky.id}`}
          >
            <div className="relative flex w-full max-w-[44rem] flex-row rounded-md bg-black  text-white shadow-md">
              <div className="relative m-0 w-1/4 shrink-0 overflow-hidden rounded-md rounded-r-none bg-white bg-clip-border text-gray-700">
                {!whisky.image ? (
                  <img
                    className="max-h-75 w-9/12 object-cover"
                    src={StockImg}
                    alt="filler image"
                  />
                ) : (
                  <img
                    className="max-h-75 w-9/12 object-cover"
                    src={whisky.image}
                    alt={whisky.name}
                  />
                )}
              </div>
              <div className="card-text">
                <h2 className="card-name">{whisky.name}</h2>
                <h2 className="card-type">{whisky.type}</h2>
                <p className="card-notes">{whisky.notes}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Index;
