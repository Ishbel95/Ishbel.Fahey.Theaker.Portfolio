import React from "react";
import Svg from "./Svg";
import { generateBlobs } from "@/util/util";

export default function GradientBlobMorph({
  children,
  align,
}: {
  children: React.ReactNode;
  align: string;
}) {
  const blobs = generateBlobs(6);
  return (
    <header className="gradient-blob-morph-container">
      <div className={`gradient-blob-morph-inner-${align}`}>{blobs}</div>
      <Svg id={"blobGoo"}>
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
      {children}
    </header>
  );
}
