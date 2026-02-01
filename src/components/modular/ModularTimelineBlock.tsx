import TimelineFragmentQuery from "@/models/fragments/TimelineBlockInterface";
import React from "react";
import MyStructuredText from "../data/MyStructuredText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Glass from "../animation/Glass";
import GlassMorph from "../animation/GlassMorph";
export default function ModularTimelineBlock({
  data,
  key,
}: {
  data: TimelineFragmentQuery;
  key: string;
}) {
  return (
    <div key={key} className={`modular-timeline-container global-width`}>
      {/* <span className="timeline-line column-2" /> */}
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
