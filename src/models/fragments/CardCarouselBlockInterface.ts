export default interface CardCarouselFragmentQuery {
  __typename: "CardCarouselBlockRecord";
  id: string;
  card: {
    id: string;
    githubLink: string;
    internalTitle: string;
    position: number;
    titleAndDescription: { value: JSON };
    previewImage: {
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
    };
  }[];
}
