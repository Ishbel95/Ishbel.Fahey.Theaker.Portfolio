import { BodyBlockFragment } from "./BodyBlockFragment";
import { ImageBlockFragment } from "./ImageBlockFragment";
import { LayoutOptionsBlockFragment } from "./LayoutOptionsFragment";

export const HeroBlockFragment = `
  fragment HeroBlockFragment on HeroBlockRecord {
    id
    hero {
      __typename

      ... on BodyBlockRecord {
        ...BodyBlockFragment
      }

      ... on ImageBlockRecord {
        ...ImageBlockFragment
      }

      ... on LayoutOptionBlockRecord {
        ...LayoutOptionBlockFragment
      }
    }
  }

  ${BodyBlockFragment}
  ${ImageBlockFragment}
  ${LayoutOptionsBlockFragment}
`;
