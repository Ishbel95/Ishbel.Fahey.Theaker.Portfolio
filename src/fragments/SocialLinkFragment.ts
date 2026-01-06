import { IconBlockFragment } from "./IconBlockFragment";
import { PathFragment } from "./PathFragment";

export const SocialLinkFragment = `
fragment SocialLinkFragment on SocialLinkRecord {
  id
  link {
    value
      blocks {
      ... on PathRecord {
        ...PathFragment
      }
      ... on IconBlockRecord{
       ...IconBlockFragment
       }
    }
  }
}    
  ${IconBlockFragment}
  ${PathFragment}
`;
