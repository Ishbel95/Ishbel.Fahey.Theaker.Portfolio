import {
  AllModularTemplatePageQuery,
  ModularTemplatePageQuery,
} from "@/queries/ModularTemplateQuery";
import { getDatoCmsData, getModularContent } from "@/util/util";

export async function generateStaticParams() {
  const data = await getDatoCmsData({ query: AllModularTemplatePageQuery }); ///modular template interface
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

  const modularPageContent = getModularContent(
    modularTemplateData.modularContent,
  );
  return modularPageContent;
}
