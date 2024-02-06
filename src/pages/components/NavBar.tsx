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
          <img
            src={"./images/logo.png"}
            alt=""
            className="logo"
            onClick={() => {
              document.querySelector("header")!.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
              });
              setMobileState("inactive");
            }}
          />
          <div className="links">
            <div
              className="link"
              onClick={() => {
                document.querySelector(".AboutMe")!.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "start",
                });
                setMobileState("inactive");
              }}
            >
              <img
                src={"./images/NavBar/linkBrush.png"}
                alt=""
                className="brush"
              />
              <span className="inactive">ABOUT ME</span>
              <span className="active">ABOUT ME</span>
            </div>
            <div
              className="link"
              onClick={() => {
                document.querySelector(".ProjectsPage")!.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "start",
                });
                setMobileState("inactive");
              }}
            >
              <img
                src={"./images/NavBar/linkBrush.png"}
                alt=""
                className="brush"
              />
              <span className="inactive">PROJECTS</span>
              <span className="active">PROJECTS</span>
            </div>
            <div
              className="link"
              onClick={() => {
                document.querySelector(".ExperiencePage")!.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "start",
                });
                setMobileState("inactive");
              }}
            >
              <img
                src={"./images/NavBar/linkBrush.png"}
                alt=""
                className="brush"
              />
              <span className="inactive">EXPERIENCE</span>
              <span className="active">EXPERIENCE</span>
            </div>
            {/* <div className="link">
              <img
                src={
                   "./images/NavBar/linkBrush.png"
                }
                alt=""
                className="brush"
              />
              <span className="inactive">CONTACT</span>
              <span className="active">CONTACT</span>
            </div> */}
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
          <img src={"./images/NavBar/hamburger.png"} alt="" />
        </button>
      </nav>
      <a
        href={"./Vladimir_Karic_CV.pdf"}
        target="_blank"
        rel="noreferrer"
        className="viewResume"
      >
        <span>View Resume</span>
      </a>
    </>
  );
}
