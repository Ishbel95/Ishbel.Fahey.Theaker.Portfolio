import CardCarouselFragmentQuery from "./CardCarouselBlockInterface";
import ImageBlockFragmentQuery from "./ImageBlockInterface";
import ImageGalleryFragmentQuery from "./ImageGalleryBlockInterface";
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
      ImageGalleryBlockFragment?: ImageGalleryFragmentQuery;
      CardCarouselBlockFragment?: CardCarouselFragmentQuery;
    };
  };
}
