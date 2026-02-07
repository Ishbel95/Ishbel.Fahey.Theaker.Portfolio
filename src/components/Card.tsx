import React from "react";
import MyImage from "./data/MyImage";
import MyStructuredText from "./data/MyStructuredText";
import MyPath from "./data/MyPath";
import { CardBlockInterface } from "@/models/fragments/CardCarouselBlockInterface";
import Glass from "./animation/Glass";
import Link from "next/link";
export default function Card({
  data,
  key,
}: {
  data: CardBlockInterface;
  key: number;
}) {
  return (
    <Glass
      classNames="map-child-margin glass-card card"
      key={`${key + data.id}`}
    >
      <div className="card-overlay" />
      <MyImage img={data.previewImage} />
      <div className="card-expanded-text">
        <div className="align-center">
          <MyStructuredText data={data.titleAndDescription} />
        </div>
        {data.modal ? (
          <MyPath>
            <Link href={data.projectLink}>Find out more</Link>
          </MyPath>
        ) : (
          <div className="display-flex-row-desktop">
            <MyPath buttonPath={data.githubLink}>Github</MyPath>
            <MyPath buttonPath={data.projectLink}>Project</MyPath>
          </div>
        )}
      </div>
    </Glass>
  );
}
