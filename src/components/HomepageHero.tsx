"use server";
import React from "react";
import { ReactNode } from "react";
import MyStructuredText from "./data/MyStructuredText";
import ModularLayoutWrapper from "@/wrappers/ModularLayoutWrapper";
import MyImage from "./data/MyImage";
import { getBlockData } from "@/util/util";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";

import getCookie from "@/util/serverFunctions";
import HomepageHeroAnimation from "./animation/HomepageHeroAnimation";
export default async function HomepageHero({
  data,
  key,
}: {
  data: HeroBlockFragmentQuery;
  key: string;
}) {
  const modularData = getBlockData(data?.hero);
  const visitedPortfolioCookie = getCookie({
    cookie: "Ishbel-Fahey-Theaker-Portfolio",
    value: "true",
  });
  return (
    <HomepageHeroAnimation visitedPortfolio={visitedPortfolioCookie}>
      <div className="modular-hero-container">
        <div className="modular-hero-inner">
          <ModularLayoutWrapper
            data={modularData.LayoutOptionBlockRecord}
            key={key}
          >
            <div className="modular-hero-content">
              <MyStructuredText data={modularData.BodyBlockRecord.body} />
              <h2 className="text-morph-heading ">Software Developer</h2>{" "}
              {/* <div className="text-morph-container">
                  <span className="text-morph">Creative</span>
                  <span className="text-morph">Passionate</span>
                  <span className="text-morph">Software</span>
                </div> */}
            </div>

            {modularData?.ImageBlockRecord?.image && (
              <MyImage img={modularData.ImageBlockRecord.image} />
            )}
          </ModularLayoutWrapper>
        </div>
      </div>
    </HomepageHeroAnimation>
  );
}
