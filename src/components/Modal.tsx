import React from "react";

import { getDatoCmsData } from "@/util/util";
import { AllProjectsQuery, ProjectQuery } from "@/queries/ProjectQuery";
import { AllProjectQueryInterface } from "@/models/queries/ProjectQueryInterface";
import ModalInner from "./ModalInner";

export default async function Modal() {
  const data = (await getDatoCmsData({
    query: AllProjectsQuery,
  })) as AllProjectQueryInterface;

  return <ModalInner data={data} />;
}
