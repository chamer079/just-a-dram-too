import { Link } from "react-router"

import NavBar from "../NavBar/NavBar"
import "./Index.css"
import StockImg from "../../images/StockImg.png"

const Index = (props) => {
  // const imgStyle = {
  //   width: "12vw",
  //   height: "36.6vh",
  // }
  
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
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-md bg-black bg-clip-border text-white shadow-md">
              <div className="relative m-0 w-1/4 shrink-0 overflow-hidden rounded-md rounded-r-none bg-white bg-clip-border text-gray-700">
                {!whisky.image ? (
                  <img className="max-h-70 w-9/12 object-cover" src={StockImg} alt="filler image" />
                ) : (
                  <img
                    className="max-h-70 w-9/12 object-cover"
                    src={whisky.image}
                    alt={whisky.name}
                  />
                )}
              </div>
              <div className="p-6">                
                    <h2 className="mb-2 block text-white-2xl font-semibold">{whisky.name}</h2>
                    <h2 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal">{whisky.type}</h2>
                    <p className="mb-8 blocktext-base font-normal leading-relaxed ">{whisky.notes}</p>              
              </div>
            </div>





            {/* <div className="relative flex w-full max-w-[60rem] max-h-[64rem] flex-row rounded-md bg-black bg-clip-border text-white shadow-md">
              <div className="relative m-0 w-1/4 shrink-0 overflow-hidden rounded-med rounded-r-none bg-black bg-clip-border text-gray-700">
                {!whisky.image ? (
                  <img className="h-40 w-9/12 object-cover" src={StockImg} alt="filler image" />
                ) : (
                  <img
                    className="h-40 w-9/12 object-scale-down"
                    src={whisky.image}
                    alt={whisky.name}
                  />
                )}
              </div>
              <div className="p-12">                
                    <h2 className="mb-2 block text-white-2xl font-semibold">{whisky.name}</h2>
                    <h2 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal">{whisky.type}</h2>
                    <p className="mb-8 blocktext-base font-normal leading-relaxed ">{whisky.notes}</p>              
              </div>
            </div> */}
          </Link>
        ))}
      </section>
    </main>
  )
}

export default Index
