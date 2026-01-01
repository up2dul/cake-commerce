import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedRoutes = ["/account"];
const publicRoutes = ["/auth/login", "/auth/register"];

export function proxy(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const isProtectedRoute = protectedRoutes.some(route =>
		path.startsWith(route),
	);
	const isPublicRoute = publicRoutes.some(route => path.startsWith(route));

	const authToken = request.cookies.get("authToken")?.value;

	if (isProtectedRoute && !authToken) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}

	if (isPublicRoute && authToken) {
		return NextResponse.redirect(new URL("/account", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/account/:path*", "/auth/login", "/auth/register"],
};
