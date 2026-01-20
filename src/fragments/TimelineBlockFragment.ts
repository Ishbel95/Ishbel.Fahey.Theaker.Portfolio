export const TimelineBlockFragment = `
fragment TimelineBlockFragment on TimelineBlockRecord {
   __typename
    id
    timelineData {
    id
    bodyHasLine
    sideOfLine
    timelineBody {
    value
    }
    }
}
`;
