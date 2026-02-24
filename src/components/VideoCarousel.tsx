"use client";
import React, { Suspense, useState } from "react";
import Glass from "./animation/Glass";
import VideoInner from "./Video";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SmallLoadingScreen from "./SmallLoading";
export default function VideoCarousel({
  data,
  showModal,
}: {
  data: any;
  showModal?: boolean;
}) {
  const carouselLength = data.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <Suspense fallback={<SmallLoadingScreen />}>
      {" "}
      <div className={`carousel-container-${showModal ? "show" : "hide"}`}>
        <div className="carousel-inner ">
          {data.map(
            (
              {
                video,
                description,
                id,
              }: {
                video: { url: string };
                description: string;
                id: string;
              },
              index: number,
            ) => {
              return (
                <VideoInner
                  video={video}
                  description={description}
                  id={id}
                  currentIndex={currentIndex}
                  index={index}
                  key={id}
                />
              );
            },
          )}
        </div>
        <div className="carousel-arrow-container">
          {currentIndex > 0 && (
            <button
              className="carousel-arrow-prev"
              type="button"
              onClick={() => setCurrentIndex(currentIndex - 1)}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}
          {currentIndex < carouselLength - 1 && (
            <button
              className="carousel-arrow-next"
              type="button"
              onClick={() => setCurrentIndex(currentIndex + 1)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>
      </div>
    </Suspense>
  );
}
