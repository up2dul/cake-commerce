import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/ui/tag";
import { CakeWording, GreetingCard } from "./_components/optional-checkbox";
import { QuantityChanger } from "./_components/quantity-changer";
import { VariantButton } from "./_components/variant-button";

export const metadata: Metadata = {
	title: "Product Details | Cake Commerce",
	description:
		"View detailed information about our delicious cakes and place your order.",
};

const tncList = [
	"Please allow up to 2 hours for preparation before dispatch.",
	"Minimum purchase of IDR 350,000 (subtotal) for slice cake is required for delivery.",
	"Delivery is available with a flat fare of IDR 25,000 (DKI Jakarta, Alam Sutera, BSD, Gading Serpong & Karawaci), IDR 125,000 (Depok, Tangerang & Bekasi), IDR 250,000 (Bogor) & IDR 50,000 (Surabaya).",
	"Please note: our cakes may contain allergens such as nuts, dairy, and gluten.",
	"Cancellations may be accommodated for orders that have not yet been dispatched or scheduled for same-day delivery. Please allow up to 14 working days for therefund process",
];

export default function ProductDetail() {
	return (
		<>
			<div className="section-px hidden w-full py-3 bg-darker-green md:block">
				<ul className="flex items-center gap-4.5 uppercase font-bold text-xs text-white [&>li>a]:hover:text-slate-300">
					<li>
						<Link href="/">HOME</Link>
					</li>
					<li>•</li>
					<li>
						<Link href="/shop">SHOP</Link>
					</li>
					<li>•</li>
					<li>RED VELVET CAKE</li>
				</ul>
			</div>

			<div className="flex flex-col md:flex-row">
				<section className="aspect-square w-full h-90 relative md:size-96 lg:size-120 xl:size-177">
					<Image
						src="https://cdn.shopify.com/s/files/1/0745/6371/5346/files/RedVelvetPie.jpg?v=1766363474"
						alt="Red Velvet Cake"
						className="object-cover w-full h-full"
						fill
					/>
				</section>

				<div className="section-px pt-6 flex-1 md:pr-10 md:pt-12 lg:pt-16 md:pl-12 lg:pl-16">
					<section>
						<Tag>BEST SELLER</Tag>

						<div className="mt-5.5 flex items-center justify-between gap-2 md:mt-8">
							<h1 className="font-bold text-[22px] md:text-2xl">
								RED VELVET CAKE
							</h1>
							<h2 className="font-rozha-one text-philippine-brown text-2xl/8 md:text-[30px]">
								900
							</h2>
						</div>

						<p className="mt-2 text-raisin-black text-[13px] md:text-sm">
							Red velvet sponge, cream cheese, nougat, rum
						</p>
					</section>

					<section className="mt-6 border-t pt-4 text-raisin-black md:pt-6">
						<h2 className="font-semibold text-sm md:text-base">CAKE SIZE</h2>

						<ul className="mt-3 grid gap-4 grid-cols-2 xl:grid-cols-4">
							<li>
								<VariantButton />
							</li>
							<li>
								<VariantButton />
							</li>
							<li>
								<VariantButton />
							</li>
							<li>
								<VariantButton />
							</li>
						</ul>
					</section>

					<section className="mt-4 border-b">
						<ul>
							<li className="py-4 border-t border-dashed">
								<CakeWording />
							</li>
							<li className="py-4 border-t border-dashed">
								<GreetingCard />
							</li>
						</ul>
					</section>

					<section className="mt-6 mb-12 text-raisin-black md:mb-15">
						<h2 className="font-semibold text-sm md:text-base">
							TERMS & CONDITIONS
						</h2>

						<ul className="mt-2 ml-4 space-y-1 font-medium text-[13px]/4.5 list-disc md:text-sm/5">
							{tncList.map((item, index) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					</section>

					{/* Quantity */}
					<QuantityChanger />
				</div>
			</div>
		</>
	);
}
