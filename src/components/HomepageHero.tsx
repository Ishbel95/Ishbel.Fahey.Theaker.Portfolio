"use server";

import MyStructuredText from "./myContentWrappers/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "./myContentWrappers/MyImage";
import { getBlockData } from "@/util/getBlockData";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";
import GradientBlobLava from "./animation/GradientBlobLava";
export default async function HomepageHero({
  data,
}: {
  data: HeroBlockFragmentQuery;
}) {
  const modularData = getBlockData(data?.hero);

  return (
    <GradientBlobLava>
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
    </GradientBlobLava>
  );
}
