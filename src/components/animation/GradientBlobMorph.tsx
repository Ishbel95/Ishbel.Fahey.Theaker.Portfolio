"use client";
import React from "react";
import Svg from "./Svg";
import { generateBlobs } from "@/util/util";
import LayoutOptionsBlockFragmentQuery from "@/models/fragments/LayoutOptionsInterface";
import useScreenSize from "@/hooks/useScreenSize";

export default function GradientBlobMorph({
  children,
  layout,
}: {
  children: React.ReactNode;
  layout: LayoutOptionsBlockFragmentQuery;
}) {
  const desktop = useScreenSize();
  const blobs = desktop && generateBlobs(6);
  return (
    <header
      className={`background-${layout?.backgroundColor} gradient-blob-morph-container display-flex`}
    >
      <div className={`gradient-blob-morph-inner-${layout.textAlign}`}>
        {blobs}
      </div>
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
