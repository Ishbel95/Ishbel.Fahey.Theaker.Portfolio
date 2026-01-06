export default interface ImageBlockFragmentQuery {
  __typename: "ImageBlockRecord";
  id: String;
  image: {
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
  };
}
