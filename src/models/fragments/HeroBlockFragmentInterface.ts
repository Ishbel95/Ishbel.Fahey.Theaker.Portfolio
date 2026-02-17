import BodyBlockFragmentQuery from "./BodyBlockInterface";
import ImageBlockFragmentQuery from "./ImageBlockInterface";
import LayoutOptionsBlockFragmentQuery from "./LayoutOptionsInterface";

export default interface HeroBlockFragmentQuery {
  __typename: "HeroBlockRecord";
  id: string;
  hero: {
    BodyBlockRecord: BodyBlockFragmentQuery;
    ImageBlockRecord: ImageBlockFragmentQuery;
    LayoutOptionBlockRecord: LayoutOptionsBlockFragmentQuery;
  };
}
