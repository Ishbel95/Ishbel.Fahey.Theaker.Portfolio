"use client";

import { BreakPoints } from "@/models/enums/BreakPoints";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const windowDefined = typeof window !== "undefined";
  const [screenSize, setScreenSize] = useState({
    width: windowDefined ? window.innerWidth : 0,
    height: windowDefined ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (!windowDefined) return;

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize.width >= BreakPoints.Desktop ? true : false;
};

export default useScreenSize;
