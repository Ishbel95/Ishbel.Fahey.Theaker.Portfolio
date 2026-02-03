"use client";
import React, { useState, useEffect } from "react";
import { getDatoCmsData } from "@/util/util";
import { AllModularTemplateSlugsQuery } from "@/queries/ModularTemplateQuery";
import Link from "next/link";
import Glass from "./animation/Glass";
import { usePathname } from "next/navigation";
import useScreenSize from "@/hooks/useScreenSize";
import ModularTemplateQuery from "@/models/queries/ModularTemplateQueryInterface";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function NavigationInner({ data }: { data: any }) {
  const pathname = usePathname();
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [navDesktopAnimationEnded, setNavDesktopAnimationEnded] =
    useState(false);

  useEffect(() => {
    pathname && setNavIsOpen(false);
  }, [pathname]);

  const { scrollY } = useScrollPosition();
  const scrollPosition = scrollY >= 100;
  const scrollAtTop = scrollY === 0;
  useEffect(() => {
    setNavIsOpen(false);
  }, [scrollAtTop]);

  return (
    <div
      onAnimationEnd={(event) =>
        event.animationName === "navigation-burger-scroll" &&
        setNavDesktopAnimationEnded(true)
      }
      className={`${navIsOpen ? "glass-navigation-open" : "glass-navigation-closed"} ${scrollPosition && `glass-navigation-desktop-${navIsOpen ? "open" : "closed"}`}`}
    >
      <Glass classNames={`glass-navigation`}>
        <div className="navigation-content">
          <div className="navigation-content-inner">
            <Link href={"/"}>Home</Link>
            {data.allModularTemplates.map(
              ({
                slug,
                includeInNav,
                internalTitle,
                id,
              }: {
                slug: string;
                includeInNav: boolean;
                internalTitle: string;
                id: string;
              }) => {
                return (
                  includeInNav && (
                    <Link href={`/details/${slug}`} key={id}>
                      {internalTitle}
                    </Link>
                  )
                );
              },
            )}
          </div>
        </div>{" "}
        <button
          className="navigation-burger"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          <div />
        </button>
      </Glass>
    </div>
  );
}
