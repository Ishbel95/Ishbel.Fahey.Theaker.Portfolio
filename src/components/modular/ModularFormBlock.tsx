import React from "react";
import Form from "../Form";
import FormBlockFragmentQuery from "@/models/fragments/FormBlockInterface";
export default function ModularFormBlock({
  data,
  key,
}: {
  data: FormBlockFragmentQuery;
  key: string;
}) {
  return (
    <div
      className={`modular-form-container neumorphism-card-${data.formMode}`}
      key={key}
    >
      <Form data={data} key={data.id} />
    </div>
  );
}
