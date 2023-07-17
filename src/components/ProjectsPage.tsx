import "../styles/projectsPage.scss";
import { useEffect, useState, useRef, useMemo } from "react";

import json from "./projects.json";

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState<number>(1);
  const [currentProjectAsset, setCurrentProjectAsset] = useState<number>(1);
  // const [jsonData, setJsonData] = useState(json);
  const project = useMemo(() => {
    return json.projects[currentProject - 1];
  }, [currentProject]);
  console.log(project);
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
          </div>
          <div
            className={`presentation ${
              currentProjectAsset === 1 ? "firstAssetSelected" : ""
            } ${
              currentProjectAsset === project.videos.length
                ? "lastAssetSelected"
                : ""
            }`}
          >
            <button
              className="prev"
              onClick={(e) => {
                const presentationAssets =
                  e.currentTarget.nextSibling!.childNodes;
                const nextSibling = e.currentTarget.nextSibling;
                (nextSibling as HTMLElement)!.scroll({
                  left:
                    (presentationAssets[currentProjectAsset - 2] as HTMLElement)
                      .offsetLeft -
                    (
                      presentationAssets[currentProjectAsset - 2] as HTMLElement
                    ).getBoundingClientRect().width /
                      2 -
                    parseFloat(
                      window
                        .getComputedStyle(nextSibling as HTMLElement)
                        .getPropertyValue("padding-left")
                    ) *
                      2,
                  behavior: "smooth",
                });
                setCurrentProjectAsset(currentProjectAsset - 1);
                console.log(
                  (presentationAssets[currentProjectAsset - 2] as HTMLElement)
                    .offsetWidth
                );
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
              {project.videos.map((el) => (
                <>
                  <video
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
              onClick={(e) => {
                const presentationAssets =
                  e.currentTarget.previousSibling!.childNodes;
                const previousSibling = e.currentTarget.previousSibling;
                (previousSibling as HTMLElement)!.scroll({
                  left:
                    (presentationAssets[currentProjectAsset] as HTMLElement)
                      .offsetLeft -
                    (
                      presentationAssets[currentProjectAsset] as HTMLElement
                    ).getBoundingClientRect().width /
                      2 -
                    parseFloat(
                      window
                        .getComputedStyle(previousSibling as HTMLElement)
                        .getPropertyValue("padding-left")
                    ) *
                      2,
                  behavior: "smooth",
                });
                setCurrentProjectAsset(currentProjectAsset + 1);
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
      </section>
    </>
  );
}
