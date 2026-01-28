"use client";
import React, { useRef, useEffect } from "react";
import Glass from "./Glass";

export default function GradientStarBackground() {
  const gradient = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const gradientPositionRef = gradient.current;
    if (!gradientPositionRef) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 10;
      curY += (tgY - curY) / 10;
      gradientPositionRef.style.transform = `translate(${Math.round(
        curX,
      )}px, ${Math.round(curY)}px)`;
      window.requestAnimationFrame(move);
    };

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  }, []);

  return (
    <div className="gradient-star-inner">
      <div className="gradient-interactive" ref={gradient} />
    </div>
  );
}
