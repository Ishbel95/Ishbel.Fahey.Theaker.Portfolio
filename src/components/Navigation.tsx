import React from "react";
import { getDatoCmsData } from "@/util/util";
import { AllModularTemplateSlugsQuery } from "@/queries/ModularTemplateQuery";
import Link from "next/link";
export default async function Navigation() {
  const data = await getDatoCmsData({
    query: AllModularTemplateSlugsQuery,
  });
  return (
    <div className="navigation-container">
      <Link href={"/"}>Home</Link>
      {data.allModularTemplates.map(
        ({
          slug,
          internalTitle,
          id,
        }: {
          slug: string;
          internalTitle: string;
          id: string;
        }) => {
          return (
            <Link href={`/details/${slug}`} key={id}>
              {internalTitle}
            </Link>
          );
        }
      )}
    </div>
  );
}
