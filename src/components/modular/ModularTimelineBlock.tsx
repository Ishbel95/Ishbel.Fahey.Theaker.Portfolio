import TimelineFragmentQuery from "@/models/fragments/TimelineBlockInterface";
import React from "react";
import MyStructuredText from "../myContentWrappers/MyStructuredText";
import GlassMorph from "../animation/GlassMorph";
export default function ModularTimelineBlock({
  data,
}: {
  data: TimelineFragmentQuery;
}) {
  return (
    <div className={`modular-timeline-container global-width`}>
      {data.timelineData.map((timelineSection) => (
        <div
          className={`timeline-section column-${timelineSection.column} `}
          key={timelineSection.id}
        >
          <GlassMorph>
            <div className="timeline-section-inner">
              <h4 className="timeline-title display-flex">
                {timelineSection.timelineSectionTitle}
              </h4>
              <div className="timeline-body display-flex-column-center">
                <MyStructuredText data={timelineSection.timelineBody} />
              </div>
            </div>
          </GlassMorph>
        </div>
      ))}
    </div>
  );
}
