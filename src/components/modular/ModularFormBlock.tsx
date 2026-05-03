import React from "react";
import FormWrapper from "../Form";
import FormBlockFragmentQuery from "@/models/fragments/FormBlockInterface";
import Glass from "../animation/Glass";
export default function ModularFormBlock({
  data,
}: {
  data: FormBlockFragmentQuery;
}) {
  return (
    <Glass classNames={`modular-form-container glass-card global-width`}>
      <FormWrapper data={data} />
    </Glass>
  );
}
