export const TimelineBlockFragment = `
fragment TimelineBlockFragment on TimelineBlockRecord {
   __typename
    id
    layoutOptions {
    bottomPadding
    backgroundColor
    rowReverse
    textAlign
    topPadding
    }
         
    timelineData {
    id
    bodyHasLine
    sideOfLine
    column
    timelineSectionTitle
    timelineBody {
    value
    }
  }
}
`;
