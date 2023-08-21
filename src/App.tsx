import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

import "./styles/sakura.scss";

import Sakura from "./scripts/sakura";

import { useEffect } from "react";
import ProjectsPage from "./components/ProjectsPage";
import ImageLoader from "./components/ImageLoader";
import ExperiencePage from "./components/ExperiencePage";
function App() {
  // useEffect(() => {
  //   const sakura = new Sakura(".App");
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutMe />
      <ProjectsPage />
      <ExperiencePage />
      <ImageLoader />
    </div>
  );
}

export default App;
