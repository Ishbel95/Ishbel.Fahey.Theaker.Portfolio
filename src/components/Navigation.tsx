import React from "react";
import { getDatoCmsData } from "@/util/util";
import { AllModularTemplateSlugsQuery } from "@/queries/ModularTemplateQuery";
import Link from "next/link";
import Glass from "./animation/Glass";
import NavigationInner from "./NavigationInner";
export default async function Navigation() {
  const data = await getDatoCmsData({
    query: AllModularTemplateSlugsQuery,
  });

  return <NavigationInner data={data} />;
}
