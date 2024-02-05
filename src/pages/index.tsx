import type { HeadFC, PageProps } from "gatsby";
import React from "react";

import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

import ProjectsPage from "./components/ProjectsPage";
import ImageLoader from "./components/ImageLoader";
import ExperiencePage from "./components/ExperiencePage";

import "./styles/index.scss";

const IndexPage: React.FC<PageProps> = () => {
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
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <link rel="icon" href={"/images/favicon.png"} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Transcending Solutions, Redefining Boundaries!"
      />
      <link rel="apple-touch-icon" href={"/images/favicon.png"} />

      <meta property="og:url" content="" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Vladimir Karić | Software Developer Portfolio"
      />
      <meta
        property="og:description"
        content="Vladimir Karić, a passionate software developer and front-end specialist based in Serbia. With a background at the prestigious Faculty of Technical Science, my journey from freelance projects to the cutting-edge team at Rock Paper Reality has shaped me into a developer who blends technical expertise with artistic vision. Explore my portfolio where technology meets artistry, and together, let's push the limits of software development to create extraordinary digital experiences."
      />
      <meta property="og:image" content={"/images/shareImage.png"} />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Vladimir Karić | Software Developer Portfolio"
      />
      <meta
        name="twitter:description"
        content="Vladimir Karić, a passionate software developer and front-end specialist based in Serbia. With a background at the prestigious Faculty of Technical Science, my journey from freelance projects to the cutting-edge team at Rock Paper Reality has shaped me into a developer who blends technical expertise with artistic vision. Explore my portfolio where technology meets artistry, and together, let's push the limits of software development to create extraordinary digital experiences."
      />
      <meta name="twitter:image" content={"/images/shareImage.png"} />
      <meta
        name="twitter:image:alt"
        content="Vladimir Karić | Software Developer Portfolio"
      />

      <title>Vladimir Karić | Software Developer Portfolio</title>
    </>
  );
};
