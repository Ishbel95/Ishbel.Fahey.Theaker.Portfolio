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
    <div className="gradient-hero-parallax">
      <div
        className={`gradient-hero-container ${animateGradient ? "gradient-animate-expand" : "gradient-animate-contract"} display-flex`}
      >
        <div className={`gradient-hero-inner display-flex`}>
          {animate && (
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
          )}
          {children}
          {/* <span className=" blob blob-cyan" />
        <span className=" blob blob-blue" />
        <span className=" blob blob-purple" /> */}
        </div>
      </div>
    </div>
  );
}
