import React from "react";
import { ReactNode } from "react";
import MyStructuredText from "../data/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "../data/MyImage";
import { getBlockData } from "@/util/util";
import StarryBackground from "../animation/starryBackground";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";
export default function ModularHero({
  data,
  key,
}: {
  data: HeroBlockFragmentQuery;
  key: string;
}) {
  const modularData = getBlockData(data?.hero);
  return (
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
      <StarryBackground />
    </div>
  );
}
