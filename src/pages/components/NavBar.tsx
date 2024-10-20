import React from "react";
import { useEffect, useState } from "react";
import "../styles/navBar.scss";

export default function NavBar() {
  const [stick, setStick] = useState(false);
  const [mobileState, setMobileState] = useState<"active" | "inactive" | "">(
    ""
  );

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
      <nav className={`${stick ? "stick" : ""} ${mobileState}`}>
        <div className="inner">
          <a
            href="#home-page"
            onClick={() => {
              setMobileState("inactive");
            }}
          >
            <img src="./images/logo.png" alt="Logo" className="logo" />
          </a>
          <div className="links">
            <a
              href="#about-me"
              className="link"
              onClick={() => {
                setMobileState("inactive");
              }}
            >
              <img
                src="./images/navBar/linkBrush.png"
                alt="Brush stroke"
                className="brush"
              />
              <span className="inactive">ABOUT ME</span>
              <span className="active">ABOUT ME</span>
            </a>
            <a
              href="#projects"
              className="link"
              onClick={() => {
                setMobileState("inactive");
              }}
            >
              <img
                src="./images/navBar/linkBrush.png"
                alt="Brush stroke"
                className="brush"
              />
              <span className="inactive">PROJECTS</span>
              <span className="active">PROJECTS</span>
            </a>
            <a
              href="#experience"
              className="link"
              onClick={() => {
                setMobileState("inactive");
              }}
            >
              <img
                src="./images/navBar/linkBrush.png"
                alt="Brush stroke"
                className="brush"
              />
              <span className="inactive">EXPERIENCE</span>
              <span className="active">EXPERIENCE</span>
            </a>
          </div>
        </div>
        <button
          className="toggleButton"
          onClick={() => {
            if (mobileState === "active") {
              setMobileState("inactive");
            } else {
              setMobileState("active");
            }
          }}
        >
          <img src="./images/navBar/hamburger.png" alt="Hamburger icon" />
        </button>
      </nav>
      <a
        href="./Vladimir_Karic_CV.pdf"
        target="_blank"
        rel="noreferrer"
        className="viewResume"
      >
        <span>View Resume</span>
      </a>
    </>
  );
}
