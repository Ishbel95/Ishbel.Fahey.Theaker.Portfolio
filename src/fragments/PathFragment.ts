export const PathFragment = `
  fragment PathFragment on PathRecord {
    __typename
    id
    isInline
    color
    isExternalPath
    path {
      value
      links {
        ... on ModularTemplateRecord {
          __typename
          id
          slug
        }
      }
    }
  }
`;
