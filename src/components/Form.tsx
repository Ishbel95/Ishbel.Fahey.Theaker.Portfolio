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
    const getInputType = () => {
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
    };

    return (
      <div className="form-input-inner">
        <label htmlFor={data.name}>{data.label}</label>
        {getInputType()}
      </div>
    );
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
        return (
          <div key={input.id}>
            <FormInputWrapper data={input}>
              {getFormInput(input)}
            </FormInputWrapper>
          </div>
        );
      })}
    </form>
  );
}
