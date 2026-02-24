"use cache";
import getDatoCmsData from "@/lib/datoCms";
import { HomepageQuery } from "@/queries/HomepageQuery";
import { getModularContent } from "@/util/util";

export async function generateMetadata() {
  const query = HomepageQuery;
  const data = await getDatoCmsData({ query });
  const homepageData = data?.homepage ?? [];
  const seo = homepageData.seo;
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

export default async function Home() {
  const query = HomepageQuery;
  const data = await getDatoCmsData({ query }); //homepageinterface ??
  const homepageData = data?.homepage ?? [];
  const isHomepage = true;
  const homepageContent = getModularContent(homepageData.content, isHomepage);

  return homepageContent;
}
