import { ImageBlockFragment } from "./ImageBlockFragment";

export const AnimationImagesBlockFragment = `
  fragment AnimationImagesBlockFragment on AnimationImagesBlockRecord {
    id
    images {
      ...ImageBlockFragment
    }
  }

  ${ImageBlockFragment}
`;
