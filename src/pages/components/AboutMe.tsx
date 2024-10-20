import React from "react";
import "../styles/aboutMe.scss";

export default function AboutMe() {
  return (
    <>
      <section className="AboutMe" id="about-me">
        <img
          data-img-src={"./images/AboutMe/backgroundPiece1.png"}
          alt="Background Piece"
          className="backgroundPiece1"
          loading="lazy"
        />
        <img
          data-img-src={"./images/AboutMe/backgroundPiece2.png"}
          alt="Background Piece"
          className="backgroundPiece2"
          loading="lazy"
        />
        <img
          data-img-src={"./images/AboutMe/backgroundPiece3.png"}
          alt="Background Piece"
          className="backgroundPiece3"
          loading="lazy"
        />
        <div className="middle">
          <img
            data-img-src={"./images/AboutMe/textBkg.png"}
            alt="Text Background"
            className="textBkg"
            loading="lazy"
          />
          <img
            data-img-src={"./images/AboutMe/japaneseName.png"}
            alt="Japanese Name"
            className="japaneseName"
            loading="lazy"
          />
          <img
            data-img-src={"./images/AboutMe/japaneseSurname.png"}
            alt="Japanese Surname"
            className="japaneseSurname"
            loading="lazy"
          />
          <img
            data-img-src={"./images/AboutMe/itemShadow.png"}
            alt="Shadow"
            className="shadow1"
            loading="lazy"
          />
          <img
            data-img-src={"./images/AboutMe/beer.png"}
            alt="Beer"
            className="beer"
            loading="lazy"
          />
          <img
            data-img-src={"./images/AboutMe/itemShadow.png"}
            alt="Shadow"
            className="shadow2"
            loading="lazy"
          />
          <img
            data-img-src={"./images/AboutMe/popcorn.png"}
            alt="Popcorn"
            className="popcorn"
            loading="lazy"
          />
          <img
            data-img-src={"./images/AboutMe/itemShadow.png"}
            alt="Shadow"
            className="shadow3"
            loading="lazy"
          />
          <img
            data-img-src={"./images/AboutMe/joystick.png"}
            alt="Joystick"
            className="joystick"
            loading="lazy"
          />
          <img
            data-img-src={"./images/AboutMe/signature.png"}
            alt="Signature"
            className="signature"
            loading="lazy"
          />
          <h2>ABOUT ME</h2>
          <p>
            Hello, I'm Vladimir Karić, software developer currently pursuing my
            studies at the prestigious Faculty of Technical Science in Serbia.
            My passion for software development blossomed during my high school
            years, and ever since, I have been enamored by the incredible
            possibilities it offers.
            <br />
            <br />
            What captivates me the most about front-end development is the
            gratifying feeling of crafting a product that not only looks
            visually stunning but also functions seamlessly. There's something
            truly rewarding about taking an idea and transforming it into a
            tangible digital experience that leaves a lasting impact.
            <br />
            <br />
            My journey began as a freelancer on Upwork, where I had the
            opportunity to collaborate with a diverse range of clients. Working
            closely with them, I gained invaluable insights into their needs,
            enabling me to better understand their requirements and deliver
            solutions that exceeded their expectations. This experience helped
            shape me into a developer who not only writes code but also connects
            with clients on a deeper level.
            <br />
            <br />
            Continuing my professional growth, I joined the remarkable team at
            Rock Paper Reality, a specialized company known for its expertise in
            creating augmented reality (AR) applications. As a front-end
            developer in this innovative firm, I thrive on designing captivating
            UI/UX interfaces for web-based AR apps. I strive to push the
            boundaries of what's possible, ensuring that every user's
            interaction with the application is nothing short of extraordinary.
            <br />
            <br />
            In my work, I blend technical skills with artistic vision, aiming to
            create seamless and intuitive experiences. I believe in simplifying
            complex concepts and translating them into elegant and user-friendly
            designs. Each line of code I write is infused with my passion for
            innovation and my unwavering commitment to delivering excellence.
            <br />
            <br />
            As you explore my portfolio website, get ready to embark on a
            captivating journey where technology meets artistry. Experience the
            fusion of stunning visuals, flawless functionality, and my unique
            creative touch. Together, let's push the limits of what software
            development can achieve and inspire others to see the remarkable
            possibilities that lie ahead.
            <br />
            <br />
            Welcome to my world, where I transform ideas into immersive digital
            masterpieces. Let's create something extraordinary together.
          </p>
          <button
            onClick={() => {
              document.querySelector(".ProjectsPage")!.scrollIntoView({
                behavior: "smooth",
                block: "end",
              });
            }}
          >
            <img
              data-img-src={"./images/AboutMe/buttonBkg.png"}
              alt="Button Background"
              className="bkg"
              loading="lazy"
            />
            <span>MY PROJECTS</span>
          </button>
        </div>
      </section>
    </>
  );
}
