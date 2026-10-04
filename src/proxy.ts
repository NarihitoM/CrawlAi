import { NextResponse, type NextRequest } from "next/server";
import { sessionHintCookie } from "@/features/auth";
import { site } from "@/shared/lib/site";

export function proxy(request: NextRequest) {
  if (!request.cookies.has(sessionHintCookie)) return NextResponse.next();
  return NextResponse.redirect(`${site.authUrl}/resume`);
}

export const config = {
  matcher: "/",
};
