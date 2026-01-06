import { PathFragment } from "./PathFragment";

export const BodyBlockFragment = `
  fragment BodyBlockFragment on BodyBlockRecord {
    id
    body {
      value
      links {
        ... on ModularTemplateRecord {
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
