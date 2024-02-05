import React from "react";
import "../styles/experiencePage.scss";

export default function ExperiencePage() {
  return (
    <>
      <section className="ExperiencePage">
        <img
          src={"./images/ExperiencePage/backgroundPiece1.png"}
          alt=""
          className="backgroundPiece1"
        />
        <img
          src={"./images/ExperiencePage/backgroundPiece2.png"}
          alt=""
          className="backgroundPiece2"
        />
        <div className="contentWrapper">
          <div className="clients">
            <h2>CLIENTS</h2>
            <div className="logos">
              <img src={"./images/ExperiencePage/microsoft.png"} alt="" />
              <img src={"./images/ExperiencePage/intel.png"} alt="" />
              <img src={"./images/ExperiencePage/chronicCellars.png"} alt="" />
              <img src={"./images/ExperiencePage/glenlivet.png"} alt="" />
              <img src={"./images/ExperiencePage/corona.png"} alt="" />
              <img src={"./images/ExperiencePage/redbull.png"} alt="" />
              <img src={"./images/ExperiencePage/lenovo.png"} alt="" />
              <img src={"./images/ExperiencePage/rpr.png"} alt="" />
              <img src={"./images/ExperiencePage/atomic.png"} alt="" />
              <img src={"./images/ExperiencePage/raaleks.png"} alt="" />
              <img src={"./images/ExperiencePage/sunstone.png"} alt="" />
            </div>
          </div>
          <div className="tech">
            <h2>TECHNOLOGIES</h2>
            <div className="logos">
              <img src={"./images/ExperiencePage/html.png"} alt="" />
              <img src={"./images/ExperiencePage/css.png"} alt="" />
              <img src={"./images/ExperiencePage/js.png"} alt="" />
              <img src={"./images/ExperiencePage/ts.png"} alt="" />
              <img src={"./images/ExperiencePage/nodejs.png"} alt="" />
              <img src={"./images/ExperiencePage/jquery.png"} alt="" />
              <img src={"./images/ExperiencePage/react.png"} alt="" />
              <img src={"./images/ExperiencePage/nextjs.png"} alt="" />
              <img src={"./images/ExperiencePage/git.png"} alt="" />
              <img src={"./images/ExperiencePage/threejs.png"} alt="" />
              <img src={"./images/ExperiencePage/npm.png"} alt="" />
              <img src={"./images/ExperiencePage/scss.png"} alt="" />
              <img src={"./images/ExperiencePage/figma.png"} alt="" />
              <img src={"./images/ExperiencePage/metaSpark.png"} alt="" />
              <img src={"./images/ExperiencePage/tailwind.png"} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
