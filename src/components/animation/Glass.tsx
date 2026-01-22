"use client";

import React, { useEffect, useRef } from "react";

type GlassProps = {
  children: React.ReactNode;
  classNames?: string;
};

export default function Glass({ children, classNames }: GlassProps) {
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
          duration: 300,
          fill: "forwards",
        },
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={cardRef} className={`glass-wrapper ${classNames ?? ""}`}>
      <div className="glass-inner">{children}</div>
      <div ref={blobRef} className="glass-glow-blob" />
      <div ref={fakeBlobRef} className="glass-glow-fake-blob" />
    </div>
  );
}
