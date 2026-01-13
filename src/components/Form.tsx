import { InputTypes } from "@/models/enums/InputTypes";
import FormBlockFragmentQuery, {
  FormInputInterface,
} from "@/models/fragments/FormBlockInterface";
import FormInputWrapper from "@/wrappers/FormInputWrapper";
import React from "react";
import MyPath from "./data/MyPath";

export default function Form({
  data,
  key,
}: {
  data: FormBlockFragmentQuery;
  key: string;
}) {
  function getFormInput(data: FormInputInterface) {
    switch (data.inputType) {
      case InputTypes.Textarea:
        return (
          <textarea
            id={data.name}
            name={data.name}
            placeholder={data.placeholder}
            rows={data.rows}
            maxLength={data.maximumCharacters}
            minLength={data.minimumCharacters}
          />
        );
      case InputTypes.Select:
        return (
          <select id={data.name} name={data.name}>
            {data.selectOptions.map(({ string, id }) => (
              <option key={id}>{string}</option>
            ))}
          </select>
        );
      default:
        return (
          <input
            id={data.name}
            name={data.name}
            type={data.inputType}
            placeholder={data.placeholder}
          />
        );
    }
  }

  return (
    <form
      key={key}
      data-netlify="true"
      method="post"
      data-netlify-honeypot="bot-field"
      name={data.formName}
      action={data.successPath}
      className="form display-grid-3-columns"
    >
      <input type="hidden" name={data.formName} value={data.formName} />
      {data?.formContent.map((input: FormInputInterface) => {
        return (
          <FormInputWrapper data={input} key={input.id}>
            {getFormInput(input)}
          </FormInputWrapper>
        );
      })}
      <MyPath color="light" buttonPath="/">
        <button type="submit" className="">
          Submit
        </button>
      </MyPath>
    </form>
  );
}
