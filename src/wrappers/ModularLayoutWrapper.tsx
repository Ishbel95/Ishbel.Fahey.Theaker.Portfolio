"use client";
import React, { useRef } from "react";
import LayoutOptionsBlockFragmentQuery from "@/models/fragments/LayoutOptionsInterface";
import { layoutWrapperClassNames } from "@/models/enums/LayoutWrapperClassNames";
import useInView from "@/hooks/useInView";
import useScreenSize from "@/hooks/useScreenSize";
export default function ModularLayoutWrapper({
  data,
  children,
}: {
  data: LayoutOptionsBlockFragmentQuery;
  children: React.ReactNode;
}) {
  const modularLayoutDiv = useRef<HTMLDivElement>(null);
  const getPadding = (bottomPadding?: boolean, topPadding?: boolean) => {
    if (!bottomPadding && topPadding)
      return layoutWrapperClassNames.paddingTopOnly;
    else if (!topPadding && bottomPadding)
      return layoutWrapperClassNames.paddingBottomOnly;
    else if (topPadding && bottomPadding)
      return layoutWrapperClassNames.paddingTopBottom;
    else return layoutWrapperClassNames.paddingNone;
  };

  const paddingClassName = getPadding(data?.bottomPadding, data?.topPadding);

  const rowClassName = data?.rowReverse
    ? layoutWrapperClassNames.rowReverse
    : data?.row
      ? layoutWrapperClassNames.row
      : null;

  const textAlignClassName = Object.keys(layoutWrapperClassNames).find(
    (className) => className === data?.textAlign,
  );
  const desktop = useScreenSize();
  const modularLayoutInView = useInView(
    modularLayoutDiv,
    desktop ? "100px" : "-200px 0px -200px 0px",
    0.3,
    { once: true },
  );

  const globalWidthClassName = data?.largeWidth
    ? layoutWrapperClassNames.largeWidth
    : layoutWrapperClassNames.width;

  return (
    <section
      ref={modularLayoutDiv}
      id={data?.customId}
      className={`modular-layout-wrapper ${modularLayoutInView && "modular-layout-enter"} background-${data?.backgroundColor}`}
      style={{ background: `${data?.backgroundGradient}` }}
    >
      <div
        className={`${rowClassName} align-${textAlignClassName} ${paddingClassName} ${globalWidthClassName} modular-layout-inner`}
      >
        {children}
      </div>
    </section>
  );
}
