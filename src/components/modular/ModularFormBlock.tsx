import React from "react";
import FormWrapper from "../Form";
import FormBlockFragmentQuery from "@/models/fragments/FormBlockInterface";
import Glass from "../animation/Glass";
export default function ModularFormBlock({
  data,
  key,
}: {
  data: FormBlockFragmentQuery;
  key: string;
}) {
  return (
    <Glass
      classNames={`modular-form-container glass-card global-width`}
      key={key}
    >
      <FormWrapper data={data} key={data.id} />
    </Glass>
  );
}
