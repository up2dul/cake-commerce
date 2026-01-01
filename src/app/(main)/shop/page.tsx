import type { Metadata } from "next";
import { ProductCard } from "@/app/(main)/_components/product-card";
import { getProductList } from "@/lib/data/product";

export const metadata: Metadata = {
	title: "Shop | Cake Commerce",
	description: "Browse our handcrafted signature cakes and delicious treats.",
};

async function ProductList() {
	const products = await getProductList();

	return (
		<ul className="grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6 md:gap-y-10">
			{products.map(product => (
				<li key={product.id}>
					<ProductCard product={product} />
				</li>
			))}
		</ul>
	);
}

export default function Shop() {
	return (
		<>
			<section className="section-px pt-8 md:pt-10 lg:pt-15">
				<h1 className="font-bold text-[22px] md:text-[30px]">
					HANDCRAFTED SIGNATURE CAKES
				</h1>
				<p className="mt-1 font-eb-garamond italic text-gray-500 text-sm md:text-lg">
					*All prices shown are in thousands of rupiah
				</p>
			</section>

			<section className="section-px mt-8 md:mt-10 pb-12 md:pb-14 lg:pb-20">
				<ProductList />
			</section>
		</>
	);
}
