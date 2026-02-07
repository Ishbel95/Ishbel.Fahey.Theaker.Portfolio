export const ProjectQuery = `
query ProjectQuery($projectLink:String!, $hasModal: Boolean!) {
  project(filter: {projectLink: {eq: $projectLink}, modal: {eq: $hasModal}}) {
    modalText {
      value
      links {
        ... on ModularTemplateRecord {
          id
          slug
        }
      }
    }

    demonstrationVideos {
      video {
        url
        alt
        mimeType
        title
        video {
        alt
          mp4Url
          title
        }
      }
      id
      description {
        value
      }
    }
    internalTitle
    id
    modal
    projectLink
  }
}
`;

export const AllProjectsQuery = `
query allProjectQuery {
  allProjects {
    modalText {
      value
      links {
        ... on ModularTemplateRecord {
          id
          slug
        }
      }
    }

    demonstrationVideos {
      video {
        url
        alt
        mimeType
        title
        video {
        alt
          mp4Url
          title
        }
      }
      id
      description {
        value
      }
    }
    internalTitle
    id
    modal
    projectLink
  }
}
`;
