"use server";
import React from "react";
import MyStructuredText from "./myContentWrappers/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "./myContentWrappers/MyImage";
import { getBlockData } from "@/util/util";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";
import GradientBlobLava from "./animation/GradientBlobLava";
export default async function HomepageHero({
  data,
  key,
}: {
  data: HeroBlockFragmentQuery;
  key: string;
}) {
  const modularData = getBlockData(data?.hero);

  return (
    <GradientBlobLava>
      <div className="modular-hero-container">
        <ModularLayoutWrapper
          data={modularData.LayoutOptionBlockRecord}
          key={key}
        >
          <div className="modular-hero-content">
            <MyStructuredText data={modularData.BodyBlockRecord.body} />
          </div>
          {modularData?.ImageBlockRecord?.image && (
            <MyImage img={modularData.ImageBlockRecord.image} />
          )}
        </ModularLayoutWrapper>
      </div>
    </GradientBlobLava>
  );
}
