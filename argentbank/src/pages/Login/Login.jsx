import './Login.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { loginAction } from '../../redux/actions';
import { useStore } from "react-redux";
import { useNavigate } from 'react-router-dom';

const url = "http://localhost:3001/api/v1/user/login";

function Login() {
  document.title = "Argent Bank - Login Page";

  const store = useStore();
  let navigate = useNavigate();

  // Handle request response
  function handleRequestResponse(email, password, data) {
    console.log(data);
    if (email && password) {
      if (data.status === 200) {
        localStorage.setItem("token", data.body.token);
        store.dispatch(loginAction(data.body.token));
        navigate("/profile");
      }
      else if (data.message === "Error: User not found!") {
        document.querySelector(".error").innerHTML = "Email invalide.";
      }
      else if (data.message === "Error: Password is invalid") {
        document.querySelector(".error").innerHTML = "Mot de passe invalide.";
      }
      else {
        document.querySelector(".error").innerHTML = "Identifiant ou mot de passe incorrect.";
      }
    }
    else {
      document.querySelector(".error").innerHTML = "Le mail ou le mot de passe n'est pas renseigné.";
    }
  } 

  // Login the user
  async function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let login = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    });

    let data = await login.json();

    handleRequestResponse(email, password, data);
  }

  return (
    <div className="homepage">
      <Header />
        <main className="login-main">
            <section className="login-form">
              <div className="login-content">
                  <FontAwesomeIcon icon={faCircleUser} className="login-user-icon" size="lg" style={{color: "#2c3e50",}} />
                  <h2 className="login-form-title">Log in</h2>
                  <form>
                    <div className="input-wrapper">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="input-wrapper">
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" name="password" required />
                    </div>
                    <div className="input-remember">
                      <input type="checkbox" name="remember" id="remember-me" />
                      <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button className="login-button" type="submit" onClick={loginUser}>Log in</button>
                  </form>
                  <div className="error"></div>
              </div>
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default Login;