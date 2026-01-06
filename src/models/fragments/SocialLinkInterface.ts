import IconBlockFragmentQuery from "./IconBlockInterface";
import PathFragmentQuery from "./PathInterface";

export default interface SocialLinkFragmentQuery {
  __typename: "SocialLinkRecord";
  id: String;
  link: {
    value: String;
    blocks?: {
      IconBlockRecord?: IconBlockFragmentQuery;
      PathRecord?: PathFragmentQuery;
    };
  };
}
