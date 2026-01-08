export const ImageGalleryBlockFragment = `
  fragment ImageGalleryBlockFragment on ImageGalleryBlockRecord {
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


`;
