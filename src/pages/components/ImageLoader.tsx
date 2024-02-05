import React from "react";
import { useEffect, useState } from "react";

const ImageLoader = () => {
  const [allLoaded, setAllLoaded] = useState<boolean>(false);
  const [minTimePassed, setMinTimePassed] = useState<boolean>(false);
  const [hideLoader, setHideLoader] = useState<boolean>(false);
  const [removeLoader, setRemoveLoader] = useState<boolean>(false);
  useEffect(() => {
    const images = Array.from(document.querySelectorAll("img")).map(
      (img) => (img as HTMLImageElement).src
    );

    const loadImage = (src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = (err) => reject(err);
        img.src = src;
      });
    };

    const loadAllImages = async () => {
      try {
        await Promise.all(images.map((img) => loadImage(img)));
        // console.log("All images have loaded!");
        setAllLoaded(true);
        // Perform your desired action here
      } catch (err) {
        console.error("An error occurred while loading the images", err);
      }
    };
    loadAllImages();
  }, [setAllLoaded]);

  useEffect(() => {
    setTimeout(() => {
      setMinTimePassed(true);
    }, 1500);
  }, [setMinTimePassed]);

  useEffect(() => {
    if (minTimePassed && allLoaded) {
      setHideLoader(true);
      setTimeout(() => {
        setRemoveLoader(true);
      }, 1000);
    }
  }, [minTimePassed, allLoaded]);

  return (
    <>
      {!removeLoader && (
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
      )}
    </>
  ); // or you can return a loading indicator component here
};

export default ImageLoader;
