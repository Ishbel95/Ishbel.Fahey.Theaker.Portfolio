import { AnimationImagesBlockFragment } from "@/fragments/AnimationImagesBlockFragment";
import { BodyBlockFragment } from "@/fragments/BodyBlockFragment";
import { HeroBlockFragment } from "@/fragments/HeroBlockFragment";
import { ImageBlockFragment } from "@/fragments/ImageBlockFragment";
import { ImageGalleryBlockFragment } from "@/fragments/ImageGalleyFragment";
import { LayoutOptionsBlockFragment } from "@/fragments/LayoutOptionsFragment";

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
        ... on ContentBlockRecord {
          __typename
          content {
            ... on BodyBlockRecord {
              __typename
              ...BodyBlockFragment
            }
            ... on ImageBlockRecord {
              __typename
              ...ImageBlockFragment
            }
            ... on LayoutOptionBlockRecord {
              __typename
              ...LayoutOptionBlockFragment
            }
          }
        }
      }
    }
  }

  ${HeroBlockFragment}
  ${BodyBlockFragment}
  ${ImageBlockFragment}
  ${LayoutOptionsBlockFragment}
`;
