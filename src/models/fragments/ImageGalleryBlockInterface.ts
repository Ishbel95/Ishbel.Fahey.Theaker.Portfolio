import LayoutOptionsBlockFragmentQuery from "./LayoutOptionsInterface";

export interface ImageFragmentQuery {
  url: String;
  title: String;
  alt: String;
  id: String;
  width: String;
  height: String;
  responsiveImage: {
    srcSet: String;
    webpSrcSet: String;
    sizes: String;
    src: String;
    width: number;
    height: number;
    aspectRatio?: number;
    alt?: String;
    title?: String;
    base64?: String;
  };
}

export default interface ImageGalleryFragmentQuery {
  __typename: String;
  id: String;
  LayoutOptionsBlockRecord: LayoutOptionsBlockFragmentQuery;
  imageGallery: ImageFragmentQuery[];
}
