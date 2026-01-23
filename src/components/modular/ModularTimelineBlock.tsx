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
    <div key={key} className={`modular-timeline-container modular-inner`}>
      {/* <div className="gradient-overlay-blue-transparent-blue" /> */}

      {/* <span className="timeline-line column-2" /> */}
      {data.timelineData.map((timelineSection) => (
        <div className={`timeline-body column-${timelineSection.column} `}>
          <GlassMorph>
            <MyStructuredText data={timelineSection.timelineBody} />
          </GlassMorph>
        </div>
      ))}
    </div>
  );
}
