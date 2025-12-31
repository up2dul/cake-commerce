import type { CurrencyAmount, Image } from "./common";

export interface CartAttribute {
	key: string;
	value: string;
}

export interface CartMerchandise {
	id: string;
	availableForSale: boolean;
	price: CurrencyAmount;
	image: Image;
}

export interface CartLine {
	id: string;
	quantity: number;
	attributes: CartAttribute[];
	merchandise: CartMerchandise;
}

export interface CartBuyerIdentity {
	customer?: {
		email: string;
		firstName: string;
		lastName: string;
	};
}

export interface Cart {
	id: string;
	buyerIdentity: CartBuyerIdentity;
	lines: {
		nodes: CartLine[];
	};
	cost: {
		subtotalAmount: CurrencyAmount;
	};
}

export interface CreateCartRequest {
	variantId: string;
	cakeWording?: string;
	greetingWording?: string;
	quantity: number;
}

export interface GetCartRequest {
	cartId: string;
}

export interface CheckoutRequest {
	cartId: string;
	phone: string;
	deliveryDate: string;
	deliveryTime: string;
}
