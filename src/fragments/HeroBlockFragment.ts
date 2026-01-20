import { BodyBlockFragment } from "./BodyBlockFragment";
import { ImageGalleryBlockFragment } from "./ImageGalleyFragment";
import { LayoutOptionsBlockFragment } from "./LayoutOptionsFragment";
import { PathFragment } from "./PathFragment";

export const HeroBlockFragment = `
  fragment HeroBlockFragment on HeroBlockRecord {
    __typename
    id
    hero {
      __typename
      ... on BodyBlockRecord {
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
               __typename
              id
              buttonText
              buttonPath
              color
              isExternalPath
            }
            ... on ImageGalleryBlockRecord {
                __typename
                id
                layoutOptions {
                  bottomPadding
                  backgroundColor
                  rowReverse
                  textAlign
                  topPadding
                }
                imageGallery {
                    url
                    title
                    alt
                    id
                    width
                    height
                  responsiveImage {
                    srcSet
                    webpSrcSet
                    sizes
                    src
                    width
                    height
                    aspectRatio
                    alt
                    title
                    base64
                  }
                }
            }
          }
        }
      }
      ... on ImageBlockRecord {
        __typename
        id
        image {
          responsiveImage {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            base64
          }
        }
      }
      ... on LayoutOptionBlockRecord {
        __typename
        id
        bottomPadding
        backgroundColor
        rowReverse
        textAlign
        topPadding
      }
    }
  }
`;
