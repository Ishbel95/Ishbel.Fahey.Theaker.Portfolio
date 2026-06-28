"use client";

import FormBlockFragmentQuery, {
  FormInputInterface,
} from "@/models/fragments/FormBlockInterface";
import FormInputWrapper from "@/wrappers/FormInputWrapper";
import React, { useActionState } from "react";
import MyPath from "./myContentWrappers/MyPath";
import Form from "next/form";
import { getFormInput } from "@/util/getFormInput";
import { useForm, ValidationError } from "@formspree/react";
import FormSubmitted from "./FormSubmitted";
export default function FormWrapper({
  data,
}: {
  data: FormBlockFragmentQuery;
}) {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM);

  return (
    <Form name={data.formName} action={handleSubmit} className="form">
      <input type="hidden" name={data.formName} value={data.formName} />
      {data?.formContent.map((input: FormInputInterface) => {
        return (
          <>
            <FormInputWrapper data={input} key={input.id}>
              {getFormInput(input)}
            </FormInputWrapper>
            <ValidationError
              prefix={input.label}
              field={input.name}
              errors={state.errors}
            />
          </>
        );
      })}
      <MyPath color="dark" buttonPath="/" customClassNames={"column-span"}>
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </MyPath>
    </Form>
  );
}
