import type { HeadFC, PageProps } from "gatsby";
import React, { useEffect, useState } from "react";

import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

import ProjectsPage from "./components/ProjectsPage";
import ImageLoader from "./components/ImageLoader";
import ExperiencePage from "./components/ExperiencePage";

import "./styles/index.scss";

const IndexPage: React.FC<PageProps> = () => {
  const [homePageLoaded, setHomePageLoaded] = useState(false);
  const [loaderHidden, setLoaderHidden] = useState(false);

  useEffect(() => {
    if (homePageLoaded) {
      Array.from(document.querySelectorAll("main img")).forEach((img: any) => {
        img.src = img.dataset.imgSrc;
      });
    }
  }, [homePageLoaded]);
  useEffect(() => {});
  return (
    <div
      className="App"
      style={{
        pointerEvents: loaderHidden ? "all" : "none",
      }}
    >
      <ImageLoader
        setHomePageLoaded={setHomePageLoaded}
        setLoaderHidden={setLoaderHidden}
      />
      <NavBar />
      <HomePage />
      <main>
        <AboutMe />
        <ProjectsPage />
        <ExperiencePage />
      </main>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <link rel="icon" href="./images/favicon.png" />
      <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Software Engineer with the current focus on Front-End Development."
      />
      <link rel="apple-touch-icon" href="./images/favicon.png" />

      <meta
        property="og:url"
        content="https://devlak2001.github.io/portfolio/"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Vladimir Karić | Portfolio" />
      <meta
        property="og:description"
        content="Software Engineer with the current focus on Front-End Development."
      />
      <meta property="og:image" content="./images/shareImage.png" />
      <meta property="og:image:type" content="image/png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Vladimir Karić | Portfolio" />
      <meta
        name="twitter:description"
        content="Software Engineer with the current focus on Front-End Development."
      />
      <meta name="twitter:image" content="./images/shareImage.png" />
      <meta name="twitter:image:alt" content="Vladimir Karić | Portfolio" />

      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/fonts/Consolas.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        href="./images/AboutMe/backgroundPiece3.png"
        as="image"
      />

      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/fonts/Rustico-Regular.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />

      <title>Vladimir Karić | Software Developer Portfolio</title>
    </>
  );
};
