import TimelineFragmentQuery from "@/models/fragments/TimelineBlockInterface";
import React from "react";
import MyStructuredText from "../data/MyStructuredText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
export default function ModularTimelineBlock({
  data,
  key,
}: {
  data: TimelineFragmentQuery;
  key: string;
}) {
  return (
    <div key={key} className={`modular-timeline-container modular-inner`}>
      <div className="gradient-overlay-blue-transparent-blue" />
      <div className="timeline-inner">
        {data.timelineData.map((timelineSection) => (
          <div
            className={`timeline-body-${timelineSection.sideOfLine} align-${timelineSection.sideOfLine}-opposite-position `}
          >
            <div className="timeline-circle">
              <FontAwesomeIcon icon={faCircle} />
            </div>
            <MyStructuredText data={timelineSection.timelineBody} />
          </div>
        ))}
      </div>
    </div>
  );
}
