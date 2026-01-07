import React from "react";
import { ReactNode } from "react";
import MyStructuredText from "../data/MyStructuredText";
import ModularContent from "./ModularContent";
export default function ModularHero({
  data,
  key,
}: {
  data?: any;
  key: string;
}) {
  const GetModularHeroBlock = (type: string, component: any) => {
    switch (type) {
      case "BodyBlockRecord":
        return <ModularContent data={component} key={component.id} />;
    }
  };

  return (
    <div className="modular-hero-container" key={key}>
      <div className="modular-hero-inner">
        {data.hero.map((component: any) => {
          return GetModularHeroBlock(component.__typename, component);
        })}
      </div>
    </div>
  );
}
