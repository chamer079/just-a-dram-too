import { useContext } from "react"
import { Link } from "react-router"

import { UserContext } from "../../contexts/UserContext" 
import "./NavBar.css"
import NavBarLogo from "../../images/NavBarLogo.png"
import UserIcon from "../../images/UserIcon.png"


const NavBar = () => {
    const { user, setUser } = useContext(UserContext)

    const handleSignOut = () => {
        localStorage.removeItem("token")
        setUser(null)
    }

    const navLogoImg = {
        width: "140px",
        height: "100px",
    }

    const signOutImg = {
        width: "100px",
        height: "100px",
    }

    return(
        <nav>
            {user ? (
                <div className="protected-links">
                    <Link to='/whiskies'><img style={navLogoImg} src={NavBarLogo} alt="logo button" /></Link>
                    <Link to='/whiskies'>Home</Link>
                    <Link to='/whiskies/new'>Add New Entry</Link>
                    <Link to='/' onClick={handleSignOut}><img style={signOutImg} src={UserIcon} alt="user icon" /></Link>
                </div>
            ) : (
                <div className="login-links">
                  
                        <Link to='/sign-up'>Sign Up</Link> 
                        <Link>|</Link>
                        <Link to='/login'>Login</Link>
                  

                </div>
            )}
        </nav>
    )
}

export default NavBar