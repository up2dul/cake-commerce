import { fetcher } from "@/lib/api";
import { getAuthToken } from "@/lib/auth";
import { API_ENDPOINTS } from "@/lib/config";
import type { Customer } from "@/lib/types/auth";

export async function getCustomer(): Promise<Customer | null> {
	try {
		const token = await getAuthToken();

		if (!token) {
			return null;
		}

		const response = await fetcher<Customer>(API_ENDPOINTS.CUSTOMER, {
			headers: {
				Authorization: token,
			},
		});

		return response || null;
	} catch (error) {
		console.error("Failed to fetch customer:", error);
		return null;
	}
}
