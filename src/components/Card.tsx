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
    <div className="align-text-center map-child-margin">
      <Glass classNames="glass-card" key={`${key + data.id}`}>
        <MyImage img={data.previewImage} />
        {/* <div className="align-left">
        <MyStructuredText data={data.titleAndDescription} />
      </div> */}
      </Glass>
      <MyPath color="dark" buttonPath={data.githubLink}>
        {data.internalTitle}
      </MyPath>
    </div>
  );
}
