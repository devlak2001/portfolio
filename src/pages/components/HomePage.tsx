import React, { useEffect } from "react";
import "../styles/homePage.scss";
import { useState } from "react";

import GithubIcon, { LinkedinIcon, GmailIcon, PhoneShadow } from "../svg/icons";

let bkgMusic: any;
export default function HomePage() {
  const [speakerOn, setSpeakerOn] = useState(false);
  const [loadAudio, setLoadAudio] = useState(false);

  useEffect(() => {
    if (loadAudio) {
      bkgMusic = new Audio("./audios/bkgMusic.mp3");
    }
  }, [loadAudio]);

  useEffect(() => {
    if (bkgMusic) {
      if (speakerOn) {
        bkgMusic.play();
      } else {
        bkgMusic.pause();
      }
    }
  }, [speakerOn]);
  return (
    <>
      <header id="home-page">
        <img
          src="./images/homePage/backgroundPiece1.png"
          alt="Background Piece"
          className="backgroundPiece1"
        />
        <img
          src="./images/homePage/backgroundPiece2.png"
          alt="Background Piece"
          className="backgroundPiece2"
        />
        <img
          src="./images/homePage/backgroundPiece3.png"
          alt="Background Piece"
          className="backgroundPiece3"
        />
        <div className="leftSide">
          <img
            src="./images/homePage/whiteBrush.png"
            alt="White Brush stroke"
            className="brush"
          />
          <h1>
            VLADIMIR KARIC
            <img
              src="./images/homePage/katana.png"
              alt="Katana"
              className="katana"
            />
          </h1>
          <p>
            Transcending Solutions,
            <br />
            Redefining Boundaries!
          </p>
          <div className="socials">
            <h2>SOCIALS:</h2>
            <div className="links">
              <a
                href="https://www.linkedin.com/in/vladimir-karic/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://github.com/devlak2001"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
              <a href="mailto: vladimirkaric2001@gmail.com">
                <GmailIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <img
            src="./images/homePage/keyboardMouse.png"
            alt=" Keyboard and Mouse"
            className="keyboardMouse"
          />
          <img
            src="./images/homePage/monitor.png"
            alt="Monitor"
            className="monitor"
          />
          <img
            src="./images/homePage/speaker.png"
            alt="Speaker"
            className={`speaker ${speakerOn ? "on" : ""}`}
            onClick={() => {
              setLoadAudio(true);
              setSpeakerOn(!speakerOn);
            }}
          />
          <svg
            width="123"
            height="297"
            viewBox="0 0 123 297"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`speakerWaves ${speakerOn ? "on" : ""}`}
          >
            <g clipPath="url(#clip0_298_126)">
              <path
                className="first"
                d="M10.2701 4.79959L77.9326 35.3874L65.741 52.898L111.656 84.9766L47.4484 56.3745L58.3349 38.3877L10.2701 4.79959Z"
                fill="black"
                stroke="white"
                strokeWidth="1.22105"
                strokeMiterlimit="2"
                strokeLinejoin="round"
              />
              <path
                className="second"
                d="M5.23938 111.473L62.0303 91.6745L64.6432 108.758L109.498 101.971L55.8442 121.005L52.1994 104.372L5.23938 111.473Z"
                fill="black"
                stroke="white"
                strokeWidth="1.22105"
                strokeMiterlimit="2"
                strokeLinejoin="round"
              />
              <path
                className="third"
                d="M43.4502 294.027L94.8897 268.655L85.0218 255.454L119.633 229.495L70.8106 253.246L79.6822 266.847L43.4502 294.027Z"
                fill="black"
                stroke="white"
                strokeWidth="1.22105"
                strokeMiterlimit="2"
                strokeLinejoin="round"
              />
              <path
                className="fourth"
                d="M35.642 210.298L80.6647 221.747L81.5369 208.427L116.508 210.66L73.949 199.588L72.2524 212.632L35.642 210.298Z"
                fill="black"
                stroke="white"
                strokeWidth="1.22105"
                strokeMiterlimit="2"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_298_126">
                <rect
                  width="111.639"
                  height="291.889"
                  fill="white"
                  transform="translate(0.830078 4.52679) rotate(-2.03495)"
                />
              </clipPath>
            </defs>
          </svg>

          <PhoneShadow className="phoneShadow" />

          {/* <video
            loop={true}
            ref={phoneVideo}
            src={ "/videos/homePageVideo.mp4"}
          ></video> */}
          <img
            // onClick={() => {
            //   // if (phoneVideo.current!.paused) {
            //   //   phoneVideo.current!.play();
            //   // } else {
            //   //   phoneVideo.current!.pause();
            //   // }
            // }}
            onClick={async () => {
              const shareData = {
                url: window.location.href,
              };
              try {
                await navigator.share(shareData);
              } catch (err) {
                console.log(err);
              }
            }}
            src="./images/homePage/phone.png"
            alt="Phone"
            className="phone"
          />
        </div>
        <div className="bottomSide">
          <div className="numberWrapper">
            <img
              src="./images/homePage/cloud.png"
              alt="Cloud"
              className="cloud"
            />
            <div className="text">
              HAPPY
              <br />
              CLIENTS
            </div>
            <div className="number">20+</div>
          </div>
          <div className="numberWrapper">
            <img
              src="./images/homePage/cloud.png"
              alt="Cloud"
              className="cloud"
            />
            <div className="text">
              YEARS OF
              <br />
              EXPERIENCE
            </div>
            <div className="number">6+</div>
          </div>
        </div>
      </header>
    </>
  );
}
