"use server";

import { cookies } from "next/headers";
import { redirect, unstable_rethrow } from "next/navigation";
import { ApiError, fetcher } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/config";
import type { AuthToken } from "@/lib/types/auth";

export interface LoginFormState {
	errors?: {
		email?: string[];
		password?: string[];
	};
	message?: string;
	values?: {
		email?: string;
	};
}

export async function loginUser(
	_prevState: LoginFormState | undefined,
	formData: FormData,
): Promise<LoginFormState> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	const errors: LoginFormState["errors"] = {};

	if (!email || email.trim() === "") {
		errors.email = ["Email is required"];
	} else if (!email.includes("@")) {
		errors.email = ["Please enter a valid email"];
	}

	if (!password || password.trim() === "") {
		errors.password = ["Password is required"];
	}

	if (Object.keys(errors).length > 0) {
		return { errors, values: { email } };
	}

	try {
		const response = await fetcher<AuthToken>(API_ENDPOINTS.LOGIN, {
			method: "POST",
			body: JSON.stringify({ email, password }),
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

export interface RegisterFormState {
	errors?: {
		email?: string[];
		password?: string[];
		firstName?: string[];
		lastName?: string[];
	};
	message?: string;
	values?: {
		email?: string;
		firstName?: string;
		lastName?: string;
	};
}

export async function registerUser(
	_prevState: RegisterFormState | undefined,
	formData: FormData,
): Promise<RegisterFormState> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const firstName = formData.get("firstName") as string;
	const lastName = formData.get("lastName") as string;

	// Basic validation
	const errors: RegisterFormState["errors"] = {};

	if (!email || email.trim() === "") {
		errors.email = ["Email is required"];
	} else if (!email.includes("@")) {
		errors.email = ["Please enter a valid email"];
	}

	if (!password || password.trim() === "") {
		errors.password = ["Password is required"];
	} else if (password.length < 8) {
		errors.password = ["Password must be at least 8 characters"];
	} else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
		errors.password = ["Password must contain uppercase and lowercase letters"];
	} else if (!/\d/.test(password)) {
		errors.password = ["Password must contain at least one number"];
	}

	if (!firstName || firstName.trim() === "") {
		errors.firstName = ["First name is required"];
	}

	if (!lastName || lastName.trim() === "") {
		errors.lastName = ["Last name is required"];
	}

	if (Object.keys(errors).length > 0) {
		return { errors, values: { email, firstName, lastName } };
	}

	try {
		const response = await fetcher<AuthToken>(API_ENDPOINTS.REGISTER, {
			method: "POST",
			body: JSON.stringify({
				email,
				password,
				firstName,
				lastName,
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
					const apiErrors: RegisterFormState["errors"] = {};
					error.errors.forEach(err => {
						const field = err.error as keyof Exclude<
							RegisterFormState["errors"],
							undefined
						>;
						if (field && field in apiErrors) {
							if (!apiErrors[field]) {
								apiErrors[field] = [];
							}
							(apiErrors[field] as string[]).push(err.message);
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

	redirect("/");
}
