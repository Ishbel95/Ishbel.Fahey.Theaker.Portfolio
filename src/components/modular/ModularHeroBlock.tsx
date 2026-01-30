import React from "react";
import { ReactNode } from "react";
import MyStructuredText from "../data/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "../data/MyImage";
import { getBlockData } from "@/util/util";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";
import GradientHero from "../animation/GradientHero";
export default function ModularHero({
  data,
  key,
  siteEntryAnimation,
}: {
  data: HeroBlockFragmentQuery;
  key: string;
  siteEntryAnimation?: boolean;
}) {
  const modularData = getBlockData(data?.hero);
  return (
    <GradientHero animate={siteEntryAnimation}>
      <div className="modular-hero-container">
        <div className="modular-hero-inner">
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
      </div>
    </GradientHero>
  );
}
