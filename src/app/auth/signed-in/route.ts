import { NextResponse, type NextRequest } from "next/server";
import { safeNextPath, sessionHintCookie, sessionHintMaxAge } from "@/features/auth";
import { site } from "@/shared/lib/site";

export function GET(request: NextRequest) {
  const next = safeNextPath(request.nextUrl.searchParams.get("next")) ?? "/";
  const response = NextResponse.redirect(`${site.dashboardUrl}${next}`, 303);
  response.cookies.set(sessionHintCookie, "1", {
    httpOnly: true,
    secure: request.nextUrl.protocol === "https:",
    sameSite: "lax",
    maxAge: sessionHintMaxAge,
  });
  return response;
}
