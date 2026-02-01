"use client";
import { useState, useEffect } from "react";

export default function useInView(
  ref: any,
  rootMarginValue?: string,
  thresholdValue?: number,
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin: rootMarginValue,
        threshold: thresholdValue ?? 0,
      },
    );
    observer.observe(ref.current);
    console.log(ref.current.getBoundingClientRect());

    return () => {
      observer.disconnect();
    };
  }, [ref, rootMarginValue, thresholdValue]);

  return isIntersecting;
}
