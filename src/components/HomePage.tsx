import "../styles/homePage.scss";
export default function HomePage() {
  return (
    <>
      <header>
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/images/HomePage/backgroundPiece1.png"
          }
          alt=""
          className="backgroundPiece1"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/images/HomePage/backgroundPiece2.png"
          }
          alt=""
          className="backgroundPiece2"
        />
        <div className="leftSide">
          <img
            src={
              process.env.PUBLIC_URL + "/assets/images/HomePage/whiteBrush.png"
            }
            alt=""
            className="brush"
          />
          <h1>
            WEB DEVELOPER
            <img
              src={
                process.env.PUBLIC_URL + "/assets/images/HomePage/katana.png"
              }
              alt=""
              className="katana"
            />
          </h1>
          <p>
            Transcending Solutions,
            <br />
            Redefining Boundaries!
          </p>
          <div className="socials">
            <h3>SOCIALS:</h3>
            <div className="links">
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/HomePage/gmail.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/HomePage/linkedin.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/HomePage/upwork.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL + "/assets/images/HomePage/github.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="rightSide">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/HomePage/keyboardMouse.png"
            }
            alt=""
            className="keyboardMouse"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/HomePage/monitor.png"}
            alt=""
            className="monitor"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/HomePage/speaker.png"}
            alt=""
            className="speaker"
          />
          <img
            src={
              process.env.PUBLIC_URL + "/assets/images/HomePage/phoneShadow.png"
            }
            alt=""
            className="phoneShadow"
          />
          <img
            src={process.env.PUBLIC_URL + "/assets/images/HomePage/phone.png"}
            alt=""
            className="phone"
          />
        </div>
        <div className="bottomSide">
          <div className="numberWrapper">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/HomePage/cloud.png"}
              alt=""
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
              src={process.env.PUBLIC_URL + "/assets/images/HomePage/cloud.png"}
              alt=""
              className="cloud"
            />
            <div className="text">
              YEARS OF
              <br />
              EXPERIENCE
            </div>
            <div className="number">5+</div>
          </div>
        </div>
      </header>
    </>
  );
}
