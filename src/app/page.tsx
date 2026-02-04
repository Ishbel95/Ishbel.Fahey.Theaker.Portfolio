import { getDatoCmsData } from "@/util/util";
import { HomepageQuery } from "@/queries/HomepageQuery";

import { getModularContent } from "@/util/util";
export default async function Home() {
  const query = HomepageQuery;
  const data = await getDatoCmsData({ query }); //homepageinterface ??
  const homepageData = data?.homepage ?? [];
  const homepageContent = getModularContent(homepageData.content);
  return homepageContent;
}
