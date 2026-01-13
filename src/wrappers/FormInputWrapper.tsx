import { FormInputInterface } from "@/models/fragments/FormBlockInterface";
import React from "react";

export default function FormInputWrapper({
  data,
  children,
  key,
}: {
  data: FormInputInterface;
  children: React.ReactNode;
  key: string;
}) {
  return (
    <div className={`form-input column-${data.column} `} key={key}>
      <label htmlFor={data.name} className="align-left">
        {data.label}
      </label>
      {children}
    </div>
  );
}
