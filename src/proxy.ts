import { canonicalHost, redirectHosts } from "@/config/site";
import { getLocaleFromPathname } from "@/i18n/routes";
import { NextResponse, type NextRequest } from "next/server";

function requestHost(request: NextRequest) {
  const raw = request.headers.get("x-forwarded-host") ?? request.headers.get("host") ?? "";
  return raw.split(",")[0]?.trim().replace(/:\d+$/, "").toLowerCase() ?? "";
}

/**
 * 308 the production Vercel alias and www to the apex domain, keeping path and query.
 * Preview hosts (`*-git-*.vercel.app`, deployment URLs) are not in `redirectHosts`,
 * so they stay reachable. A wildcard `*.vercel.app` redirect would break them.
 */
function canonicalRedirect(request: NextRequest) {
  const host = requestHost(request);
  if (!redirectHosts.includes(host as (typeof redirectHosts)[number])) {
    return null;
  }
  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = canonicalHost;
  url.port = "";
  return NextResponse.redirect(url, 308);
}

export function proxy(request: NextRequest) {
  const redirect = canonicalRedirect(request);
  if (redirect) return redirect;

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
