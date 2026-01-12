import { CardCarouselBlockFragment } from "./CardCarouselFragment";
import { ImageGalleryBlockFragment } from "./ImageGalleyFragment";
import { PathFragment } from "./PathFragment";
import { TimelineBlockFragment } from "./TimelineBlockFragment";

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
        ... on TimelineBlockRecord {
         ...TimelineBlockFragment
        }
      }
    }
  }

  ${PathFragment}
  ${ImageGalleryBlockFragment}
  ${CardCarouselBlockFragment}
  ${TimelineBlockFragment}
`;
