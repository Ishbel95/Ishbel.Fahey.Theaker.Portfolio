"use client";
import React, { useRef, useEffect } from "react";

export default function StarryBackground() {
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
        curX
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
    <div className="gradient-container">
      {/* <div className="star-group-one" />
      <div className="star-group-two" />
      <div className="star-group-three" /> */}
      <div className="gradient-inner">
        <div className="gradient-1" />
        <div className="gradient-2" />
        <div className="gradient-3" />
        <div className="gradient-4" />
        <div className="gradient-5" />
        {/* <div className="gradient-interactive" ref={gradient} /> */}
      </div>{" "}
    </div>
  );
}
