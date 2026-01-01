"use server";
import "server-only";

import { cookies } from "next/headers";
import { redirect, unstable_rethrow } from "next/navigation";
import { z } from "zod";
import { ApiError, fetcher } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/config";
import type { AuthToken } from "@/lib/types/auth";

const loginSchema = z.object({
	email: z
		.string({ error: "Email is required" })
		.min(1, { error: "Email is required" })
		.pipe(z.email({ message: "Please enter a valid email" })),
	password: z
		.string({ error: "Password is required" })
		.min(1, { error: "Password is required" }),
});

const registerSchema = z.object({
	email: z
		.string({ error: "Email is required" })
		.min(1, { error: "Email is required" })
		.pipe(z.email({ message: "Please enter a valid email" })),
	password: z
		.string({ error: "Password is required" })
		.min(8, { error: "Password must be at least 8 characters" })
		.refine(val => /[A-Z]/.test(val) && /[a-z]/.test(val), {
			message: "Password must contain uppercase and lowercase letters",
		})
		.refine(val => /\d/.test(val), {
			message: "Password must contain at least one number",
		}),
	firstName: z
		.string({ error: "First name is required" })
		.min(1, { error: "First name is required" }),
	lastName: z
		.string({ error: "Last name is required" })
		.min(1, { error: "Last name is required" }),
});

export interface LoginFormState {
	errors?: Record<string, string[]>;
	message?: string;
	values?: {
		email?: string;
	};
}

export interface RegisterFormState {
	errors?: Record<string, string[]>;
	message?: string;
	values?: {
		email?: string;
		firstName?: string;
		lastName?: string;
	};
}

export async function loginUser(
	_prevState: LoginFormState | undefined,
	formData: FormData,
): Promise<LoginFormState> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const validationResult = loginSchema.safeParse({ email, password });

	if (!validationResult.success) {
		const errors = validationResult.error.flatten().fieldErrors as Record<
			string,
			string[]
		>;
		return { errors, values: { email } };
	}

	try {
		const response = await fetcher<AuthToken>(API_ENDPOINTS.LOGIN, {
			method: "POST",
			body: JSON.stringify({
				email: validationResult.data.email,
				password: validationResult.data.password,
			}),
		});

		const accessToken = response?.accessToken;

		if (!accessToken) {
			return { message: "Invalid response from server" };
		}

		// Store in HttpOnly cookie
		(await cookies()).set("authToken", accessToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7, // 7 days
		});
	} catch (error) {
		if (error instanceof ApiError) {
			// Handle specific API errors
			if (error.statusCode === 401 || error.code === 6) {
				return { message: "Invalid email or password", values: { email } };
			}
			return { message: error.message || "Failed to login", values: { email } };
		}

		unstable_rethrow(error);
		return { message: "An unexpected error occurred" };
	}

	redirect("/");
}

export async function registerUser(
	_prevState: RegisterFormState | undefined,
	formData: FormData,
): Promise<RegisterFormState> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;

	const validationResult = registerSchema.safeParse({
		email,
		password,
		firstName,
		lastName,
	});

	if (!validationResult.success) {
		const errors = validationResult.error.flatten().fieldErrors as Record<
			string,
			string[]
		>;
		return { errors, values: { email, firstName, lastName } };
	}

	try {
		const response = await fetcher<AuthToken>(API_ENDPOINTS.REGISTER, {
			method: "POST",
			body: JSON.stringify({
				email: validationResult.data.email,
				password: validationResult.data.password,
				firstName: validationResult.data.firstName,
				lastName: validationResult.data.lastName,
			}),
		});

		const accessToken = response?.accessToken;

		if (!accessToken) {
			return { message: "Invalid response from server" };
		}

		// Store in HttpOnly cookie
		(await cookies()).set("authToken", accessToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "strict",
			maxAge: 60 * 60 * 24 * 7, // 7 days
		});
	} catch (error) {
		if (error instanceof ApiError) {
			// Handle specific API errors
			if (error.code === 4) {
				return {
					message: "This email is already registered",
					values: { email, firstName, lastName },
				};
			}
			if (error.code === 3) {
				// Field-specific errors from API
				if (error.errors) {
					const apiErrors: Record<string, string[]> = {};
					error.errors.forEach(err => {
						const field = err.error;
						if (field) {
							if (!apiErrors[field]) {
								apiErrors[field] = [];
							}
							apiErrors[field].push(err.message);
						}
					});
					if (Object.keys(apiErrors).length > 0) {
						return {
							errors: apiErrors,
							values: { email, firstName, lastName },
						};
					}
				}
			}
			return {
				message: error.message || "Failed to register",
				values: { email, firstName, lastName },
			};
		}

		unstable_rethrow(error);
		return { message: "An unexpected error occurred" };
	}

	redirect("/auth/login");
}

export async function logoutUser() {
	const cookieStore = await cookies();
	cookieStore.delete("authToken");
	redirect("/");
}
