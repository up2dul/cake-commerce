import "server-only";

import { cache } from "react";
import { fetcher } from "@/lib/api";
import { API_ENDPOINTS } from "@/lib/config";
import type { Product, ProductDetail } from "@/lib/types/product";

export const getProductList = cache(async (): Promise<Product[]> => {
	try {
		const products = await fetcher<Product[]>(API_ENDPOINTS.PRODUCT_LIST, {
			next: {
				revalidate: 60 * 60, // Cache for 1 hour
				tags: ["products"], // For on-demand revalidation
			},
		});
		return products;
	} catch (error) {
		console.error("Failed to fetch products:", error);
		throw error;
	}
});

export const getProductBySlug = cache(
	async (slug: string): Promise<ProductDetail> => {
		if (!slug || slug.trim() === "") {
			throw new Error("Product slug is required");
		}

		try {
			const product = await fetcher<ProductDetail>(
				API_ENDPOINTS.PRODUCT_DETAIL(slug),
				{
					next: {
						revalidate: 60 * 60, // Cache for 1 hour
						tags: ["products", `product-${slug}`],
					},
				},
			);
			return product;
		} catch (error) {
			console.error(`Failed to fetch product with slug "${slug}":`, error);
			throw error;
		}
	},
);

export function getProductImageUrl(product: Product): string {
	return product.media?.nodes?.[0]?.previewImage?.url || "/placeholder.png";
}

export function getDetailProductImageUrl(product: ProductDetail): string {
	return product.images?.nodes?.[0]?.url || "/placeholder.png";
}

export function formatProductPrice(product: Product): number {
	const amount = Number(product.priceRange?.maxVariantPrice?.amount);
	if (!amount) return 0;
	return amount / 1000;
}

export function formatDetailProductPrice(product: ProductDetail): number {
	const amount = Number(product.variants?.nodes[0].price.amount);
	if (!amount) return 0;
	return amount / 1000;
}
