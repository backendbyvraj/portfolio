import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── LAUNCH TIME: April 24, 2026 at 2:00 PM IST (UTC+5:30) ──────────────────
const LAUNCH_TIME = new Date("2026-04-24T14:00:00+05:30");

export function middleware(request: NextRequest) {
  const now = new Date();
  const launched = now >= LAUNCH_TIME;

  const { pathname } = request.nextUrl;

  // Always allow the coming-soon page itself + Next.js internals
  if (
    launched ||
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // Block everything else → redirect to coming soon
  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * Match all paths EXCEPT:
     * - _next/static (static files)
     * - _next/image  (image optimization)
     * - favicon, icons, images
     */
    "/((?!_next/static|_next/image|favicon\\.ico|.*\\.png|.*\\.jpg|.*\\.svg|.*\\.webp).*)",
  ],
};
