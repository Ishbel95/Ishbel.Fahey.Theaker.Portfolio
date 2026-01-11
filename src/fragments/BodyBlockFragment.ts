import { CardCarouselBlockFragment } from "./CardCarouselFragment";
import { ImageGalleryBlockFragment } from "./ImageGalleyFragment";
import { PathFragment } from "./PathFragment";

export const BodyBlockFragment = `
  fragment BodyBlockFragment on BodyBlockRecord {
    __typename
    id
    body {
      value
      links {
        ... on ModularTemplateRecord {
           __typename
          id
          slug
        }
      }
      blocks {
        ... on PathRecord {
          ...PathFragment
        }
        ... on ImageGalleryBlockRecord {
         ...ImageGalleryBlockFragment
        }
        ... on CardCarouselBlockRecord {
         ...CardCarouselBlockFragment
        }
      }
    }
  }

  ${PathFragment}
  ${ImageGalleryBlockFragment}
  ${CardCarouselBlockFragment}
`;
