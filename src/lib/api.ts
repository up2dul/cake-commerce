import { cookies } from "next/headers";
import { API_BASE_URL } from "./config";
import type { ApiResponse } from "./types/common";

interface FetcherOptions extends RequestInit {
	params?: Record<string, string | number | boolean>;
}

export class ApiError extends Error {
	constructor(
		public statusCode: number,
		public code: number,
		message: string,
		public errors?: Array<{ error: string; message: string }>,
	) {
		super(message);
		this.name = "ApiError";
	}
}

export async function fetcher<T>(
	path: string,
	options?: FetcherOptions,
): Promise<T> {
	const url = new URL(`${API_BASE_URL}${path}`);

	// Add query parameters
	if (options?.params) {
		Object.entries(options.params).forEach(([key, value]) => {
			url.searchParams.append(key, String(value));
		});
	}

	// Get auth token if available
	const cookieStore = await cookies();
	const token = cookieStore.get("authToken")?.value;

	// Prepare headers
	const headers: Record<string, string> = {
		"Content-Type": "application/json",
		Accept: "application/json",
		...(token && { Authorization: token }),
		...(options?.headers as Record<string, string>),
	};

	// Make request
	const response = await fetch(url.toString(), {
		...options,
		headers,
	});

	// Parse response
	const data = (await response.json()) as ApiResponse<T>;

	// Handle errors
	if (!response.ok || !data.success) {
		throw new ApiError(
			response.status,
			data.code || 0,
			data.message || "An error occurred",
			data.errors,
		);
	}

	return data.data as T;
}
