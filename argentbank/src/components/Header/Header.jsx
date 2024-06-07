import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/argentBankLogo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faGear, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { userProfile } from "../../redux/actions"
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions";
import "./Header.css";

const url = "http://localhost:3001/api/v1/user/profile";

function Header() {
  const isProfilePage = window.location.pathname === "/profile";

  const token = window.sessionStorage.getItem("token");
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const store = useStore();

  const [userData, SetUserData] = useState("");

  console.log(token);

  useEffect(() => {
    if (isProfilePage) {
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
          dispatch(
            userProfile({
              email: data.body.email,
              firstName: data.body.firstName,
              lastName: data.body.lastName,
              userName: data.body.userName,
            })
          );
        });
      }
    }, [isProfilePage, token, dispatch]);

  function logout() {
    window.sessionStorage.removeItem("token");
    store.dispatch(logoutAction());
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
            <p className="sign-in" style={{marginRight: "10px", color: "#61b37b", fontWeight: "600"}}>{userData ? userData.userName : "Name"}</p>
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