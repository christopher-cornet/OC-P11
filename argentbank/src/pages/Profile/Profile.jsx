import './Profile.css';
import Header from "../../components/Header/Header"
import BankCard from "../../components/BankCard/BankCard"
import Footer from "../../components/Footer/Footer"
import { useState, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userProfile } from '../../redux/actions';

const url = "http://localhost:3001/api/v1/user/profile";

function Profile() {
  document.title = "Argent Bank - Profile Page";

  const store = useStore();
  let navigate = useNavigate();

  const token = window.sessionStorage.getItem("token");

  // If the user is not logged in, redirect the user to the login page
  if (!token) {
    navigate("/login");
  }

  const [userData, SetUserData] = useState("");
  const [editMode, setEditMode] = useState("notEditing");

  useEffect(() => {
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
  }, [store, token]);

  function editUserName() {
    if (editMode === "notEditing") {
      setEditMode("editing");
    }
    else {
      setEditMode("notEditing");
    }
  }

  return (
    <div className="profile_page">
        <Header />
        <main className="profile-informations">
            <div className="welcome-informations">
                <h1 className="welcome-user" style={editMode === "editing" ? {display: 'none'} : {display: 'block'}}>
                  Welcome back<br />
                  {userData ? userData.userName + " !" : "Name !"}
                </h1>
                <button onClick={editUserName} style={editMode === "editing" ? {display: 'none'} : {display: 'block'}}>Edit Name</button>
                <section className="user-informations" style={editMode === "notEditing" ? {display: 'none'} : {display: 'flex'}}>
                  <p className="user_title">Edit user info</p>
                  <div className="user_block">
                    <label htmlFor="username">User name:</label>
                    <input type="text" name="username" id="username" />
                  </div>
                  <div className="user_block">
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" name="firstname" id="firstname" />
                  </div>
                  <div className="user_block">
                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" name="lastname" id="lastname" />
                  </div>
                  <div className="actions_buttons">
                    <button>Save</button>
                    <button onClick={editUserName}>Cancel</button>
                  </div>
                </section>
            </div>
            <div className="argentbank-user-cards">
              <BankCard />
              <BankCard />
              <BankCard />
            </div>
        </main>
        <Footer />
    </div>
  );
}

export default Profile;