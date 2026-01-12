import { FormInputInterface } from "@/models/fragments/FormBlockInterface";
import React from "react";

export default function FormInputWrapper({
  data,
  children,
}: {
  data: FormInputInterface;
  children: React.ReactNode;
}) {
  return (
    <div className="form-input">
      <label>{data.label}</label>
      {children}
    </div>
  );
}
