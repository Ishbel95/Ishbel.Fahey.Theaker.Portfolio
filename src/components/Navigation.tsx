"use cache";
import React from "react";
import { AllModularTemplateSlugsQuery } from "@/queries/ModularTemplateQuery";
import NavigationInner from "./NavigationInner";
import ModularTemplateQuery from "@/models/queries/ModularTemplateQueryInterface";
import getDatoCmsData from "@/lib/datoCms";
import { Suspense } from "react";
import SmallLoadingScreen from "./SmallLoading";
export default async function Navigation() {
  const data = (await getDatoCmsData({
    query: AllModularTemplateSlugsQuery,
  })) as ModularTemplateQuery;

  return (
    <Suspense fallback={<SmallLoadingScreen />}>
      {" "}
      <NavigationInner data={data} />
    </Suspense>
  );
}
