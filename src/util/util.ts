import { performRequest } from "@/lib/datoCms";

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
