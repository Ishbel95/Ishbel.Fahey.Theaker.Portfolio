"use client";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import MyPath from "../data/MyPath";
import getCookie from "@/util/serverFunctions";
export default function GradientHero({
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
    <header className="gradient-hero-parallax display-flex ">
      {" "}
      <div className={`gradient-hero`} />
      <div className="gradient-hero-inner" />
      {/* <div className="gradient-hero-wave" /> */}
      {/* {animate && (
            <div className="gradient-hero-text ">
              <MyPath
                buttonPath=".."
                customClassNames="glass-pill expanding-link-container display-flex-row-center"
              >
                <FontAwesomeIcon icon={faArrowUp} />
                <button
                  className="expanding-link"
                  onClick={() => {
                    setAnimateGradient(true);
                    typeof window !== "undefined" &&
                      window.scroll({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Enter
                </button>
              </MyPath>
            </div>
          )} */}
      {children}
    </header>
  );
}
