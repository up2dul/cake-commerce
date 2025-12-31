export const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:8000";

export const API_ENDPOINTS = {
	// Products
	PRODUCT_LIST: "/all-products",
	PRODUCT_DETAIL: (slug: string) => `/product/${slug}`,

	// Auth
	LOGIN: "/login",
	REGISTER: "/register",
	CUSTOMER: "/customer",

	// Cart
	CREATE_CART: "/createCart",
	GET_CART: "/get-cart",
	ADD_CART_LINE: "/cart-line-add",
	UPDATE_CART_LINE: "/update-cart-line",
	REMOVE_CART_ITEM: "/remove-cart-item",
	UPDATE_CART_BUYER: "/update-cart-buyer-identity",
	CHECKOUT: "/checkout",
} as const;

export const RATE_LIMITS = {
	PRODUCTS: { requests: 3, perMs: 1000 },
	PRODUCT_DETAIL: { requests: 3, perMs: 1000 },
	CART_OPERATIONS: { requests: 3, perMs: 5000 },
} as const;
