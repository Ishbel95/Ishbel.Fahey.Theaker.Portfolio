import LayoutOptionsBlockFragmentQuery from "@/models/fragments/LayoutOptionsInterface";

import { LayoutWrapperClassNames } from "@/models/enums/LayoutWrapperClassNames";
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
      return LayoutWrapperClassNames.PaddingTopOnly;
    else if (!topPadding && bottomPadding)
      return LayoutWrapperClassNames.PaddingBottomOnly;
    else if (topPadding && bottomPadding)
      return LayoutWrapperClassNames.PaddingTopBottom;
    else return null;
  };

  const paddingClassName = getPadding(data?.bottomPadding, data?.topPadding);

  const rowClassName = data?.rowReverse
    ? LayoutWrapperClassNames.RowReverse
    : LayoutWrapperClassNames.Row;

  const textAlignClassName = Object.keys(LayoutWrapperClassNames).find(
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
