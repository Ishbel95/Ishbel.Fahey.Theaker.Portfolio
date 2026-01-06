export const ImageBlockFragment = `
  fragment ImageBlockFragment on ImageBlockRecord {
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
`;
