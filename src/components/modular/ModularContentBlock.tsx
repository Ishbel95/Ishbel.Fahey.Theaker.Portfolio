import React from "react";
import MyStructuredText from "../data/MyStructuredText";

export default function ModularContent({
  data,
  key,
}: {
  data: any;
  key: string;
}) {
  const isDataArray = data?.content?.length > 0;
  return isDataArray ? (
    data?.content?.map((data: any, index: number) => (
      <div className="modular-content-container" key={index}>
        <div className="modular-content-inner">
          <MyStructuredText data={data.body} />
        </div>
      </div>
    ))
  ) : (
    <div className="modular-content-container" key={key}>
      <div className="modular-content-inner">
        <MyStructuredText data={data.body} />
      </div>
    </div>
  );
}
