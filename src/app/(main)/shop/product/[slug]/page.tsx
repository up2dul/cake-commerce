import Image from "next/image";
import { getDetailProductImageUrl, getProductBySlug } from "@/lib/data/product";
import { Breadcrumb } from "./_components/breadcrumb";
import { ProductContent } from "./_components/product-content";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const product = await getProductBySlug(slug);

	return {
		title: `${product.title} | Cake Commerce`,
		description: product.description || "Shop our delicious cakes",
	};
}

export default async function ProductDetail({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const product = await getProductBySlug(slug);
	const previewImage = getDetailProductImageUrl(product);
	const altImage = product.images?.nodes[0].altText || product.title;

	return (
		<>
			<Breadcrumb title={product.title} />

			<div className="flex flex-col md:flex-row">
				<section className="aspect-square w-full h-90 relative md:size-96 lg:size-120 xl:size-177">
					<Image
						src={previewImage}
						alt={altImage}
						className="object-cover w-full h-full"
						fill
					/>
				</section>

				<ProductContent product={product} />
			</div>
		</>
	);
}
