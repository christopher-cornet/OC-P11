import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faGear, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
  const isProfilePage = window.location.pathname === "/profile";

  return (
    <header>
        <Link to="/">
          <section>
              <img src={logo} className="logo" alt="Accueil du site Argent Bank" />
          </section>
        </Link>
        {isProfilePage ? (
          <section className="login">
            <p className="sign-in" style={{marginRight: "10px", color: "#61b37b", fontWeight: "600"}}>Name</p>
            <FontAwesomeIcon icon={faCircleUser} className="user-icon" size="lg" style={{marginRight: "20px", color: "#61b37b", height: "25px"}} />
            <FontAwesomeIcon icon={faGear} size="lg" style={{marginRight: "20px", color: "#61b37b", height: "25px"}} />
            <Link to="/login">
              <FontAwesomeIcon icon={faPowerOff} size="lg" style={{color: "#61b37b", height: "25px"}} />
            </Link>
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