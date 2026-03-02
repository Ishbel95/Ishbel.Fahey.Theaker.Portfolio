"use server";
import React from "react";
import MyStructuredText from "../myContentWrappers/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "../myContentWrappers/MyImage";
import { getBlockData } from "@/util/util";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";
import GradientBlobMorph from "../animation/GradientBlobMorph";

export default async function ModularHero({
  data,
}: {
  data: HeroBlockFragmentQuery;
}) {
  const modularData = getBlockData(data?.hero);

  return (
    <GradientBlobMorph layout={modularData.LayoutOptionBlockRecord}>
      <ModularLayoutWrapper data={modularData.LayoutOptionBlockRecord}>
        <div className="modular-hero-content">
          <MyStructuredText data={modularData.BodyBlockRecord.body} />
        </div>
        {modularData?.ImageBlockRecord?.image && (
          <MyImage img={modularData.ImageBlockRecord.image} />
        )}
      </ModularLayoutWrapper>
    </GradientBlobMorph>
  );
}
