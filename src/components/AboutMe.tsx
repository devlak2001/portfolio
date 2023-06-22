import "../styles/aboutMe.scss";
import { useEffect, useState, useRef } from "react";

export default function AboutMe() {
  return (
    <>
      <section className="AboutMe">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/images/AboutMe/backgroundPiece1.png"
          }
          alt=""
          className="backgroundPiece1"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/images/AboutMe/backgroundPiece2.png"
          }
          alt=""
          className="backgroundPiece2"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/images/AboutMe/backgroundPiece3.png"
          }
          alt=""
          className="backgroundPiece3"
        />
      </section>
    </>
  );
}
