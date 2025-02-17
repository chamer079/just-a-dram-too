import { useState, useContext } from "react";
import { useNavigate } from "react-router";

import { logIn } from "../../services/authService";
import { UserContext } from "../../contexts/UserContext";
import PouringWhisky from "../../images/PouringWhisky.jpg";
import "./Login.css";

const LogInForm = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const signedInUser = await logIn(formData);

      setUser(signedInUser);
      navigate("/whiskies");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const imgStyle = {
    width: "875px",
    height: "858px",
  };

  return (
    <main>
      <section className="login-section">
        <div className="login-content">
          <div className="login-welcome">
            <h1>Welcome Back</h1>
            <p>Welcome back! Please enter your details.</p>
          </div>
          <p>{message}</p>
          <form
            className="login-form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                className="login-input"
                type="text"
                autoComplete="off"
                id="username"
                value={formData.username}
                name="username"
                onChange={handleChange}
                placeholder="Username"
                required
              />
            </div>
            <div>
              <input
                className="login-input"
                type="password"
                autoComplete="off"
                id="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <button className="login-button">Login</button>
            </div>
          </form>
        </div>
        <div className="login-img">
          <img style={imgStyle} src={PouringWhisky} alt="glas of whisky" />
        </div>
      </section>
    </main>
  );
};

export default LogInForm;
