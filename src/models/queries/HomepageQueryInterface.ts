import HeroBlockFragmentQuery from "../fragments/HeroBlockFragmentInterface";
import ImageBlockFragmentQuery from "../fragments/ImageBlockInterface";

export default interface HomepagePageQuery {
  __typename: "HomepageRecord";
  id: string;
  internalTitle: string;
  seo?: {
    title?: string;
    description?: string;
  };
  content: {
    HeroBlockRecord: HeroBlockFragmentQuery;
  };
}
