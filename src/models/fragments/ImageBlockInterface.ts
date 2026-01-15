export default interface ImageBlockFragmentQuery {
  __typename: "ImageBlockRecord";
  id: string;
  image: { responsiveImage: ResponsiveImage };
}

export interface ResponsiveImage {
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  src: string;
  width?: number;
  height?: number;
  aspectRatio?: number;
  alt: string;
  title?: string;
  base64?: string;
}
