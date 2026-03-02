import React from "react";
import MyImage from "./myContentWrappers/MyImage";
import MyStructuredText from "./myContentWrappers/MyStructuredText";
import MyPath from "./myContentWrappers/MyPath";
import { CardBlockInterface } from "@/models/fragments/CardCarouselBlockInterface";
import Glass from "./animation/Glass";
import Link from "next/link";
export default function Card({ data }: { data: CardBlockInterface }) {
  return (
    <Glass classNames="map-child-margin glass-card card">
      <div className="card-overlay" />
      <MyImage img={data.previewImage} />
      <div className="card-expanded-text display-flex-column">
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
