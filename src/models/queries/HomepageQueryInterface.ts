import HeroBlockFragmentQuery from "../fragments/HeroBlockFragmentInterface";
import ImageBlockFragmentQuery from "../fragments/ImageBlockInterface";

export default interface HomepagePageQuery {
  __typename: "HomepageRecord";
  id: String;
  internalTitle: String;
  seo?: {
    title?: String;
    description?: String;
  };
  content: {
    HeroBlockRecord: HeroBlockFragmentQuery;
    AnimationImagesBlockRecord: {
      id: String;
      images: ImageBlockFragmentQuery[];
    };
  };
}
