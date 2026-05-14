import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ token: string }> }
) {
  const { token } = await context.params;
  const secret = process.env.LETTERS_PREVIEW_TOKEN;
  if (!secret || token !== secret) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  const res = NextResponse.redirect(new URL("/", request.url));
  res.cookies.set({
    name: "letters_unlock",
    value: "1",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 400,
  });
  return res;
}
