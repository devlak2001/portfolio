import { useEffect, useState } from "react";
import "../styles/navBar.scss";

export default function NavBar() {
  const [stick, setStick] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (event: any) => {
      const top = window.scrollY;
      if (top > 20) {
        setStick(true);
      } else {
        setStick(false);
      }
    });

    if (window.scrollY > 20) {
      setStick(true);
    } else {
      setStick(false);
    }
  }, []);

  return (
    <>
      <nav className={`${stick ? "stick" : ""}`}>
        <div className="inner">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
            alt=""
            className="logo"
          />
          <div className="links">
            <div
              className="link"
              onClick={() => {
                document.querySelector(".AboutMe")!.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                });
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/NavBar/linkBrush.png"
                }
                alt=""
                className="brush"
              />
              <span className="inactive">ABOUT ME</span>
              <span className="active">ABOUT ME</span>
            </div>
            <div className="link">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/NavBar/linkBrush.png"
                }
                alt=""
                className="brush"
              />
              <span className="inactive">PROJECTS</span>
              <span className="active">PROJECTS</span>
            </div>
            <div className="link">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/NavBar/linkBrush.png"
                }
                alt=""
                className="brush"
              />
              <span className="inactive">EXPERIENCE</span>
              <span className="active">EXPERIENCE</span>
            </div>
            <div className="link">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/NavBar/linkBrush.png"
                }
                alt=""
                className="brush"
              />
              <span className="inactive">CONTACT</span>
              <span className="active">CONTACT</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
