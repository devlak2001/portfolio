import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

import ProjectsPage from "./components/ProjectsPage";
import ImageLoader from "./components/ImageLoader";
import ExperiencePage from "./components/ExperiencePage";
function App() {
  return (
    <div className="App">
      <ImageLoader />
      <NavBar />
      <HomePage />
      <AboutMe />
      <ProjectsPage />
      <ExperiencePage />
    </div>
  );
}

export default App;
