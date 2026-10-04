import { NextResponse, type NextRequest } from "next/server";
import { sessionHintCookie } from "@/features/auth";

export function GET(request: NextRequest) {
  const response = NextResponse.redirect(new URL("/", request.url), 303);
  response.cookies.delete(sessionHintCookie);
  return response;
}
