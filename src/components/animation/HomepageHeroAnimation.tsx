"use client";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import MyPath from "../data/MyPath";
import getCookie from "@/util/serverFunctions";
export default function HomepageHeroAnimation({
  animate,
  children,
  visitedPortfolio,
}: {
  animate?: boolean;
  children?: React.ReactNode;
  visitedPortfolio?: Promise<boolean>;
}) {
  const [animateGradient, setAnimateGradient] = useState(
    visitedPortfolio ?? false,
  );

  return (
    <header className="homepage-hero-animation display-flex">
      {" "}
      {children}
      <div className="gradient-goo-container">
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
        <div className="gradient-bubble gradient-bubble-inner"></div>
      </div>{" "}
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="gooHero">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values={`
                    1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0 
                    0 0 0 20 -10
                  `}
              result="goo"
            />
            {/* <feBlend in="SourceGraphic" in2="goo" /> */}
          </filter>
        </defs>
      </svg>{" "}
    </header>
  );
}
