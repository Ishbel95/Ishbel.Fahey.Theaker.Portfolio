"use server";
import React from "react";
import MyStructuredText from "../myContentWrappers/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "../myContentWrappers/MyImage";
import { getBlockData } from "@/util/getBlockData";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";

export default async function ModularHero({
  data,
}: {
  data: HeroBlockFragmentQuery;
}) {
  const modularData = getBlockData(data?.hero);

  return (
    <div className="modular-hero-container">
      <ModularLayoutWrapper data={modularData.LayoutOptionBlockRecord}>
        <div className="modular-hero-content">
          <MyStructuredText data={modularData.BodyBlockRecord.body} />
        </div>
        {modularData?.ImageBlockRecord?.image && (
          <MyImage img={modularData.ImageBlockRecord.image} />
        )}
      </ModularLayoutWrapper>
    </div>
  );
}
