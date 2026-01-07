import ImageBlockFragmentQuery from "./ImageBlockInterface";
import PathFragmentQuery from "./PathInterface";
export default interface BodyBlockFragmentQuery {
  __typename: "BodyBlockRecord";
  id: String;
  body: {
    value: JSON;
    links?: {
      id: String;
      slug: String;
    };
    blocks?: {
      PathFragment?: PathFragmentQuery;
      ImageBlockFragment?: ImageBlockFragmentQuery;
    };
  };
}
