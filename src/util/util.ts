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

export const blockTypes = {
  layoutWrapperBlock: "LayoutOptionBlockRecord",
  imageBlock: "ImageBlockRecord",
  bodyBlock: "BodyBlockRecord",
};

export function getBlockData(data: any) {
  const result = data.reduce((acc: any, block?: any) => {
    const key = Object.values(blockTypes).find(
      (type) => type === block.__typename
    );
    if (key) {
      acc[key] = block;
    }
    return acc;
  }, {});
  return result;
}

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
