"use cache";
import {
  AllModularTemplatePageQuery,
  ModularTemplatePageQuery,
} from "@/queries/ModularTemplateQuery";
import { getModularContent } from "@/util/util";
import getDatoCmsData from "@/lib/datoCms";
export async function generateStaticParams() {
  const data = await getDatoCmsData({ query: AllModularTemplatePageQuery }); ///modular template interface
  const allModularTemplatesData = data?.allModularTemplates;
  return allModularTemplatesData?.length > 0
    ? allModularTemplatesData.map(({ slug }: { slug: string }) => ({
        params: { id: slug },
      }))
    : [{ slug: "projects" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const variables = { slug: id };
  const modularTemplateData = await getDatoCmsData({
    query: ModularTemplatePageQuery,
    variables,
  });
  const seo = modularTemplateData.modularTemplate.seo;

  if (!seo) {
    return {
      title: "Ishbel Fahey Theaker Portfolio",
      description: "explore my portfolio",
      keywords: "blog, tutorials, keywords etc",
      openGraph: {
        // images: ["/some-specific-page-image.jpg"],
      },
    };
  }
  return {
    title: seo.title,
    description: seo.description,
    keywords: "blog, tutorials, keywords etc",
    openGraph: {
      images: [seo.image.responsiveImage.src],
    },
  };
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
