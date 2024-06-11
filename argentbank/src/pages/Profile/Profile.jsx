import './Profile.css';
import Header from "../../components/Header/Header"
import BankCard from "../../components/BankCard/BankCard"
import Footer from "../../components/Footer/Footer"
import { useState, useEffect } from 'react';
import { useStore } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userProfile, updateUsername } from '../../redux/actions';

const url = "http://localhost:3001/api/v1/user/profile";

function Profile() {
  document.title = "Argent Bank - Profile Page";

  const store = useStore();
  let navigate = useNavigate();

  const token = localStorage.getItem("token");

  // If the user is not logged in, redirect the user to the login page
  if (!token) {
    navigate("/login");
  }

  const [userData, SetUserData] = useState("");
  const [editMode, setEditMode] = useState("notEditing");

  const [userName, setUserName] = useState("");

  // Get user data
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

  // On click on the "Edit Name" button : Display the form
  function displayForm(event) {
    event.preventDefault();

    // If we are not editing the user informations
    // Change the mode to "Editing"
    if (editMode === "notEditing") {
      setEditMode("editing");
    }
    // Else if we are editing the user informations
    // Change the mode to "not Editing"
    else {
      setEditMode("notEditing");
    }
  }

  // On click on the "Save" button :
  // Edit and Update the username
  async function editUserName(event) {
    event.preventDefault();

    // Update the username
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userName: userName
      })
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      SetUserData(data.body);
      store.dispatch(updateUsername(data.body.userName));
      console.log("username : ", data.body.userName);
      displayForm(event);
      // const username = data.body.userName;
      // store.dispatch(updateUsername(username));
    }
  }

  // Return the username
  function handleUsernameChange(event) {
    setUserName(event.target.value);
    
    return event.target.value;
  }

  console.log(store.getState());

  return (
    <div className="profile_page">
        <Header />
        <main className="profile-informations">
            <div className="welcome-informations">
                <h1 className="welcome-user" style={editMode === "editing" ? {display: 'none'} : {display: 'block'}}>
                  Welcome back<br />
                  {userData ? userData.userName + " !" : "Name !"}
                </h1>
                <button onClick={displayForm} style={editMode === "editing" ? {display: 'none'} : {display: 'block'}}>Edit Name</button>
                <form className="user-informations" style={editMode === "notEditing" ? {display: 'none'} : {display: 'flex'}}>
                  <p className="user_title">Edit user info</p>
                  <div className="user_block">
                    <label htmlFor="username">User name:</label>
                    <input type="text" name="username" id="username" defaultValue={store.getState().user.data.userName || ""} onChange={handleUsernameChange} />
                  </div>
                  <div className="user_block">
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" name="firstname" id="firstname" defaultValue={store.getState().user.data.firstName || ""} disabled />
                  </div>
                  <div className="user_block">
                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" name="lastname" id="lastname" defaultValue={store.getState().user.data.lastName || ""} disabled />
                  </div>
                  <div className="actions_buttons">
                    <button onClick={editUserName}>Save</button>
                    <button onClick={displayForm}>Cancel</button>
                  </div>
                </form>
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