import { Link } from "react-router"


const NavBar = () => {
    return(
        <nav>
            <ul>
                <li><Link to='/auth/sign-up'>Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar