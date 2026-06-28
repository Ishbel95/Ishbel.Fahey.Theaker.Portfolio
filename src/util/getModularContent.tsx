import ModularHero from "@/components/modular/ModularHeroBlock";
import ModularContent from "@/components/modular/ModularContentBlock";
import HeroBlockFragmentQuery from "@/models/fragments/HeroBlockFragmentInterface";
import ModularContentQuery from "@/models/fragments/ContentBlockFragmentInterface";
import HomepageHero from "@/components/HomepageHero";

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
      {hero && <ModularHero data={hero} />}
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
