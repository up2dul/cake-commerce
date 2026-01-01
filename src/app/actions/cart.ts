"use server";

import {
	addCartLine as addCartLineAPI,
	createCart as createCartAPI,
	removeCartItem as removeCartItemAPI,
	updateCartLine as updateCartLineAPI,
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

export async function removeFromCartAction(cartId: string, lineId: string) {
	return removeCartItemAPI({
		cartId,
		lineIds: lineId,
	});
}

export async function updateCartLineAction(
	cartId: string,
	lineId: string,
	quantity: number,
	cakeWording?: string,
	greetingCard?: string,
) {
	return updateCartLineAPI({
		cartId,
		lineId,
		quantity,
		...(cakeWording && { cakeWording }),
		...(greetingCard && { greetingWording: greetingCard }),
	});
}
