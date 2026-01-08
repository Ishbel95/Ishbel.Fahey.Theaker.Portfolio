import Loading from "@/components/Loading";
import {
  AllModularTemplatePageQuery,
  ModularTemplatePageQuery,
} from "@/queries/ModularTemplateQuery";
import { getDatoCmsData } from "@/util/util";
import ModularHero from "@/components/modular/ModularHeroBlock";
import ModularContent from "@/components/modular/ModularContentBlock";
export async function generateStaticParams() {
  const data = await getDatoCmsData({ query: AllModularTemplatePageQuery });
  const allModularTemplatesData = data?.allModularTemplates ?? [];
  return allModularTemplatesData?.map((item: any) => ({
    params: { id: item.slug },
  }));
}

export default async function ModularTemplatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const variables = { slug: id };
  const data = await getDatoCmsData({
    query: ModularTemplatePageQuery,
    variables,
  });

  const modularTemplateData = data?.modularTemplate ?? [];

  if (!modularTemplateData) {
    return <Loading />;
  }

  const GetModularTemplateBlock = (type: string, component: any) => {
    switch (type) {
      case "HeroBlockRecord":
        return <ModularHero data={component} key={component.id} />;
      case "ContentBlockRecord":
        return <ModularContent data={component} key={component.id} />;
    }
  };

  return (
    <main>
      {modularTemplateData.modularContent.map((component: any) => {
        return GetModularTemplateBlock(component.__typename, component);
      })}
    </main>
  );
}
