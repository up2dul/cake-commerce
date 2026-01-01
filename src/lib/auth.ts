import "server-only";

import { cookies } from "next/headers";

/**
 * Check if user has a valid auth token
 * @returns true if authToken cookie exists, false otherwise
 */
export async function isLoggedIn(): Promise<boolean> {
	const cookieStore = await cookies();
	const token = cookieStore.get("authToken");
	return Boolean(token?.value);
}

/**
 * Get the auth token from cookies
 * @returns authToken value or null if not found
 */
export async function getAuthToken(): Promise<string | null> {
	const cookieStore = await cookies();
	return cookieStore.get("authToken")?.value || null;
}
