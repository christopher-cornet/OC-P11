import './Footer.css';

function Footer() {
  const isProfilePage = window.location.pathname === "/profile";

  return (
    <>
      {isProfilePage ? (
        <footer style={{border: "none"}}>
          <p>Copyright 2020 Argent Bank</p>
        </footer>
      ) : (
        <footer>
          <p>Copyright 2020 Argent Bank</p>
        </footer>
      )}
    </>
  );
}

export default Footer;