import "../styles/projectsPage.scss";
import { useEffect, useState, useMemo } from "react";

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
          setCurrentProjectAsset(0);
        }}
      >
        <img
          src={
            process.env.PUBLIC_URL + "/assets/images/ProjectsPage/numberBkg.png"
          }
          alt=""
        />
        <span>{i + 1}</span>
      </div>
    );
  }
  return numbers;
};

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState<number>(0);
  const [currentProjectAsset, setCurrentProjectAsset] = useState<number>(0);
  // const [jsonData, setJsonData] = useState(json);
  const projects = useMemo(() => {
    return json.projects;
  }, []);

  // useEffect(() => {
  //   console.log(currentProjectAsset);
  //   const currentSlide = document.querySelector(
  //     ".ProjectsPage .contentWrapper .slide"
  //   ) as HTMLElement;
  //   const currentVideo = currentSlide.childNodes[0] as HTMLVideoElement;
  //   const currentVideoOverlay = currentSlide.childNodes[1] as HTMLElement;

  //   currentVideoOverlay.style.opacity = "1";
  //   currentVideoOverlay.style.opacity = "all";
  //   if (currentVideo.readyState >= 2) {
  //     currentVideoOverlay.style.opacity = "0";
  //     currentVideoOverlay.style.opacity = "none";
  //   } else {
  //     currentVideo.addEventListener("loadedmetadata", () => {
  //       currentVideoOverlay.style.opacity = "0";
  //       currentVideoOverlay.style.opacity = "none";
  //     });
  //   }
  // }, [currentProjectAsset]);

  // useEffect(() => {
  //   const currentSlide = document.querySelector(
  //     ".ProjectsPage .contentWrapper .slide"
  //   ) as HTMLElement;

  //   const currentVideo = currentSlide.childNodes[0] as HTMLVideoElement;
  //   const currentVideoOverlay = currentSlide.childNodes[1] as HTMLElement;

  //   currentVideo.style.visibility = "hidden";
  //   currentVideoOverlay.style.opacity = "1";
  //   currentVideoOverlay.style.pointerEvents = "all";
  //   if (currentVideo.readyState >= 2) {
  //     currentVideo.style.visibility = "visible";
  //     currentVideoOverlay.style.opacity = "0";
  //     currentVideoOverlay.style.pointerEvents = "none";
  //   } else {
  //     currentVideo.addEventListener("loadedmetadata", () => {
  //       currentVideo.style.visibility = "visible";
  //       currentVideoOverlay.style.opacity = "0";
  //       currentVideoOverlay.style.pointerEvents = "none";
  //     });
  //   }
  // }, [currentProject]);

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
        <div className="projectsWrapper">
          {projects.map((el, index) => (
            <div
              key={index}
              className="project"
              style={{
                transform: `translateX(${(index - currentProject) * 100}vw)`,
                position: currentProject === index ? "relative" : "absolute",
              }}
            >
              <div className="leftSide">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/ProjectsPage/whiteBrush.png"
                  }
                  alt=""
                  className="brush"
                />
                <h3>{el.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: el.description }}></p>
                <div className="badges">
                  {el.associates && (
                    <>
                      <a href={el.associates[0].url}>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images" +
                            el.associates[0].img
                          }
                          className="badge"
                          alt=""
                          title={el.associates[0].url}
                        />
                      </a>
                    </>
                  )}
                  <img
                    src={
                      el.type === "dependent"
                        ? process.env.PUBLIC_URL +
                          "/assets/images/associates/teamBadge.png"
                        : process.env.PUBLIC_URL +
                          "/assets/images/associates/independentBadge.png"
                    }
                    className="badge"
                    alt=""
                  />
                </div>
              </div>
              <div className={`presentation`}>
                <div className="contentWrapper">
                  <div className={`slide active`}>
                    {el.videos.map((el, index) => (
                      <video
                        key={index}
                        muted={true}
                        controls={true}
                        style={{
                          opacity: index === currentProjectAsset ? "1" : "0",
                          transform:
                            index === currentProjectAsset
                              ? "scale(100%)"
                              : "scale(0)",
                          pointerEvents:
                            index === currentProjectAsset ? "all" : "none",
                          zIndex: index === currentProjectAsset ? "1" : "-1",
                          transition:
                            index === currentProjectAsset
                              ? "transform 0.5s ease"
                              : "transform 0.5s ease, opacity 0.35s ease",
                        }}
                        playsInline={true}
                        src={
                          index === currentProjectAsset
                            ? process.env.PUBLIC_URL +
                              "/assets/videos/" +
                              el.url
                            : ""
                        }
                        poster={
                          index === currentProjectAsset
                            ? process.env.PUBLIC_URL +
                              "/assets/videos/" +
                              el.poster
                            : ""
                        }
                      ></video>
                    ))}
                    {/* <div className="loadingOverlay" style={{ opacity: "0" }}>
                      <span className="loader"></span>
                    </div> */}
                  </div>
                </div>
                <button
                  className="prev"
                  onClick={() => {
                    if (currentProjectAsset === 0) {
                      setCurrentProjectAsset(el.videos.length - 1);
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
                    if (currentProjectAsset === el.videos.length - 1) {
                      setCurrentProjectAsset(0);
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
                  <span>{currentProjectAsset + 1}</span>/
                  <span>{el.videos.length}</span>
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
          ))}
        </div>

        <div className="pagination">
          <button
            className={`left`}
            onClick={() => {
              setCurrentProjectAsset(0);
              if (currentProject > 0) {
                setCurrentProject(currentProject - 1);
              } else {
                setCurrentProject(json.projects.length - 1);
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
              json.projects.length - 1,
              setCurrentProject,
              setCurrentProjectAsset
            )}
          </div>
          <button
            className={`right`}
            onClick={() => {
              setCurrentProjectAsset(0);
              if (currentProject < json.projects.length - 1) {
                setCurrentProject(currentProject + 1);
              } else {
                setCurrentProject(0);
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
