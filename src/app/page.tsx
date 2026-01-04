import { getDatoCmsData } from "@/util/util";

export default async function Home() {
  const data = await getDatoCmsData({ query });
  const homepageData = data.homepage;
  const { content, seo } = homepageData;

  return <main>this is test</main>;
}
//make icons link to projects they are in
const query = `
{
  homepage {
      id
      internalTitle
      seo {
        title
        description
      }
      content {
        ... on HeroBlockRecord {
          id
          hero {
            ... on LayoutOptionBlockRecord {
              id
              _modelApiKey
              bottomPadding
              backgroundColor
              rowReverse
              textAlign
              topPadding
            }
            ... on BodyBlockRecord {
              id
              _modelApiKey
              body {
                value
              }
            }
          }
        }
      }
    }
  }
`;
