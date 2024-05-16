import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {
    return (
      <header>
          <Link to="/">
            <section>
                <img src={logo} className="logo" alt="Accueil du site Argent Bank" />
            </section>
          </Link>
          <Link to="login">
            <section className="login">
                <FontAwesomeIcon icon={faCircleUser} className="user-icon" size="lg" style={{color: "#000000",}} />
                <p className="sign-in">Sign In</p>
            </section>
          </Link>
      </header>
    );
  }
  
  export default Header;