import React, { useEffect, useState } from "react";

const ImageLoader = () => {
  const [allLoaded, setAllLoaded] = useState<boolean>(false);
  const [minTimePassed, setMinTimePassed] = useState<boolean>(false);
  const [hideLoader, setHideLoader] = useState<boolean>(false);
  useEffect(() => {
    const imgElements = document.querySelectorAll("img");

    const handleImageLoad = () => {
      const unloadedImages = Array.from(imgElements).filter(
        (img) => !img.complete
      );
      if (unloadedImages.length === 0) {
        setAllLoaded(true);
      }
    };

    imgElements.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", handleImageLoad);
      }
    });

    return () => {
      imgElements.forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, [setAllLoaded]);

  useEffect(() => {
    setTimeout(() => {
      setMinTimePassed(true);
    }, 1500);
  }, [setMinTimePassed]);

  useEffect(() => {
    if (minTimePassed && allLoaded) {
      setHideLoader(true);
    }
  }, [minTimePassed, allLoaded]);

  return (
    <>
      <div className={`ImageLoader1 ${hideLoader ? "loaded" : ""}`}>
        <span className="loader"></span>
        <span className="loaderText">LOADING</span>
      </div>
      <div className={`ImageLoader2 ${hideLoader ? "loaded" : ""}`}>
        <span className="loader"></span>
        <span className="loaderText">LOADING</span>
      </div>
    </>
  ); // or you can return a loading indicator component here
};

export default ImageLoader;
