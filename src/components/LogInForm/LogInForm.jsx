import { useState, useContext } from "react"
import { useNavigate } from "react-router"

import { logIn } from "../../services/authServices"
import { UserContext } from "../../contexts/UserContext"

const LogInForm = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const [message, setMessage] = useState("")
    const[formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (evt) => {
        setMessage("")
        setFormData({...formData, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            const signedInUser = await logIn(formData)

            setUser(signedInUser)
            navigate('/whiskies')
        }catch(err) {
            setMessage(err.message)
        }
    }

    return(
        <main>
            <section>
                <h1>Welcome Back</h1>
                <p>Welcome bacl! Please enter your details.</p>
                <p>{message}</p>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text"
                            autoComplete="off"
                            id="username"
                            value={formData.username}
                            name="username"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            autoComplete="off"
                            id="password"
                            value={formData.password}
                            name="password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button>Login</button>
                        <button onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </form>
            </section>
            <section>
                <h2>Image Here</h2>
            </section>
        </main>
    )
}

export default LogInForm