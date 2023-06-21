import "../styles/navBar.scss";

export default function NavBar() {
  return (
    <>
      <nav>
        <div className="inner">
          <img
            src={process.env.PUBLIC_URL + "assets/images/logo.png"}
            alt=""
            className="logo"
          />
          <div className="links">
            <div className="link">ABOUT ME</div>
            <div className="link">PROJECTS</div>
            <div className="link">EXPERIENCE</div>
            <div className="link">CONTACT</div>
          </div>
        </div>
      </nav>
    </>
  );
}
