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
    const currentSlide = document.querySelectorAll(
      ".ProjectsPage .contentWrapper .slide"
    )[currentProjectAsset - 1];
    const currentVideo = currentSlide.childNodes[0] as HTMLVideoElement;

    (currentSlide.childNodes[1] as HTMLVideoElement).style.opacity = "1";
    (currentSlide.childNodes[1] as HTMLVideoElement).style.opacity = "all";
    if (currentVideo.readyState === 4) {
      (currentSlide.childNodes[1] as HTMLVideoElement).style.opacity = "0";
      (currentSlide.childNodes[1] as HTMLVideoElement).style.opacity = "none";
      (currentSlide.childNodes[1] as HTMLVideoElement).style.width =
        currentVideo.getBoundingClientRect().width + "px";
      contentWrapper!.style.width =
        currentVideo.getBoundingClientRect().width + "px";
    } else {
      currentVideo.addEventListener("canplay", () => {
        (currentSlide.childNodes[1] as HTMLVideoElement).style.opacity = "0";
        (currentSlide.childNodes[1] as HTMLVideoElement).style.opacity = "none";
        (currentSlide.childNodes[1] as HTMLVideoElement).style.width =
          currentVideo.getBoundingClientRect().width + "px";
        contentWrapper!.style.width =
          currentVideo.getBoundingClientRect().width + "px";
      });
    }
  }, [currentProjectAsset]);

  useEffect(() => {
    setCurrentProjectAsset(1);
    const presentationContent = document.querySelectorAll(
      ".ProjectsPage .contentWrapper .slide"
    ) as any;

    presentationContent.forEach((el: HTMLElement, index: number) => {
      (el.childNodes[0] as HTMLVideoElement).style.visibility = "hidden";
      (el.childNodes[1] as HTMLElement).style.opacity = "1";
      (el.childNodes[1] as HTMLElement).style.pointerEvents = "all";
      if ((el.childNodes[0] as HTMLVideoElement).readyState === 4) {
        (el.childNodes[0] as HTMLVideoElement).style.visibility = "visible";
        (el.childNodes[1] as HTMLElement).style.opacity = "0";
        (el.childNodes[1] as HTMLElement).style.pointerEvents = "none";
      } else {
        el.childNodes[0].addEventListener("canplay", () => {
          (el.childNodes[0] as HTMLVideoElement).style.visibility = "visible";
          (el.childNodes[1] as HTMLElement).style.opacity = "0";
          (el.childNodes[1] as HTMLElement).style.pointerEvents = "none";
        });
      }
    });
  }, [currentProject]);

  useEffect(() => {
    window.addEventListener("load", () => {
      const contentWrapper = document.querySelector(
        ".ProjectsPage .contentWrapper"
      ) as HTMLElement;
      const presentationContent = document.querySelectorAll(
        ".ProjectsPage .contentWrapper .slide"
      ) as any;
      presentationContent.forEach((el: any) => {
        console.log(el.childNodes[0] as HTMLVideoElement);
        (el.childNodes[0] as HTMLVideoElement).style.visibility = "hidden";
        if ((el.childNodes[0] as HTMLVideoElement).readyState === 4) {
          (el.childNodes[0] as HTMLVideoElement).style.visibility = "visible";
        } else {
          (el.childNodes[0] as HTMLVideoElement).addEventListener(
            "canplay",
            () => {
              (el.childNodes[0] as HTMLVideoElement).style.visibility =
                "visible";
            }
          );
        }
      });
      presentationContent![currentProjectAsset - 1].addEventListener(
        "canplay",
        () => {
          contentWrapper!.style.width =
            presentationContent![
              currentProjectAsset - 1
            ].childNodes[0].getBoundingClientRect().width + "px";
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
            {/* <button
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
            </button> */}
            <div className="pagination">
              <button
                className={`left`}
                onClick={() => {
                  if (currentProject > 1) {
                    setCurrentProject(currentProject - 1);
                  } else {
                    setCurrentProject(json.projects.length);
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
                className={`right`}
                onClick={() => {
                  if (currentProject < json.projects.length) {
                    setCurrentProject(currentProject + 1);
                  } else {
                    setCurrentProject(1);
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
          </div>
          <div className={`presentation`}>
            <div className="contentWrapper">
              {project.videos.map((el: any, index) => (
                <>
                  <div
                    className={`slide ${
                      index === currentProjectAsset - 1 ? "active" : ""
                    }`}
                  >
                    <video
                      className={`${
                        index + 1 === currentProjectAsset ? "active" : ""
                      }`}
                      muted={true}
                      controls={true}
                      style={{ visibility: "hidden" }}
                      poster={
                        process.env.PUBLIC_URL + "/assets/videos/" + el.poster
                      }
                      src={process.env.PUBLIC_URL + "/assets/videos/" + el.url}
                    ></video>
                    <div className="loadingOverlay" style={{ opacity: "0" }}>
                      <span className="loader"></span>
                    </div>
                  </div>
                </>
              ))}
            </div>
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
            <div className="number">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/ProjectsPage/buttonBkg.png"
                }
                alt=""
              />
              <span>{currentProjectAsset}</span>/
              <span>{project.videos.length}</span>
            </div>
            <img
              src={
                process.env.PUBLIC_URL +
                "/assets/images/ProjectsPage/projectGallery.png"
              }
              alt=""
              className="title"
            />
          </div>
        </div>
      </section>
    </>
  );
}
