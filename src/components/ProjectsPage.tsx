import "../styles/projectsPage.scss";
import { useEffect, useState, useRef, useMemo } from "react";

import json from "./projects.json";

const pagination = (
  current: number,
  numberOfPages: number,
  setCurrentProject: any
) => {
  const numbers = [];
  const startingIndex =
    numberOfPages - current < 4 ? numberOfPages - 4 : current;
  for (let i = startingIndex; i < current + 5 && i <= numberOfPages; i++) {
    numbers.push(
      <div
        className={`${current === i ? "active" : ""}`}
        onClick={() => {
          setCurrentProject(i);
        }}
      >
        <img
          src={
            process.env.PUBLIC_URL + "/assets/images/ProjectsPage/numberBkg.png"
          }
          alt=""
        />
        <span>{i}</span>
      </div>
    );
  }
  return numbers;
};

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState<number>(1);
  const [currentProjectAsset, setCurrentProjectAsset] = useState<number>(1);
  // const [jsonData, setJsonData] = useState(json);
  const project = useMemo(() => {
    return json.projects[currentProject - 1];
  }, [currentProject]);

  useEffect(() => {
    const contentWrapper = document.querySelector(
      ".ProjectsPage .contentWrapper"
    ) as HTMLElement;
    const presentationContent = document.querySelector(
      ".ProjectsPage .contentWrapper"
    )?.childNodes as NodeListOf<HTMLElement>;

    presentationContent![currentProjectAsset - 1].addEventListener(
      "canplay",
      () => {
        contentWrapper!.style.width =
          presentationContent![currentProjectAsset - 1].getBoundingClientRect()
            .width + "px";
      }
    );
  }, [currentProjectAsset]);

  useEffect(() => {
    setCurrentProjectAsset(1);
    const presentationContent = document.querySelector(
      ".ProjectsPage .contentWrapper"
    )?.childNodes as NodeListOf<HTMLElement>;

    presentationContent.forEach((el: any) => {
      el.style.visibility = "hidden";
      if (el.readyState === 4) {
        el.style.visibility = "visible";
      } else {
        el.addEventListener("canplay", () => {
          el.style.visibility = "visible";
        });
      }
    });
  }, [currentProject]);

  useEffect(() => {
    window.addEventListener("load", () => {
      const contentWrapper = document.querySelector(
        ".ProjectsPage .contentWrapper"
      ) as HTMLElement;
      const presentationContent = document.querySelector(
        ".ProjectsPage .contentWrapper"
      )?.childNodes as NodeListOf<HTMLElement>;

      presentationContent.forEach((el: any) => {
        el.style.visibility = "hidden";
        if (el.readyState === 4) {
          el.style.visibility = "visible";
        } else {
          el.addEventListener("canplay", () => {
            el.style.visibility = "visible";
          });
        }
      });
      presentationContent![currentProjectAsset - 1].addEventListener(
        "canplay",
        () => {
          contentWrapper!.style.width =
            presentationContent![
              currentProjectAsset - 1
            ].getBoundingClientRect().width + "px";
        }
      );
    });
  }, []);

  return (
    <>
      <section className="ProjectsPage">
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/images/ProjectsPage/backgroundPiece1.png"
          }
          alt=""
          className="backgroundPiece1"
        />
        <img
          src={
            process.env.PUBLIC_URL +
            "/assets/images/ProjectsPage/backgroundPiece2.png"
          }
          alt=""
          className="backgroundPiece2"
        />
        <h2>PROJECTS</h2>
        <div className="project">
          <div className="leftSide">
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/ProjectsPage/whiteBrush.png"
              }
              alt=""
              className="brush"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button
              className={`${
                currentProject < json.projects.length ? "" : "inactive"
              }`}
              onClick={() => {
                if (currentProject < json.projects.length) {
                  setCurrentProject(currentProject + 1);
                }
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ProjectsPage/buttonBkg.png"
                }
                alt=""
              />
              <span>NEXT PROJECT</span>
            </button>
          </div>
          <div className={`presentation`}>
            <button
              className="prev"
              onClick={() => {
                setCurrentProjectAsset(currentProjectAsset - 1);
                if (currentProjectAsset === 1) {
                  setCurrentProjectAsset(project.videos.length);
                } else {
                  setCurrentProjectAsset(currentProjectAsset - 1);
                }
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ProjectsPage/arrowLeft.png"
                }
                alt=""
              />
            </button>
            <div className="contentWrapper">
              {project.videos.map((el, index) => (
                <>
                  <video
                    className={`${
                      index + 1 === currentProjectAsset ? "active" : ""
                    }`}
                    style={{ visibility: "hidden" }}
                    autoPlay={true}
                    playsInline={true}
                    muted={true}
                    controls={true}
                    src={process.env.PUBLIC_URL + "/assets/videos/" + el}
                  ></video>
                </>
              ))}
            </div>
            <button
              className="next"
              onClick={() => {
                if (currentProjectAsset === project.videos.length) {
                  setCurrentProjectAsset(1);
                } else {
                  setCurrentProjectAsset(currentProjectAsset + 1);
                }
              }}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ProjectsPage/arrowRight.png"
                }
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="pagination">
          <button
            className={`left ${currentProject === 1 ? "inactive" : ""}`}
            onClick={() => {
              if (currentProject > 1) {
                setCurrentProject(currentProject - 1);
              }
            }}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/ProjectsPage/arrowLeft2.png"
              }
              alt=""
            />
          </button>
          <div className="numbers">
            {pagination(
              currentProject,
              json.projects.length,
              setCurrentProject
            )}
          </div>
          <button
            className={`right ${
              currentProject < json.projects.length ? "" : "inactive"
            }`}
            onClick={() => {
              if (currentProject < json.projects.length) {
                setCurrentProject(currentProject + 1);
              }
            }}
          >
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/ProjectsPage/arrowRight2.png"
              }
              alt=""
            />
          </button>
        </div>
      </section>
    </>
  );
}
