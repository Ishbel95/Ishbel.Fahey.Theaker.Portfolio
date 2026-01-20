import React from "react";
import { getDatoCmsData } from "@/util/util";
import { AllModularTemplateSlugsQuery } from "@/queries/ModularTemplateQuery";
import Link from "next/link";
import Glass from "./animation/Glass";
export default async function Navigation() {
  const data = await getDatoCmsData({
    query: AllModularTemplateSlugsQuery,
  });
  return (
    <Glass classNames="glass-navigation">
      <div className="navigation-container">
        <div className="navigation-inner modular-inner">
          <div className="navigation-content">
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
        </div>
        <span className="navigation-burger" />
      </div>
    </Glass>
  );
}
