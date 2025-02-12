import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router'

import NavBar from "../NavBar/NavBar"
import { signUp } from '../../services/authService'
import { UserContext } from '../../contexts/UserContext'
import PotStills from "../../images/PotStills.jpg"
import "./SignUp.css"

const SignUpForm = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [message, setMessage] = useState("")
    const[formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        passwordConf: "",
    })

    const { username, email, password, passwordConf } = formData

    const handleChange = (evt) => {
        setMessage('')
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const newUser = await signUp(formData)
            setUser(newUser)
            navigate('/whiskies')
        } catch(err) {
            setMessage(err.message)
        }
    }

    const isFormInvalid = () => {
        return !(username && email && password && password === passwordConf)
    }

    const imgStyle = {
        width: "680px",
        height: "808px",
    }


    return(
        <main>
            <NavBar />
            <header className="header-img">
            </header>
            <section className="about-content">
                <h2>About</h2>
                <p>Whether you spell whisky with a “y” or an “ey” this is the place for you. Just a Dram is a digital journal for whisky enthusiasts to record, and share amongst friends, their tasting experiences. So, sit back. Pour yourself a dram, and begin documenting your whisky tasting journey.</p>
                <p>Cheers!</p>
            </section>
            <section className="sign-up-section">
                <div className="sign-up-img">
                    <img style={imgStyle} src={PotStills} alt="pot stills" />
                </div>
                <div className="sign-up-content">
                        <h1>Get Started Now</h1>
                        <p>{message}</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                {/* <label htmlFor="username"></label> */}
                                <input 
                                    type="text"
                                    id="username"
                                    value={username}
                                    name="username"
                                    onChange={handleChange}
                                    placeholder="Username"
                                    required
                                />
                            </div>
                            <div>
                                {/* <label htmlFor="email">Email</label> */}
                                <input 
                                    type="text"
                                    id="email"
                                    value={email}
                                    name="email"
                                    onChange={handleChange}
                                    placeholder="Email"
                                    required
                                />
                            </div>
                            <div>
                                {/* <label htmlFor="password">Password</label> */}
                                <input 
                                    type="password"
                                    id="password"
                                    value={password}
                                    name="password"
                                    onChange={handleChange}
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            <div>
                                {/* <label htmlFor="confirm">Confirm Password</label> */}
                                <input 
                                    type="password"
                                    id="confirm"
                                    value={passwordConf}
                                    name="passwordConf"
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                            <div>
                                <button disabled={isFormInvalid()}>Sign Up</button>
                            </div>
                        </form>
                    <div className="login-link">
                        <p>Have an account?</p>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
             
            </section>
        </main>
    )
}

export default SignUpForm