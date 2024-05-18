import './Footer.css';

function Footer() {
  if (window.location.pathname === "/profile") {
    return (
      <footer style={{border: "none"}}>
        <p>Copyright 2020 Argent Bank</p>
      </footer>
    );
  }
  return (
    <footer>
      <p>Copyright 2020 Argent Bank</p>
    </footer>
  );
}

export default Footer;