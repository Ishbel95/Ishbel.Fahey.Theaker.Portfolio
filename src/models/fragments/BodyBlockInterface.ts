import CardCarouselFragmentQuery from "./CardCarouselBlockInterface";
import ImageBlockFragmentQuery from "./ImageBlockInterface";
import ImageGalleryFragmentQuery from "./ImageGalleryBlockInterface";
import PathFragmentQuery from "./PathInterface";
import TimelineFragmentQuery from "./TimelineBlockInterface";
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
      TimelineBlockFragment?: TimelineFragmentQuery;
    };
  };
}
