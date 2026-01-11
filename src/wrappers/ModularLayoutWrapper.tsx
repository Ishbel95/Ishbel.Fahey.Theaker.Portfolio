import LayoutOptionsBlockFragmentQuery from "@/models/fragments/LayoutOptionsInterface";

import { layoutWrapperClassNames } from "@/util/util";
export default function ModularLayoutWrapper({
  data,
  key,
  children,
}: {
  data: LayoutOptionsBlockFragmentQuery;
  key: string;
  children: React.ReactNode;
}) {
  const getPadding = (bottomPadding?: Boolean, topPadding?: Boolean) => {
    if (!bottomPadding && topPadding)
      return layoutWrapperClassNames.paddingTopOnly;
    else if (!topPadding && bottomPadding)
      return layoutWrapperClassNames.paddingBottomOnly;
    else if (topPadding && bottomPadding)
      return layoutWrapperClassNames.paddingTopBottom;
    else return "";
  };

  const paddingClassName = getPadding(data?.bottomPadding, data?.topPadding);

  const rowClassName = data?.rowReverse
    ? layoutWrapperClassNames.rowReverse
    : layoutWrapperClassNames.row;

  const textAlignClassName = Object.keys(layoutWrapperClassNames).find(
    (className) => className === data?.textAlign
  );

  return (
    <div
      id={data?.customId}
      key={key}
      className={`modular-layout-wrapper background-${data?.backgroundColor}`}
      style={{ background: `${data?.backgroundGradient}` }}
    >
      <div
        className={`${rowClassName} align-${textAlignClassName} ${paddingClassName} modular-inner`}
      >
        {children}
      </div>
    </div>
  );
}
