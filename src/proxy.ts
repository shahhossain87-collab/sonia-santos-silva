import { NextResponse, type NextRequest } from "next/server";
import { getLocaleFromPathname } from "@/i18n/routes";

export function proxy(request: NextRequest) {
  const locale = getLocaleFromPathname(request.nextUrl.pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", locale);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/|.*\\..*).*)"],
};
