import { fetcher } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/config";
import type {
	Cart,
	CheckoutRequest,
	CreateCartRequest,
	GetCartRequest,
} from "@/lib/types/cart";

export async function createCart(
	request: CreateCartRequest,
	token?: string,
): Promise<Cart> {
	return fetcher(API_ENDPOINTS.CREATE_CART, {
		method: "POST",
		body: JSON.stringify(request),
		headers: token ? { Authorization: token } : {},
	});
}

export async function addCartLine(
	request: CreateCartRequest & { cartId: string },
	token?: string,
): Promise<Cart> {
	return fetcher(API_ENDPOINTS.ADD_CART_LINE, {
		method: "POST",
		body: JSON.stringify(request),
		headers: token ? { Authorization: token } : {},
	});
}

export async function getCart(request: GetCartRequest): Promise<Cart> {
	return fetcher(API_ENDPOINTS.GET_CART, {
		method: "POST",
		body: JSON.stringify(request),
	});
}

export async function updateCartLine(
	request: {
		cartId: string;
		lineId: string;
		quantity?: number;
		cakeWording?: string;
		greetingWording?: string;
	},
	token?: string,
): Promise<Cart> {
	return fetcher(API_ENDPOINTS.UPDATE_CART_LINE, {
		method: "POST",
		body: JSON.stringify(request),
		headers: token ? { Authorization: token } : {},
	});
}

export async function removeCartItem(request: {
	cartId: string;
	lineIds: string;
}): Promise<Cart> {
	return fetcher(API_ENDPOINTS.REMOVE_CART_ITEM, {
		method: "POST",
		body: JSON.stringify(request),
	});
}

export async function updateCartBuyerIdentity(
	request: GetCartRequest,
	token: string,
): Promise<Cart> {
	return fetcher(API_ENDPOINTS.UPDATE_CART_BUYER, {
		method: "POST",
		body: JSON.stringify(request),
		headers: { Authorization: token },
	});
}

export async function checkout(
	request: CheckoutRequest,
	token: string,
): Promise<{ message: string }> {
	return fetcher(API_ENDPOINTS.CHECKOUT, {
		method: "POST",
		body: JSON.stringify(request),
		headers: { Authorization: token },
	});
}
