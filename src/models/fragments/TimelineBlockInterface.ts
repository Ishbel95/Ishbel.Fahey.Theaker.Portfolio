export default interface TimelineFragmentQuery {
  __typename: "TimelineBlockRecord";
  id: string;
  bodyHasLine: boolean;
  sideOfLine: boolean;
  timelineBody: {
    value: JSON;
  };
}
