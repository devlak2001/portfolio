import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

import { useRef } from "react";
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutMe />
    </div>
  );
}

export default App;
