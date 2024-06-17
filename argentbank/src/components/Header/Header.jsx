import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faGear, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "react-redux";
import { logoutAction, userProfile } from "../../redux/actions"
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const isProfilePage = window.location.pathname === "/profile";

  let navigate = useNavigate();
  const store = useStore();

  console.log(store.getState());

  // Logout the user and reset the data
  function logout() {
    localStorage.removeItem("token");
    store.dispatch(logoutAction());
    store.dispatch(userProfile({}));
    navigate("/");
  }

  return (
    <header>
        <Link to="/">
          <section>
            <img src={logo} className="logo" alt="Accueil du site Argent Bank" />
          </section>
        </Link>
        {isProfilePage ? (
          <section className="login">
            <p className="sign-in" style={{marginRight: "10px", color: "#61b37b", fontWeight: "600"}}>{store ? store.getState().user.data.userName : "Name"}</p>
            <FontAwesomeIcon icon={faCircleUser} className="user-icon" size="lg" style={{marginRight: "20px", color: "#61b37b", height: "25px"}} />
            <FontAwesomeIcon icon={faGear} size="lg" style={{marginRight: "20px", color: "#61b37b", height: "25px"}} />
            <FontAwesomeIcon icon={faPowerOff} size="lg" className="logout-button" style={{color: "#61b37b", height: "25px"}} onClick={logout} />
          </section>
        ) : (
        <Link to="/login">
          <section className="login">
            <FontAwesomeIcon icon={faCircleUser} className="user-icon" size="lg" style={{color: "#2c3e50",}} />
            <p className="sign-in">Log In</p>
          </section>
        </Link>
        )}
    </header>
  );
}
  
export default Header;