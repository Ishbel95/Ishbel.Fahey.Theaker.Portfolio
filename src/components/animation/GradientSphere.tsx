"use client";
import React, { useState } from "react";
import Glass from "./Glass";
export default function GradientSphere() {
  const [enterSite, setEnterSite] = useState(false);

  return (
    <div
      className={`gradient-sphere-container display-flex ${enterSite && "gradient-sphere-container-enter"}`}
    >
      <div className="gradient-sphere-inner" />
      <div className="gradient-sphere display-flex">
        <Glass classNames="glass-path">
          <button onClick={() => setEnterSite(true)}>Tap to enter</button>
        </Glass>
      </div>
    </div>
  );
}
