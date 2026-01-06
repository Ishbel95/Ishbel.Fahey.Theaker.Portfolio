export default interface PathFragmentQuery {
  __typename: "PathRecord";
  id: String;
  isInline?: Boolean;
  color: String;
  isExternalPath?: Boolean;
  path: {
    value: String;
    links?: {
      id: String;
      slug: String;
    };
  };
}
