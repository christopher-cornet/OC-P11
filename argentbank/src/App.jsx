import './App.css';
import Header from "./components/Header/Header"
import HomeCard from "./components/HomeCard/HomeCard"
import img1 from "../src/images/icon-chat.webp"
import img2 from "../src/images/icon-money.webp"
import img3 from "../src/images/icon-security.webp"
import Footer from "./components/Footer/Footer"

function App() {
  document.title = "Argent Bank - Home Page";
  return (
    <div className="homepage">
      <Header />
      <main>
        <section className="home_first_section">
          <div className="content">
            <p className="title">
              No fees. <br /> 
              No minimum deposit. <br />
              High interest rates.
            </p>
            <p className="subtitle">Open a savings account with Argent Bank today!</p>
          </div>
        </section>
        <section className="cards">
          <HomeCard
            image={img1}
            title="You are our #1 priority"
            subtitle="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            alt="Chat, speech bubble"
          />
          <HomeCard
            image={img2}
            title="More savings means higher rates"
            subtitle="The more you save with us, the higher your interest rate will be!"
            alt="Money, pack of dollars"
          />
          <HomeCard
            image={img3}
            title="Security you can trust"
            subtitle="We use top of the line encryption to make sure your data and money is always safe."
            alt="Security, shield"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;