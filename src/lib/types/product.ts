import type { CurrencyAmount, Image, PreviewImage } from "./common";

export interface ProductVariant {
	id: string;
	title: string;
	availableForSale: boolean;
	selectedOptions?: Array<{
		name: string;
		value: string;
	}>;
	price: CurrencyAmount;
	image?: Image;
}

export interface ProductOption {
	name: string;
	optionValues: Array<{
		id: string;
		name: string;
	}>;
}

export interface Product {
	id: string;
	title: string;
	/** handle = slug */
	handle: string;
	isPackaging?: boolean;
	metafield?: unknown;
	isPO?: boolean;
	priceRange: {
		maxVariantPrice: CurrencyAmount;
	};
	bestseller?: boolean;
	seasonal?: boolean;
	media: {
		nodes: Array<{
			id: string;
			previewImage: PreviewImage;
		}>;
	};
}

export interface ProductDetail {
	id: string;
	title: string;
	description: string;
	variants: {
		nodes: ProductVariant[];
	};
	options: ProductOption[];
	images: {
		nodes: Image[];
	};
}
