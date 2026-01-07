import { PathFragment } from "./PathFragment";

export const BodyBlockFragment = `
  fragment BodyBlockFragment on BodyBlockRecord {
    __typename
    id
    body {
      value
      links {
        ... on ModularTemplateRecord {
           __typename
          id
          slug
        }
      }
      blocks {
        ... on PathRecord {
          ...PathFragment
        }
      }
    }
  }

  ${PathFragment}
`;
