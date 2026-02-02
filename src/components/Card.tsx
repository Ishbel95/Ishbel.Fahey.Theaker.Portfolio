import React from "react";
import MyImage from "./data/MyImage";
import MyStructuredText from "./data/MyStructuredText";
import MyPath from "./data/MyPath";
import { CardBlockInterface } from "@/models/fragments/CardCarouselBlockInterface";
import Glass from "./animation/Glass";
export default function Card({
  data,
  key,
}: {
  data: CardBlockInterface;
  key: number;
}) {
  return (
    <Glass
      classNames="map-child-margin glass-card card "
      key={`${key + data.id}`}
    >
      <div className="card-overlay" />
      <MyImage img={data.previewImage} />
      <div className="card-expanded-text">
        <div className="align-left">
          <MyStructuredText data={data.titleAndDescription} />
        </div>
        <MyPath color="dark" buttonPath={data.githubLink} isLink={true}>
          {data.internalTitle}
        </MyPath>
      </div>
    </Glass>
  );
}
