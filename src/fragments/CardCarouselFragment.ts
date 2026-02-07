export const CardCarouselBlockFragment = `
    fragment CardCarouselBlockFragment on CardCarouselBlockRecord {
        __typename
        id
        card {
           id
        githubLink
        projectLink
            internalTitle
            position
             titleAndDescription {
                      value
                    }
                      modal
                      modalText{
                      value
                           links {
            ... on ModularTemplateRecord {
            id
            slug
            }
        }
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
