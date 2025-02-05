import { useContext } from "react"
import { Link } from "react-router"

import { UserContext } from "../../contexts/UserContext" 


const NavBar = () => {
    const { user } = useContext(UserContext)

    return(
        <nav>
            {user ? (
                <ul>
                    <li><Link to='/whiskies'>Home</Link></li>
                    <li><Link to='/whiskies/add'>Add New Entry</Link></li>
                </ul>
            ) : (
                <ul>
                    <li><Link to='/auth/sign-up'>Sign Up</Link></li>
                </ul>
            )}
        </nav>
    )
}

export default NavBar