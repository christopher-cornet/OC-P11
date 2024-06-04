import './Profile.css';
import Header from "../../components/Header/Header"
import BankCard from "../../components/BankCard/BankCard"
import Footer from "../../components/Footer/Footer"
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userProfile } from '../../redux/actions';

const url = "http://localhost:3001/api/v1/user/profile";

function Profile() {
  document.title = "Argent Bank - Profile Page";

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const token = window.sessionStorage.getItem("token");

  // If the user is not logged in, redirect the user to the login page
  if (!token) {
    navigate("/login");
  }

  const [userData, SetUserData] = useState("");

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
        dispatch(
          userProfile({
            email: data.body.email,
            firstName: data.body.firstName,
            lastName: data.body.lastName,
            userName: data.body.userName,
          })
        );
      });
  }, [token, dispatch]);

  return (
    <div className="profile_page">
        <Header />
        <main className="profile-informations">
            <div className="welcome-informations">
                <h1 className="welcome-user">
                    Welcome back<br />
                    {userData ? userData.userName + " !" : "Name !"}
                </h1>
                <button>Edit Name</button>
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