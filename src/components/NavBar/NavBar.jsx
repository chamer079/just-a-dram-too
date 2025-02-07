import { useContext } from "react"
import { Link } from "react-router"

import { UserContext } from "../../contexts/UserContext" 
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
                <ul>
                    <li><Link to='/whiskies'><img src={NavBarLogo} alt="logo button" /></Link></li>
                    <li><Link to='/whiskies'>Home</Link></li>
                    <li><Link to='/whiskies/new'>Add New Entry</Link></li>
                    <li><Link to='/' onClick={handleSignOut}><img src={UserIcon} alt="user icon" /></Link></li>
                </ul>
            ) : (
                <ul>
                    <li><Link to='/sign-up'>Sign Up</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            )}
        </nav>
    )
}

export default NavBar