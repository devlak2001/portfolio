import "../styles/projectsPage.scss";
import { useEffect, useState, useRef, useMemo } from "react";

import json from "./projects.json";

export default function ProjectsPage() {
  const [currentProject, setCurrentProject] = useState<number>(1);
  // const [jsonData, setJsonData] = useState(json);
  const project = useMemo(async () => {
    return json.projects[currentProject - 1];
  }, []);
  console.log(project);
  return (
    <>
      <div className="ProjectsPage"></div>
    </>
  );
}
