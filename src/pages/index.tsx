import type { HeadFC, PageProps } from "gatsby";
import React, { useState } from "react";

import AboutMe from "./components/AboutMe";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";

import ProjectsPage from "./components/ProjectsPage";
import ImageLoader from "./components/ImageLoader";
import ExperiencePage from "./components/ExperiencePage";

import "./styles/index.scss";

const IndexPage: React.FC<PageProps> = () => {
  const [homePageLoaded, setHomePageLoaded] = useState(false);
  return (
    <div className="App">
      <ImageLoader setHomePageLoaded={setHomePageLoaded} />
      <NavBar />
      <HomePage />
      {homePageLoaded && (
        <>
          <main>
            <AboutMe />
            <ProjectsPage />
            <ExperiencePage />
          </main>
        </>
      )}
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <link
        rel="icon"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/favicon.png"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="description"
        content="Transcending Solutions, Redefining Boundaries!"
      />
      <link
        rel="apple-touch-icon"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/favicon.png"
      />

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
      <meta
        property="og:image"
        content="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/shareImage.png"
      />
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
      <meta
        name="twitter:image"
        content="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/shareImage.png"
      />
      <meta
        name="twitter:image:alt"
        content="Vladimir Karić | Software Developer Portfolio"
      />

      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/backgroundPiece1.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/backgroundPiece2.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/backgroundPiece3.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/whiteBrush.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/katana.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/linkedin.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/github.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/gmail.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/keyboardMouse.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/monitor.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/speaker.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/phoneShadow.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/phone.png"
        as="image"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/images/homePage/cloud.png"
        as="image"
      />

      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/fonts/Rustico-Regular.otf"
        as="font"
        type="font/otf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/fonts/Consolas.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://devlak2001.s3.eu-central-1.amazonaws.com/portfolio/fonts/ConsolasBold.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <title>Vladimir Karić | Software Developer Portfolio</title>
    </>
  );
};
