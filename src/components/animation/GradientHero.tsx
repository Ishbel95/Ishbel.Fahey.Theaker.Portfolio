"use client";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import MyPath from "../data/MyPath";

export default function GradientHero({
  animate,
  children,
}: {
  animate?: boolean;
  children?: React.ReactNode;
}) {
  const [animateGradient, setAnimateGradient] = useState(true);

  return (
    <div className="gradient-hero-parallax">
      <div
        className={`gradient-hero-container ${animateGradient ? "gradient-animate-expand" : "gradient-animate-contract"} display-flex`}
      >
        <div className={`gradient-hero-inner display-flex`}>
          {animate && (
            <div className="gradient-hero-text ">
              <MyPath buttonPath="..">
                <button onClick={() => setAnimateGradient(true)}>
                  Click to enter
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
