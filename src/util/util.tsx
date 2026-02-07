import { performRequest } from "@/lib/datoCms";
import { BlockTypes } from "@/models/enums/BlockTypes";
import { Metadata } from "next";
import ModularHero from "@/components/modular/ModularHeroBlock";
import ModularContent from "@/components/modular/ModularContentBlock";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";
import ModularContentQuery from "@/models/fragments/ContentBlockFragmentInterface";
import { ReactElement } from "react";
import ErrorContent from "@/components/ErrorContent";
import HomepageHero from "@/components/HomepageHero";
import { div } from "motion/react-client";

export function getBlockData(data: any) {
  const result = data.reduce((acc: any, block?: any) => {
    const key = Object.values(BlockTypes).find(
      (type) => type === block.__typename,
    );
    if (key) {
      acc[key] = block;
    }
    return acc;
  }, {});
  return result;
}

export async function getDatoCmsData({
  query,
  variables,
}: {
  query: string;
  variables?: {};
}) {
  const datoQuery = { query, variables };
  const datoCmsData = await performRequest(datoQuery);

  return datoCmsData;
}

type ModularBlock = HeroBlockFragmentQuery | ModularContentQuery;

export async function getModularContent(
  data: ModularBlock[],
  isHomepage?: boolean,
) {
  if (!data) return null;

  const hero = data.find(
    (component): component is HeroBlockFragmentQuery =>
      component.__typename === "HeroBlockRecord",
  );

  const contentBlocks = data.filter(
    (component): component is ModularContentQuery =>
      component.__typename === "ContentBlockRecord",
  );

  return (
    <>
      {hero &&
        (isHomepage ? (
          <HomepageHero data={hero} key={hero.id} />
        ) : (
          <ModularHero data={hero} key={hero.id} />
        ))}
      {contentBlocks.length > 0 && (
        <main>
          {contentBlocks.map((component) => (
            <ModularContent data={component} key={component.id} />
          ))}
        </main>
      )}
    </>
  );
}

export function generateBlobs(count: number) {
  return Array.from({ length: count }).map((_, index) => (
    <div key={index} className="blob blob-inner" />
  ));
}
