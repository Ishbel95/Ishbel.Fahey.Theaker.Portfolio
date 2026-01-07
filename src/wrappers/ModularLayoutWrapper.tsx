import LayoutOptionsBlockFragmentQuery from "@/models/fragments/LayoutOptionsInterface";
import React from "react";

export default function ModularLayoutWrapper(
  data: LayoutOptionsBlockFragmentQuery
) {
  const { bottomPadding, backgroundColor, rowReverse, textAlign, topPadding } =
    data;
}
