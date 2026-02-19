"use client";
import React from "react";
import Svg from "./Svg";
import { generateBlobs } from "@/util/util";
import useScreenSize from "@/hooks/useScreenSize";
export default function GradientBlobLava({
  children,
}: {
  animate?: boolean;
  children?: React.ReactNode;
}) {
  const desktop = useScreenSize();

  const blobs = desktop && generateBlobs(15);
  return (
    <header className="gradient-blob-lava-container display-flex">
      {" "}
      {children}
      <div className="gradient-blob-lava-inner">{blobs}</div>{" "}
      <Svg id={"gooHero"}>
        {" "}
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values={`
                          1 0 0 0 0
                          0 1 0 0 0
                          0 0 1 0 0 
                          0 0 0 20 -10
                        `}
          result="goo"
        />
      </Svg>
    </header>
  );
}
