import './Profile.css';
import Header from "../../components/Header/Header"

function Profile() {
  document.title = "Argent Bank - Profile Page";
  return (
    <div className="homepage">
        <Header />
        <section className="profile-informations">
            <div className="welcome-informations">
                <h1 className="welcome-user">
                    Welcome back,<br />
                    Name!
                </h1>
                <button>Edit Name</button>
            </div>
        </section>
    </div>
  );
}

export default Profile;