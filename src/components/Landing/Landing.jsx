import { Link } from "react-router"

import "./Landing.css"
import LandingImg from "../../images/LandingImg.png"

const Landing = () => {
  return (
    <Link to={"/sign-up"}>
      <img src={LandingImg} alt="landing page image" />
    </Link>
  )
}

export default Landing
