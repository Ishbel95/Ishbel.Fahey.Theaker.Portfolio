import React from "react";

import getDatoCmsData from "@/lib/datoCms";
import { AllProjectsQuery } from "@/queries/ProjectQuery";
import { AllProjectQueryInterface } from "@/models/queries/ProjectQueryInterface";
import ModalInner from "./ModalInner";

export default async function Modal() {
  const data = (await getDatoCmsData({
    query: AllProjectsQuery,
  })) as AllProjectQueryInterface;

  return <ModalInner data={data} />;
}
