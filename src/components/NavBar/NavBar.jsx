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

    return(
        <nav>
            {user ? (
                <div className="protected-links">
                    <li><Link to='/whiskies'><img src={NavBarLogo} alt="logo button" /></Link></li>
                    <li><Link to='/whiskies'>Home</Link></li>
                    <li><Link to='/whiskies/new'>Add New Entry</Link></li>
                    <li><Link to='/' onClick={handleSignOut}><img src={UserIcon} alt="user icon" /></Link></li>
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