"use server";
import { cookies } from "next/headers";
export default async function getCookie({
  cookie,
  value,
}: {
  cookie: string;
  value: string;
}) {
  const cookieStore = await cookies();
  const cookieExists = cookieStore.has(cookie);
  !cookieExists && cookieStore.set(cookie, value);

  return cookieExists;
}
