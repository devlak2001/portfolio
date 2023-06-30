import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

import "./styles/sakura.scss";

import Sakura from "./scripts/sakura";

import { useRef, useEffect } from "react";
function App() {
  useEffect(() => {
    const sakura = new Sakura(".App");
  }, []);
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutMe />
    </div>
  );
}

export default App;
