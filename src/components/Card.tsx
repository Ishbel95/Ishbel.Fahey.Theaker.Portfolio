import React from "react";
import MyImage from "./data/MyImage";
import MyStructuredText from "./data/MyStructuredText";
import MyPath from "./data/MyPath";
import { CardBlockInterface } from "@/models/fragments/CardCarouselBlockInterface";

export default function Card({
  data,
  key,
}: {
  data: CardBlockInterface;
  key: number;
}) {
  return (
    <div className="glass-card-medium" key={`${key + data.id}`}>
      <MyImage img={data?.previewImage} />
      {/* <div className="align-left">
        <MyStructuredText data={data.titleAndDescription} />
      </div> */}
    </div>
  );
}
