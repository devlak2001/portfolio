import "../styles/experiencePage.scss";
import { useEffect, useState, useRef, useMemo } from "react";

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
                  "/assets/images/ExperiencePage/prime.png"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
