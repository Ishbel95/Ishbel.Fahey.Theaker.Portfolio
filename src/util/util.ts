import { performRequest } from "@/lib/datoCms";
import { BlockTypes } from "@/models/enums/BlockTypes";
import { Metadata } from "next";
export function getBlockData(data: any) {
  const result = data.reduce((acc: any, block?: any) => {
    const key = Object.values(BlockTypes).find(
      (type) => type === block.__typename,
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
