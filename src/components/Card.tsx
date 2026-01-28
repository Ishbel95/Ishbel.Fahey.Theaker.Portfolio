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
    <div
      className="align-text-center map-child-margin glass-card-wrapper"
      key={`${key + data.id}`}
    >
      <MyPath color="dark" buttonPath={data.githubLink}>
        {/* {data.internalTitle} */}
        <MyImage img={data.previewImage} />
        {/* <div className="align-left">
        <MyStructuredText data={data.titleAndDescription} />
      </div> */}{" "}
      </MyPath>
      <Glass classNames="glass-reflection">
        <MyImage img={data.previewImage} />
      </Glass>
    </div>
  );
}
