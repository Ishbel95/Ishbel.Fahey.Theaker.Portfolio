import { getDatoCmsData } from "@/util/util";
import { AnimationImagesBlockFragment } from "@/fragments/AnimationImagesBlockFragment";
import { HeroBlockFragment } from "@/fragments/HeroBlockFragment";
import { HomepageQuery } from "@/queries/HomepageQuery";
import ModularHero from "@/components/modular/ModularHero";
import Loading from "@/components/Loading";
export default async function Home() {
  const query = HomepageQuery;
  const data = await getDatoCmsData({ query });
  const homepageData = data?.homepage ?? [];
  if (!homepageData) {
    return <Loading />;
  }

  const GetModularHomePageBlock = (type: string, component: any) => {
    switch (type) {
      case "HeroBlockRecord":
        return <ModularHero data={component} key={component.id} />;
    }
  };

  return (
    <main>
      <div className="homepage-container">
        <div className="homepage-inner">
          {homepageData?.content?.map((component: any) => {
            return GetModularHomePageBlock(component.__typename, component);
          })}
        </div>
      </div>
    </main>
  );
}
