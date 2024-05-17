import './App.css';
import Header from "./components/Header/Header"
// import Footer from "./components/Footer/Footer"

function App() {
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
        <section>
          <p>test2</p>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;