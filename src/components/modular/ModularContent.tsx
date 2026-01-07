import React from "react";
import MyStructuredText from "../data/MyStructuredText";

export default function ModularContent({
  data,
  key,
}: {
  data: any;
  key: string;
}) {
  return data.content.map((data: any) => (
    <div className="modular-content-container" key={key}>
      <div className="modular-content-inner">
        <MyStructuredText data={data.body} />
      </div>
    </div>
  ));
}
