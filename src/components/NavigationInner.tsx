"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Glass from "./animation/Glass";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function NavigationInner({ data }: { data: any }) {
  const pathname = usePathname();
  const [navIsOpen, setNavIsOpen] = useState(false);

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
    <nav
      className={`${navIsOpen ? "navigation-container-open" : "navigation-container-closed"} ${scrollPosition && `navigation-container-desktop-${navIsOpen ? "open" : "closed"}`}`}
    >
      <Glass classNames={`navigation-container`}>
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
    </nav>
  );
}
