import BodyBlockFragmentQuery from "../fragments/BodyBlockInterface";
import ModularContentQuery from "../fragments/ContentBlockFragmentInterface";
import HeroBlockFragmentQuery from "../fragments/HeroBlockFragmentInterface";
import ImageBlockFragmentQuery from "../fragments/ImageBlockInterface";
import LayoutOptionsBlockFragmentQuery from "../fragments/LayoutOptionsInterface";

export default interface ModularTemplateQuery {
  __typename: "ModularTemplateRecord";
  id: string;
  internalTitle: string;
  includeInNav: boolean;
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: HeroBlockFragmentQuery;
  content: ModularContentQuery;
}
