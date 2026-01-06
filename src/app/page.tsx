import { getDatoCmsData } from "@/util/util";
import { AnimationImagesBlockFragment } from "@/fragments/AnimationImagesBlockFragment";
import { HeroBlockFragment } from "@/fragments/HeroBlockFragment";
import { HomepageQuery } from "@/queries/HomepageQuery";
export default async function Home() {
  const query = HomepageQuery;
  const data = await getDatoCmsData({ query });
  const homepageData = data?.homepage;
  const { content, seo } = homepageData;
  console.log(content);

  const GetModularHomePageBlock = (type: string) => {};

  return <main></main>;
}
//make icons link to projects they are in
// const query = `
// {
//   homepage {
//       id
//       internalTitle
//       seo {
//         title
//         description
//       }
//       content {
//         ${HeroBlockFragment}
//         ${AnimationImagesBlockFragment}
//       }
//     }
//   }
// `;
