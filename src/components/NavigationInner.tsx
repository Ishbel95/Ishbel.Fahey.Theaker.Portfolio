"use client";
import React, { useState, useEffect } from "react";
import { getDatoCmsData } from "@/util/util";
import { AllModularTemplateSlugsQuery } from "@/queries/ModularTemplateQuery";
import Link from "next/link";
import Glass from "./animation/Glass";
import { usePathname } from "next/navigation";

export default function NavigationInner({ data }: { data: any }) {
  const pathname = usePathname();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setNavIsOpen(!navIsOpen);
  };

  useEffect(() => {
    pathname && setNavIsOpen(false);
  }, [pathname]);
  return (
    <div
      className={`${navIsOpen ? "glass-navigation-open" : "glass-navigation-closed"}`}
    >
      <Glass classNames={`glass-navigation`}>
        <div className="navigation-content">
          <div className="navigation-content-inner">
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
              },
            )}
          </div>
        </div>{" "}
        <button className="navigation-burger" onClick={handleBurgerClick}>
          <div />
        </button>
      </Glass>
    </div>
  );
}
