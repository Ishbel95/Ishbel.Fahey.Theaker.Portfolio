import { performRequest } from "@/lib/datoCms";

export const layoutWrapperClassNames = {
  row: "display-flex-row-desktop",
  rowReverse: "display-flex-row-reverse-desktop",
  left: "align-left",
  right: "align-right",
  center: "align-center",
  paddingTopBottom: "padding-top-bottom",
  paddingTopOnly: "padding-top-only",
  paddingBottomOnly: "padding-bottom-only",
};

export async function getDatoCmsData({
  query,
  variables,
}: {
  query: string;
  variables?: {};
}) {
  const datoQuery = { query, variables };
  const datoCmsData = await performRequest(datoQuery);

  return datoCmsData;
}
