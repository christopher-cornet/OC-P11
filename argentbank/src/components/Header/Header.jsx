import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faGear, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useStore } from "react-redux";
import { logoutAction, userProfile } from "../../redux/actions"
import { useNavigate } from "react-router-dom";
import "./Header.css";

const url = "http://localhost:3001/api/v1/user/profile";

function Header() {
  const isLoggedIn = localStorage.getItem("token");
  const isHomePage = window.location.pathname === "/";

  let navigate = useNavigate();

  const token = localStorage.getItem("token");

  const store = useStore();

  console.log("Store:", store.getState());

  // eslint-disable-next-line
  const [userData, SetUserData] = useState("");

  // Get user data
  useEffect(() => {
    // If the user is logged in, fetch and display the user's data
    if (token) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          SetUserData(data.body);
          store.dispatch(
            userProfile({
              email: data.body.email,
              firstName: data.body.firstName,
              lastName: data.body.lastName,
              userName: data.body.userName,
            })
          );
        });
    }
  }, [store, token]);

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
        {isLoggedIn ? (
          isHomePage ? (
            <section className="login">
              <Link to="/profile"><p className="sign-in" style={{marginRight: "10px", color: "#61b37b", fontWeight: "600"}} >{isLoggedIn ? store.getState().user.data.userName  : "Name"}</p></Link>
              <Link to="/profile"><FontAwesomeIcon icon={faCircleUser} className="user-icon" size="lg" style={{marginRight: "10px", color: "#61b37b", height: "25px"}} /></Link>
              <p className="sign-in" style={{marginRight: "10px", color: "#61b37b", fontWeight: "600", cursor: "pointer"}} onClick={logout}>Sign Out</p>
              <FontAwesomeIcon icon={faPowerOff} size="lg" className="logout-button" style={{color: "#61b37b", height: "25px"}} onClick={logout} />
            </section>
          ) : (
            <section className="login">
              <Link to="/profile"><p className="sign-in" style={{marginRight: "10px", color: "#61b37b", fontWeight: "600"}} >{isLoggedIn ? store.getState().user.data.userName  : "Name"}</p></Link>
              <Link to="/profile"><FontAwesomeIcon icon={faCircleUser} className="user-icon" size="lg" style={{marginRight: "20px", color: "#61b37b", height: "25px"}} /></Link>
              <FontAwesomeIcon icon={faGear} size="lg" style={{marginRight: "20px", color: "#61b37b", height: "25px"}} />
              <FontAwesomeIcon icon={faPowerOff} size="lg" className="logout-button" style={{color: "#61b37b", height: "25px"}} onClick={logout} />
            </section>
          )
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