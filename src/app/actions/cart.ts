"use server";

import {
	addCartLine as addCartLineAPI,
	createCart as createCartAPI,
} from "@/lib/data/cart";
import type { CreateCartRequest } from "@/lib/types/cart";

export async function addToCartAction(
	request: CreateCartRequest & { cartId?: string },
) {
	const { cartId, ...cartRequest } = request;

	if (!cartId) {
		return createCartAPI(cartRequest);
	}

	return addCartLineAPI({
		...cartRequest,
		cartId,
	});
}
