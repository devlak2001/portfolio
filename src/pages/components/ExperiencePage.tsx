import React from "react";
import "../styles/experiencePage.scss";

export default function ExperiencePage() {
  return (
    <>
      <section className="ExperiencePage" id="experience">
        <img
          data-img-src={"./images/ExperiencePage/backgroundPiece1.png"}
          alt="Background Piece"
          className="backgroundPiece1"
          loading="lazy"
        />
        <img
          data-img-src={"./images/ExperiencePage/backgroundPiece2.png"}
          alt="Background Piece"
          className="backgroundPiece2"
          loading="lazy"
        />
        <div className="contentWrapper">
          <div className="clients">
            <h2>CLIENTS</h2>
            <div className="logos">
              <img
                data-img-src={"./images/ExperiencePage/microsoft.png"}
                alt="Microsoft logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/intel.png"}
                alt="Intel logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/chronicCellars.png"}
                alt="Chronic Cellars logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/glenlivet.png"}
                alt="Glenlivet logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/corona.png"}
                alt="Corona logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/redbull.png"}
                alt="Red Bull logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/lenovo.png"}
                alt="Lenovo logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/rpr.png"}
                alt="Rock Paper Reality logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/atomic.png"}
                alt="Atomic Digital Design logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/raaleks.png"}
                alt="Raaleks logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/sunstone.png"}
                alt="Sunstone Digital logo"
                loading="lazy"
              />
            </div>
          </div>
          <div className="tech">
            <h2>TECHNOLOGIES</h2>
            <div className="logos">
              <img
                data-img-src={"./images/ExperiencePage/html.png"}
                alt="HTML logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/css.png"}
                alt="CSS logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/js.png"}
                alt="JavaScript logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/ts.png"}
                alt="TypeScript logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/nodejs.png"}
                alt="NodeJS logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/jquery.png"}
                alt="JQuery logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/react.png"}
                alt="React logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/nextjs.png"}
                alt="Next.js logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/git.png"}
                alt="Git logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/threejs.png"}
                alt="Three.js logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/npm.png"}
                alt="Npm logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/scss.png"}
                alt="Scss logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/figma.png"}
                alt="Figma logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/metaSpark.png"}
                alt="Meta Spark Studio logo"
                loading="lazy"
              />
              <img
                data-img-src={"./images/ExperiencePage/tailwind.png"}
                alt="Tailwind CSS logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
