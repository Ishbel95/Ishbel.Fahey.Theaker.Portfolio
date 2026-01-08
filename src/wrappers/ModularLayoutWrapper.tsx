import LayoutOptionsBlockFragmentQuery from "@/models/fragments/LayoutOptionsInterface";

import { layoutWrapperClassNames } from "@/util/util";
export default function ModularLayoutWrapper({
  data,
  children,
}: {
  data: LayoutOptionsBlockFragmentQuery;
  children: React.ReactNode;
}) {
  const { bottomPadding, backgroundColor, rowReverse, textAlign, topPadding } =
    data;

  const getPadding = (bottomPadding?: Boolean, topPadding?: Boolean) => {
    if (bottomPadding && topPadding)
      return layoutWrapperClassNames.paddingTopBottom;
    else if (!bottomPadding && topPadding)
      return layoutWrapperClassNames.paddingTopBottom;
    else if (!topPadding && bottomPadding)
      return layoutWrapperClassNames.paddingTopOnly;
    else return undefined;
  };

  const paddingClassName = getPadding(bottomPadding, topPadding);

  const rowClassName = rowReverse
    ? layoutWrapperClassNames.rowReverse
    : layoutWrapperClassNames.row;

  const textAlignClassName = Object.keys(layoutWrapperClassNames).filter(
    (className) => className === textAlign
  );

  return (
    <div className={`modular-layout-wrapper  `}>
      <div
        className={`${rowClassName} ${textAlignClassName} ${paddingClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
