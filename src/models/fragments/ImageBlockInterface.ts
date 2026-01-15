import { ImageFragmentQuery } from "./ImageGalleryBlockInterface";

export default interface ImageBlockFragmentQuery {
  __typename: "ImageBlockRecord";
  id: string;
  image: ImageFragmentQuery;
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
