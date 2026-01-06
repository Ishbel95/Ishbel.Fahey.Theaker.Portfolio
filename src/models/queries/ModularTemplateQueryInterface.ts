import BodyBlockFragmentQuery from "../fragments/BodyBlockInterface";
import ImageBlockFragmentQuery from "../fragments/ImageBlockInterface";
import LayoutOptionsBlockFragmentQuery from "../fragments/LayoutOptionsInterface";

export default interface ModularTemplateQuery {
  __typename: "ModularTemplateRecord";
  id: String;
  internalTitle: String;
  slug: String;
  seo: {
    title: String;
    description: String;
  };
  hero: {
    id: String;
    hero: {
      LayoutOptionBlockRecord: LayoutOptionsBlockFragmentQuery;
      ImageBlockRecord: ImageBlockFragmentQuery;
      BodyBlockRecord: BodyBlockFragmentQuery;
    };
  };
  content: {
    id: String;
    content: {
      LayoutOptionBlockRecord: LayoutOptionsBlockFragmentQuery;
      ImageBlockRecord: ImageBlockFragmentQuery;
      BodyBlockRecord: BodyBlockFragmentQuery;
    };
  };
}
