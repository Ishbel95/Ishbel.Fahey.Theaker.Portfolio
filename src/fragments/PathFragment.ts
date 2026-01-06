export const PathFragment = `
  fragment PathFragment on PathRecord {
    id
    isInline
    color
    isExternalPath
    path {
      value
      links {
        ... on ModularTemplateRecord {
          id
          slug
        }
      }
    }
  }
`;
