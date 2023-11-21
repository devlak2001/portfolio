import "../styles/experiencePage.scss";

export default function ExperiencePage() {
  return (
    <>
      <section className="ExperiencePage">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/images/ExperiencePage/backgroundPiece1.png"
          }
          alt=""
          className="backgroundPiece1"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/images/ExperiencePage/backgroundPiece2.png"
          }
          alt=""
          className="backgroundPiece2"
        />
        <div className="contentWrapper">
          <div className="clients">
            <h2>CLIENTS</h2>
            <div className="logos">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/microsoft.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/intel.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/chronicCellars.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/glenlivet.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/corona.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/redbull.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/lenovo.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/rpr.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/atomic.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/raaleks.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/sunstone.png"
                }
                alt=""
              />
            </div>
          </div>
          <div className="tech">
            <h2>TECHNOLOGIES</h2>
            <div className="logos">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/html.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/css.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/js.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/ts.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/nodejs.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/jquery.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/react.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/nextjs.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/git.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/threejs.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/npm.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/scss.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/figma.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/metaSpark.png"
                }
                alt=""
              />
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ExperiencePage/tailwind.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
