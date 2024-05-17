import './Login.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

function Login() {
  document.title = "Argent Bank - Login Page";
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
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" name="remember" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="login-button" type="submit">Log in</button>
                    </form>
                </div>
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default Login;