export const TimelineBlockFragment = `
fragment TimelineBlockFragment on TimelineBlockRecord {
   __typename
    id
    bodyHasLine
    sideOfLine
    timelineBody {
    value
    }
}
`;
