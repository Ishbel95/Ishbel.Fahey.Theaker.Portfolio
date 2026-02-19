export default async function getDatoCmsData({
  query,
  variables = {},
}: {
  query: string;
  variables?: object;
}) {
  const requestBody = JSON.stringify({ query, variables });
  const includeDrafts = process.env.NEXT_DATOCMS_PREVIEW_MODE;
  const headers = {
    Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
    ...(process.env.NEXT_DATOCMS_ENVIRONMENT
      ? { "X-Environment": process.env.NEXT_DATOCMS_ENVIRONMENT }
      : {}),
  };

  const response = await fetch("https://graphql.datocms.com/", {
    method: "POST",
    headers,
    body: requestBody,
    next: { revalidate: 3600 },
  });
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody,
      )}`,
    );
  }

  return responseBody.data;
}
