import { executeQuery } from "@datocms/cda-client";
import { cache } from "react";

const dedupedFetch = cache(
  async (
    body: any
    // excludeInvalid = false,
    // visualEditingBaseUrl = null,
    // revalidate = null,
  ) => {
    const includeDrafts = process.env.NEXT_DATOCMS_PREVIEW_MODE;
    const headers = {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
      ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
      // ...(excludeInvalid ? { "X-Exclude-Invalid": "true" } : {}),
      ...(process.env.NEXT_DATOCMS_ENVIRONMENT
        ? { "X-Environment": process.env.NEXT_DATOCMS_ENVIRONMENT }
        : {}),
    };

    const response = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers,
      body,
      cache: "no-store",
      //   next: { revalidate },
    });
    //error handling sort out please
    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error(
        `${response.status} ${response.statusText}: ${JSON.stringify(
          responseBody
        )}`
      );
    }
    console.log(responseBody);

    return responseBody;
  }
);

export async function performRequest({
  query,
  variables = {},
}: // excludeInvalid = false,
//   visualEditingBaseUrl,
//   revalidate,
{
  query: string;
  variables?: {};
  // excludeInvalid?: boolean;
}) {
  const { data } = await dedupedFetch(
    JSON.stringify({ query, variables })
    // excludeInvalid,
    // visualEditingBaseUrl,
    // revalidate,
  );

  return data;
}
