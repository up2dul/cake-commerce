import Image from "next/image";
import Link from "next/link";
import { ProductCardTag } from "@/components/ui/tag";
import { formatProductPrice, getProductImageUrl } from "@/lib/data/product";
import type { Product } from "@/lib/types/product";

type ProductCardProps = {
	product: Product;
};
export const ProductCard = ({ product }: ProductCardProps) => {
	const previewImage = getProductImageUrl(product);
	const altImage =
		product.media?.nodes[0].previewImage.altText || product.title;
	const price = formatProductPrice(product);

	return (
		<Link
			href={`/shop/product/${product.handle}`}
			aria-label={`View ${product.title} product details`}
			className="group block size-full relative"
		>
			{(product.bestseller || product.seasonal) && (
				<ProductCardTag className="absolute z-1 top-4 -right-2">
					{product.bestseller ? "BEST SELLER" : "SEASONAL"}
				</ProductCardTag>
			)}

			<div className="relative aspect-square overflow-hidden w-full">
				<Image
					src={previewImage}
					alt={altImage}
					className="object-cover group-hover:scale-110 transition-transform"
					fill
				/>
			</div>

			<div className="mt-4 flex items-start justify-between gap-1.5 group-hover:opacity-80">
				<span className="font-semibold uppercase text-sm lg:text-base">
					{product.title}
				</span>
				<span className="font-rozha-one text-philippine-brown lg:text-xl">
					{price}
				</span>
			</div>
		</Link>
	);
};
