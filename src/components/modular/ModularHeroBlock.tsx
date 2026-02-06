"use server";
import React from "react";
import { ReactNode } from "react";
import MyStructuredText from "../data/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "../data/MyImage";
import { getBlockData } from "@/util/util";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";
import getCookie from "@/util/serverFunctions";
import GradientBlobMorph from "../animation/GradientBlobMorph";

export default async function ModularHero({
  data,
  key,
  siteEntryAnimation,
}: {
  data: HeroBlockFragmentQuery;
  key: string;
  siteEntryAnimation?: boolean;
}) {
  const modularData = getBlockData(data?.hero);
  const visitedPortfolioCookie = getCookie({
    cookie: "Ishbel-Fahey-Theaker-Portfolio",
    value: "true",
  });
  return (
    <GradientBlobMorph>
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
    </GradientBlobMorph>
  );
}
