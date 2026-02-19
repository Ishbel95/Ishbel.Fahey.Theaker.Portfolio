"use client";
import React, { Suspense } from "react";
import Glass from "./animation/Glass";
import MyStructuredText from "./myContentWrappers/MyStructuredText";
import useScreenSize from "@/hooks/useScreenSize";

export default function VideoInner({
  video,
  description,
  id,
  currentIndex,
  index,
}: {
  video: { url: string };
  description: string;
  id: string;
  currentIndex: number;
  index: number;
}) {
  const isActive = currentIndex === index;
  const desktop = useScreenSize();
  return (
    <div
      className={`video-carousel-slide-${isActive ? "active" : "inactive"} display-flex`}
      key={id}
      style={{
        transform: `translateX(${(index - currentIndex) * 100}%) `,
        scale: `${isActive && desktop ? 1.2 : 0.8}`,
        opacity: isActive ? 1 : 0.4,
      }}
    >
      <Glass classNames="glass-card" key={id}>
        <Suspense fallback={<p>Loading video</p>}>
          <video width="320" height="240" controls preload="none">
            <source src={video.url} type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          </video>
        </Suspense>
      </Glass>
      <MyStructuredText data={description} />
    </div>
  );
}
