import "../styles/projectsPage.scss";
import { useEffect, useState, useRef, useMemo } from "react";

import json from "./projects.json";

const pagination = (
  current: number,
  numberOfPages: number,
  setCurrentProject: any,
  setCurrentProjectAsset: any
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
          setCurrentProjectAsset(1);
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
    const currentSlide = document.querySelector(
      ".ProjectsPage .contentWrapper .slide"
    ) as HTMLElement;
    const currentVideo = currentSlide.childNodes[0] as HTMLVideoElement;
    const currentVideoOverlay = currentSlide.childNodes[1] as HTMLElement;

    currentVideoOverlay.style.opacity = "1";
    currentVideoOverlay.style.opacity = "all";
    if (currentVideo.readyState >= 2) {
      currentVideoOverlay.style.opacity = "0";
      currentVideoOverlay.style.opacity = "none";
    } else {
      currentVideo.addEventListener("loadedmetadata", () => {
        currentVideoOverlay.style.opacity = "0";
        currentVideoOverlay.style.opacity = "none";
      });
    }
  }, [currentProjectAsset]);

  useEffect(() => {
    const currentSlide = document.querySelector(
      ".ProjectsPage .contentWrapper .slide"
    ) as HTMLElement;

    const currentVideo = currentSlide.childNodes[0] as HTMLVideoElement;
    const currentVideoOverlay = currentSlide.childNodes[1] as HTMLElement;

    currentVideo.style.visibility = "hidden";
    currentVideoOverlay.style.opacity = "1";
    currentVideoOverlay.style.pointerEvents = "all";
    if (currentVideo.readyState >= 2) {
      currentVideo.style.visibility = "visible";
      currentVideoOverlay.style.opacity = "0";
      currentVideoOverlay.style.pointerEvents = "none";
    } else {
      currentVideo.addEventListener("loadedmetadata", () => {
        currentVideo.style.visibility = "visible";
        currentVideoOverlay.style.opacity = "0";
        currentVideoOverlay.style.pointerEvents = "none";
      });
    }
  }, [currentProject]);

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      const currentSlide = document.querySelector(
        ".ProjectsPage .contentWrapper .slide"
      ) as any;

      console.log("sss");
      (currentSlide.childNodes[0] as HTMLVideoElement).style.visibility =
        "hidden";
      if ((currentSlide.childNodes[0] as HTMLVideoElement).readyState >= 2) {
        (currentSlide.childNodes[0] as HTMLVideoElement).style.visibility =
          "visible";
      } else {
        (currentSlide.childNodes[0] as HTMLVideoElement).addEventListener(
          "loadedmetadata",
          () => {
            (currentSlide.childNodes[0] as HTMLVideoElement).style.visibility =
              "visible";
          }
        );
      }
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
            {project.associates && (
              <>
                <a href={project.associates[0].url}>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images" +
                      project.associates[0].img
                    }
                    className="badge"
                    alt=""
                  />
                </a>
              </>
            )}

            <div className="pagination">
              <button
                className={`left`}
                onClick={() => {
                  setCurrentProjectAsset(1);
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
                  setCurrentProject,
                  setCurrentProjectAsset
                )}
              </div>
              <button
                className={`right`}
                onClick={() => {
                  setCurrentProjectAsset(1);
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
              <div className={`slide active`}>
                <video
                  // className={`${
                  //   index + 1 === currentProjectAsset ? "active" : ""
                  // }`}
                  muted={true}
                  controls={true}
                  style={{ visibility: "hidden" }}
                  playsInline={true}
                  poster={
                    process.env.PUBLIC_URL +
                    "/assets/videos/" +
                    project.videos[currentProjectAsset - 1].poster
                  }
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/videos/" +
                    project.videos[currentProjectAsset - 1].url
                  }
                ></video>
                <div className="loadingOverlay" style={{ opacity: "0" }}>
                  <span className="loader"></span>
                </div>
              </div>
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
