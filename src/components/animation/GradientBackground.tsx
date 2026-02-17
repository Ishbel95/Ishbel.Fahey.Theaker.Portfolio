"use client";
import React, { useRef, useEffect, useState } from "react";

export default function GradientBackground() {
  const gradient = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const gradientPositionRef = gradient.current;
    if (!gradientPositionRef || typeof window === "undefined") return;

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
    <div className="gradient-body-container">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradient-body-filter">
        <div className="gradient-1"></div>
        <div className="gradient-2"></div>
        <div className="gradient-3"></div>
        <div className="gradient-4"></div>
        <div className="gradient-5"></div>
        <div className="gradient-mouse" ref={gradient}></div>
      </div>
    </div>
  );
}
