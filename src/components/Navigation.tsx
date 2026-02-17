import React from "react";
import { getDatoCmsData } from "@/util/util";
import { AllModularTemplateSlugsQuery } from "@/queries/ModularTemplateQuery";
import NavigationInner from "./NavigationInner";
import ModularTemplateQuery from "@/models/queries/ModularTemplateQueryInterface";

export default async function Navigation() {
  const data = (await getDatoCmsData({
    query: AllModularTemplateSlugsQuery,
  })) as ModularTemplateQuery;

  return <NavigationInner data={data} />;
}
