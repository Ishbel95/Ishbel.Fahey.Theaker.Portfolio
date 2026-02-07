export interface ProjectQueryInterface {
  internalTitle: string;
  id: string;
  modal: boolean;
  projectLink: string;
  modalText: {
    value: JSON;
    links?: {
      id: string;
      slug: string;
    };
  };
  demonstrationVideos: {
    video: {
      url: string;
      alt: string;
      mimeType: string;
      title: string;
      video: {
        alt: string;
        title: string;
        mp4Url: string;
      };
    };
  }[];
}

export interface AllProjectQueryInterface {
  allProjects: {
    internalTitle: string;
    id: string;
    modal: boolean;
    projectLink: string;
    modalText: {
      value: JSON;
      links?: {
        id: string;
        slug: string;
      };
    };
    demonstrationVideos: {
      video: {
        url: string;
        alt: string;
        mimeType: string;
        title: string;
        video: {
          alt: string;
          title: string;
          mp4Url: string;
        };
      };
    }[];
  }[];
}
[];
