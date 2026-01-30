import { getDatoCmsData } from "@/util/util";
import { AnimationImagesBlockFragment } from "@/fragments/AnimationImagesBlockFragment";
import { HeroBlockFragment } from "@/fragments/HeroBlockFragment";
import { HomepageQuery } from "@/queries/HomepageQuery";
import ModularHero from "@/components/modular/ModularHeroBlock";
import ModularContent from "@/components/modular/ModularContentBlock";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";
import ModularContentQuery from "@/models/fragments/ContentBlockFragmentInterface";

export default async function Home() {
  const query = HomepageQuery;
  const data = await getDatoCmsData({ query });
  const homepageData = data?.homepage ?? [];
  const GetModularHomePageBlock = (type: string, component: any) => {
    switch (type) {
      case "HeroBlockRecord":
        return (
          <ModularHero
            data={component}
            key={component.id}
            siteEntryAnimation={true}
          />
        );
      case "ContentBlockRecord":
        return <ModularContent data={component} key={component.id} />;
    }
  };

  return (
    <div className="homepage-container">
      <div className="homepage-inner">
        {homepageData?.content?.map(
          (component: HeroBlockFragmentQuery | ModularContentQuery) => {
            return GetModularHomePageBlock(component.__typename, component);
          },
        )}
      </div>
    </div>
  );
}
