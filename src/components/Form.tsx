import { InputTypes } from "@/models/enums/InputTypes";
import FormBlockFragmentQuery, {
  FormInputInterface,
} from "@/models/fragments/FormBlockInterface";
import FormInputWrapper from "@/wrappers/FormInputWrapper";
import React from "react";

export default function Form({
  data,
  key,
}: {
  data: FormBlockFragmentQuery;
  key: string;
}) {
  function getFormInput(data: FormInputInterface) {
    let inputType;
    switch (data.inputType) {
      case InputTypes.Text:
        inputType = (
          <div>
            <label>{data.label}</label>
            <input type={data.inputType} placeholder={data.placeholder} />
          </div>
        );
    }
    return <FormInputWrapper data={data}>{inputType}</FormInputWrapper>;
  }

  return (
    <form
      key={key}
      data-netlify="true"
      method="post"
      data-netlify-honeypot="bot-field"
      name={data.formName}
      action={data.successPath}
      className={`form-${data.formMode}`}
    >
      <input type="hidden" name={data.formName} value={data.formName} />
      {data?.formContent.map((input: FormInputInterface) => {
        return <div key={input.id}>{getFormInput(input)}</div>;
      })}
    </form>
  );
}
