"use client";
import React from "react";
import MyStructuredText from "../data/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "../data/MyImage";
import { getBlockData } from "@/util/util";
import ModularContentQuery from "@/models/fragments/ContentBlockFragmentInterface";
import useScreenSize from "@/hooks/useScreenSize";
export default function ModularContent({
  data,
  key,
}: {
  data: ModularContentQuery;
  key: string;
}) {
  const modularData = getBlockData(data.content);
  const desktop = useScreenSize();
  return (
    <ModularLayoutWrapper data={modularData.LayoutOptionBlockRecord} key={key}>
      <div className="modular-content-container">
        <MyStructuredText data={modularData.BodyBlockRecord.body} />
      </div>
      {modularData.ImageBlockRecord?.image && desktop && (
        <MyImage img={modularData.ImageBlockRecord.image} />
      )}
    </ModularLayoutWrapper>
  );
}
