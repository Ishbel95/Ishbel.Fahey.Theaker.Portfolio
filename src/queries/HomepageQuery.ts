import { AnimationImagesBlockFragment } from "@/fragments/AnimationImagesBlockFragment";
import { HeroBlockFragment } from "@/fragments/HeroBlockFragment";

export const HomepageQuery = `
  query HomePageQuery {
    homepage {
      id
      internalTitle
      seo {
        title
        description
      }
      content {
        ... on HeroBlockRecord {
          __typename
       ...HeroBlockFragment
        }
      }
    }
  }

  ${HeroBlockFragment}
`;
