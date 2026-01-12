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
    <div
      className={`modular-timeline-container-${data.sideOfLine} align-${data.sideOfLine}-opposite-position display-flex-row-desktop`}
    >
      <div className="timeline-body">
        <div className="timeline-circle">
          <FontAwesomeIcon icon={faCircle} />
        </div>
        <MyStructuredText data={data.timelineBody} />
      </div>
    </div>
  );
}
