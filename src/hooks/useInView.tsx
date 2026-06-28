"use client";
import { useState, useEffect, RefObject } from "react";

interface UseInViewOptions {
  once?: boolean;
}

export default function useInView(
  ref: RefObject<HTMLDivElement | null>,
  rootMarginValue?: string,
  thresholdValue?: number,
  options?: UseInViewOptions,
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (options?.once) {
          if (entry.isIntersecting) {
            setIntersecting(true);
            observer.disconnect();
          }
        } else {
          setIntersecting(entry.isIntersecting);
        }
      },
      {
        rootMargin: rootMarginValue,
        threshold: thresholdValue ?? 0,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, rootMarginValue, thresholdValue, options?.once]);

  return isIntersecting;
}
