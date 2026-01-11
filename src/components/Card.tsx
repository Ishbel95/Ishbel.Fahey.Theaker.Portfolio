import React from "react";
import MyImage from "./data/MyImage";
import MyStructuredText from "./data/MyStructuredText";
import MyPath from "./data/MyPath";

export default function Card({ data, key }: { data: any; key: number }) {
  return (
    <div className="glass-card-dark" key={`${key + data.id}`}>
      <MyImage img={data?.previewImage} />
      <div className="align-left">
        <MyStructuredText data={data.titleAndDescription} />
      </div>
      <div className="align-center">
        <MyPath buttonPath={data.githubLink} color="dark" key={data.id}>
          Discover
        </MyPath>
      </div>
    </div>
  );
}
