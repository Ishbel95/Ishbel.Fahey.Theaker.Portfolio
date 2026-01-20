import BodyBlockFragmentQuery from "./BodyBlockInterface";
import ImageBlockFragmentQuery from "./ImageBlockInterface";
import LayoutOptionsBlockFragmentQuery from "./LayoutOptionsInterface";

export default interface ModularContentQuery {
  __typename: "ContentBlockRecord";
  id: string;
  content: {
    LayoutOptionBlockRecord: LayoutOptionsBlockFragmentQuery;
    ImageBlockRecord: ImageBlockFragmentQuery;
    BodyBlockRecord: BodyBlockFragmentQuery;
  };
}
