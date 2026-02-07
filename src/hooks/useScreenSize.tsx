"use client";

import { BreakPoints } from "@/models/enums/BreakPoints";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  if (typeof window === "undefined") return;

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
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
