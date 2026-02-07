import { ResponsiveImage } from "./ImageBlockInterface";
import LayoutOptionsBlockFragmentQuery from "./LayoutOptionsInterface";

export interface ImageFragmentQuery {
  url: string;
  title?: string;
  alt: string;
  id: string;
  width?: number;
  height?: number;
  responsiveImage?: ResponsiveImage;
}

export default interface ImageGalleryFragmentQuery {
  __typename: string;
  id: string;
  layoutOptions: LayoutOptionsBlockFragmentQuery;
  imageGallery: ImageFragmentQuery[];
}
