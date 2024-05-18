import './Profile.css';
import Header from "../../components/Header/Header"
import BankCard from "../../components/BankCard/BankCard"
import Footer from "../../components/Footer/Footer"

function Profile() {
  document.title = "Argent Bank - Profile Page";
  return (
    <div className="profile_page">
        <Header />
        <main className="profile-informations">
            <div className="welcome-informations">
                <h1 className="welcome-user">
                    Welcome back<br />
                    Name!
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