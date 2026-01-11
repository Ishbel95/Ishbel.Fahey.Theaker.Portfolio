export const CardCarouselBlockFragment = `
    fragment CardCarouselBlockFragment on CardCarouselBlockRecord {
        __typename
        id
        card {
           id
        githubLink
            internalTitle
            position
             titleAndDescription {
                      value
                    }
          previewImage {
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
`;
