import React from "react";
import { getDatoCmsData } from "@/util/util";
import { AllModularTemplateSlugsQuery } from "@/queries/ModularTemplateQuery";
import Link from "next/link";
import Glass from "./animation/Glass";
import NavigationInner from "./NavigationInner";
import NavigationQueryInterface from "@/models/queries/NavigationQueryInterface";
import ModularTemplateQuery from "@/models/queries/ModularTemplateQueryInterface";
export default async function Navigation() {
  const data = (await getDatoCmsData({
    query: AllModularTemplateSlugsQuery,
  })) as ModularTemplateQuery;
  console.log(data);
  return <NavigationInner data={data} />;
}
