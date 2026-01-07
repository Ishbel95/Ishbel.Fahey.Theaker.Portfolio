import { NextResponse } from "next/server";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: any) {
  const secret = process.env.NEXT_DATOCMS_PREVIEW_SECRET;

  const { searchParams } = new URL(request.url);
  const secretParams = searchParams.get("secret");
  const slug = searchParams.get("slug");

  // Check the secret and next parameters
  if (secret !== secretParams || !slug) {
    return NextResponse.json(
      {
        message: "Missing or invalid `secret` query string parameter!",
      },
      { status: 401 }
    );
  }

  const draft = await draftMode();
  draft.enable();
  //potentially add in the slug not existing in draft but not 100% needed.
  // Redirect to the homepage, or to the URL provided with the `redirect` query string parameter:
  const redirectUrl = new URL(
    searchParams.get("redirect") || "/",
    "https://example.com"
  );

  redirect(`${redirectUrl.pathname}${redirectUrl.search}`);
}
