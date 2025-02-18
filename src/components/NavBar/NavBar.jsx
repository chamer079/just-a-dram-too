import { useContext } from "react";
import { Link } from "react-router";

import { UserContext } from "../../contexts/UserContext";
import "./NavBar.css";
import NavBarLogo from "../../images/NavBarLogo.png";
import UserIcon from "../../images/UserIcon.png";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const scrollToElement = (id) => {
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navLogoImg = {
    width: "140px",
    height: "100px",
  };

  const signOutImg = {
    width: "100px",
    height: "100px",
  };

  return (
    <nav>
      {user ? (
        <div>
          <ul className="protected-links">
            <Link className="logo-link" to="/whiskies">
              <img style={navLogoImg} src={NavBarLogo} alt="logo button" />
            </Link>
            <div className="home-create-links">
              <li className="user-link-text">
                <Link className="user-link-text" to="/whiskies">
                  Home
                </Link>
              </li>
              <li className="user-link-divider">|</li>
              <li className="user-link-text">
                <Link className="user-link-text" to="/whiskies/new">
                  Add New Entry
                </Link>
              </li>
            </div>
            <Link className="sign-out-link" to="/" onClick={handleSignOut}>
              <img style={signOutImg} src={UserIcon} alt="user icon" />
            </Link>
          </ul>
        </div>
      ) : (
        <div className="open-links">
          <ul className="open-links">
            <li>
              <Link className="login-links" to={scrollToElement("signUpSection")}>
                Sign Up
              </Link>
            </li>
            <li className="link-divider">|</li>
            <li>
              <Link className="login-links" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
