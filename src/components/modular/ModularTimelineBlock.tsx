import TimelineFragmentQuery from "@/models/fragments/TimelineBlockInterface";
import React from "react";
import MyStructuredText from "../data/MyStructuredText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Glass from "../animation/Glass";
export default function ModularTimelineBlock({
  data,
  key,
}: {
  data: TimelineFragmentQuery;
  key: string;
}) {
  return (
    <div key={key} className={`modular-timeline-container modular-inner`}>
      {/* <div className="gradient-overlay-blue-transparent-blue" /> */}
      <div className="timeline-inner">
        <span className="timeline-line column-2" />
        {data.timelineData.map((timelineSection) => (
          <div
            className={`timeline-body-${timelineSection.sideOfLine} column-${timelineSection.column} `}
          >
            <Glass>
              <MyStructuredText data={timelineSection.timelineBody} />
            </Glass>
          </div>
        ))}
      </div>
    </div>
  );
}
