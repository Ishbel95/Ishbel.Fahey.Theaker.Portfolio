"use client";
import React, { useRef, useEffect, useState } from "react";

export default function StarryBackground() {
  const gradient = useRef<HTMLInputElement>(null);
  const [clientY, setClientY] = useState("0");
  const [clientX, setClientX] = useState("0");
  useEffect(() => {
    const gradientPositionRef = gradient.current;
    if (!gradientPositionRef) return;

    gradientPositionRef.addEventListener("mousemove", function (e) {
      var x = e.clientX;
      var y = e.clientY;
      gradientPositionRef.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
    });
  }, [clientX, clientY]);

  return (
    <div className="gradient-inner">
      <div className="gradient-interactive" ref={gradient} />
    </div>
  );
}
