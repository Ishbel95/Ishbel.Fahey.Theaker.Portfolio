import LayoutOptionsBlockFragmentQuery from "./LayoutOptionsInterface";

interface TimelineSectionQuery {
  id: string;
  bodyHasLine: boolean;
  sideOfLine: boolean;
  column: number | string;
  timelineSectionTitle: string;
  timelineBody: {
    value: JSON;
  };
}

export default interface TimelineFragmentQuery {
  __typename: "TimelineBlockRecord";
  id: string;
  layoutOptions: LayoutOptionsBlockFragmentQuery;
  timelineData: TimelineSectionQuery[];
}
