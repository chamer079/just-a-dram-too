import { useState, useContext } from 'react'
import { useNavigate } from 'react-router'

import NavBar from "../NavBar/NavBar"
import { signUp } from '../../services/authService'
import { UserContext } from '../../contexts/UserContext'

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
        console.log(formData) //<-Don't forget to delete later
        try {
            const newUser = await signUp(formData)
            console.log(newUser)  //<- DELETE WHEN CLEANING CODE
            setUser(newUser)
            navigate('/whiskies')
        } catch(err) {
            setMessage(err.message)
        }
    }

    const isFormInvalid = () => {
        return !(username && email && password && password === passwordConf)
    }

    return(
        <main>
            <NavBar />
            <section>
                <h1>Get Started Now</h1>
                <p>{message}</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            id="username"
                            value={username}
                            name="username"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text"
                            id="email"
                            value={email}
                            name="email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            value={password}
                            name="password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm">Confirm Password</label>
                        <input 
                            type="password"
                            id="confirm"
                            value={passwordConf}
                            name="passwordConf"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button disabled={isFormInvalid()}>Sign Up</button>
                        <button onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default SignUpForm