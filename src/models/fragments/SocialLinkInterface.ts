import IconBlockFragmentQuery from "./IconBlockInterface";
import PathFragmentQuery from "./PathInterface";

export default interface SocialLinkFragmentQuery {
  __typename: "SocialLinkRecord";
  id: string;
  link: {
    value: string;
    blocks?: {
      IconBlockRecord?: IconBlockFragmentQuery;
      PathRecord?: PathFragmentQuery;
    };
  };
}
