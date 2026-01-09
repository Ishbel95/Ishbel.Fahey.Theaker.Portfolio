import React from "react";
import { ReactNode } from "react";
import MyStructuredText from "../data/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "../data/MyImage";
import { blockTypes } from "@/util/util";
import { getBlockData } from "@/util/util";
import StarryBackground from "../animation/starryBackground";
export default function ModularHero({
  data,
  key,
}: {
  data?: any;
  key: string;
}) {
  const modularData = getBlockData(data?.hero);

  return (
    <StarryBackground>
      <ModularLayoutWrapper
        data={modularData?.LayoutOptionBlockRecord}
        key={key}
      >
        <div className="modular-hero-container">
          <MyStructuredText data={modularData?.BodyBlockRecord?.body} />
        </div>
        {modularData?.ImageBlockRecord?.image && (
          <MyImage img={modularData?.ImageBlockRecord.image} />
        )}
      </ModularLayoutWrapper>
    </StarryBackground>
  );
}
