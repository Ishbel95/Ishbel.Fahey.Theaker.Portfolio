import React from "react";
import Form from "../Form";
export default function ModularFormBlock({ data }: { data: any }) {
  return (
    <div className="modular-form-container">
      <Form data={data} key={data.id} />
    </div>
  );
}
