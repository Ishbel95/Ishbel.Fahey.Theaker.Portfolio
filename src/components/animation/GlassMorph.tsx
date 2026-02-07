"use client";

import useInView from "@/hooks/useInView";
import useScreenSize from "@/hooks/useScreenSize";
import { BreakPoints } from "@/models/enums/BreakPoints";
import React, { useEffect, useRef } from "react";

type GlassProps = {
  children: React.ReactNode;
  classNames?: string;
};

export default function GlassMorph({ children, classNames }: GlassProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const fakeBlobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (ev: MouseEvent) => {
      if (!blobRef.current || !fakeBlobRef.current) return;

      const rec = fakeBlobRef.current.getBoundingClientRect();

      blobRef.current.style.opacity = "1";
      blobRef.current.animate(
        [
          {
            transform: `translate(
              ${ev.clientX - rec.left - rec.width / 2}px,
              ${ev.clientY - rec.top - rec.height / 2}px
            )`,
          },
        ],
        {
          duration: 500,
          fill: "forwards",
        },
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const desktop = useScreenSize();
  const morphGlass = useInView(
    cardRef,
    desktop ? "-100px" : "-200px 0px -200px 0px",
    1,
  );

  return (
    <div
      ref={cardRef}
      className={`glass-wrapper ${morphGlass ? "glass-morph-to-square" : "glass-morph-to-circle"} `}
    >
      <div className={`glass-inner ${classNames}`}>{children}</div>
      <div ref={blobRef} className="glass-glow-blob" />
      <div ref={fakeBlobRef} className="glass-glow-fake-blob" />
    </div>
  );
}
