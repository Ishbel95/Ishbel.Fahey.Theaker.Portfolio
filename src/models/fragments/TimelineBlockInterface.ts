interface TimelineSectionQuery {
  id: string;
  bodyHasLine: boolean;
  sideOfLine: boolean;
  timelineBody: {
    value: JSON;
  };
}

export default interface TimelineFragmentQuery {
  __typename: "TimelineBlockRecord";
  id: string;
  timelineData: TimelineSectionQuery[];
}
