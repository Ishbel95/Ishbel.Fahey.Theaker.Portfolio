export default interface CardCarouselFragmentQuery {
  __typename: "CardCarouselBlockRecord";
  id: string;
  card: CardBlockInterface[];
}

export interface CardBlockInterface {
  id: string;
  githubLink: string;
  projectLink: string;
  internalTitle: string;
  position: number;
  titleAndDescription: { value: JSON };
  modal?: boolean;
  modalText: {
    value: JSON;
    links?: {
      id: string;
      slug: string;
    };
  };
  previewImage: {
    url: string;
    title?: string;
    alt: string;
    id: string;
    width: number;
    height: number;
    responsiveImage: {
      srcSet: string;
      webpSrcSet: string;
      sizes: string;
      src: string;
      width: number;
      height: number;
      aspectRatio?: number;
      alt: string;
      title?: string;
      base64?: string;
    };
  };
}
