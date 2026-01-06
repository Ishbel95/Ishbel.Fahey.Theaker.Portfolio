import ImageBlockFragmentQuery from "./ImageBlockInterface";

export default interface AnimationImagesBlockQuery {
  id: String;
  images: {
    image: ImageBlockFragmentQuery;
  };
}
