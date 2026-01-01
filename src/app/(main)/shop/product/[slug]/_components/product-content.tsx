"use client";

import { useState } from "react";
import {
	CakeWording,
	GreetingCard,
} from "@/components/common/optional-checkbox";
import { Tag } from "@/components/ui/tag";
import type { ProductDetail } from "@/lib/types/product";
import { format3Digit } from "@/lib/utils";
import { QuantityChanger } from "./quantity-changer";
import { VariantButton } from "./variant-button";

const tncList = [
	"Please allow up to 2 hours for preparation before dispatch.",
	"Minimum purchase of IDR 350,000 (subtotal) for slice cake is required for delivery.",
	"Delivery is available with a flat fare of IDR 25,000 (DKI Jakarta, Alam Sutera, BSD, Gading Serpong & Karawaci), IDR 125,000 (Depok, Tangerang & Bekasi), IDR 250,000 (Bogor) & IDR 50,000 (Surabaya).",
	"Please note: our cakes may contain allergens such as nuts, dairy, and gluten.",
	"Cancellations may be accommodated for orders that have not yet been dispatched or scheduled for same-day delivery. Please allow up to 14 working days for therefund process",
];

interface ProductContentProps {
	product: ProductDetail;
}

export const ProductContent = ({ product }: ProductContentProps) => {
	const [selectedVariantId, setSelectedVariantId] = useState<string | null>(
		null,
	);
	const [cakeWording, setCakeWording] = useState("");
	const [greetingCard, setGreetingCard] = useState("");

	const selectedVariant = product.variants.nodes.find(
		v => v.id === selectedVariantId,
	);

	const price = selectedVariant
		? `${selectedVariant.price.amount.toLocaleString()}`
		: `${product.variants.nodes[0].price.amount.toLocaleString()}`;

	return (
		<div className="section-px pt-6 flex-1 md:pr-10 md:pt-12 lg:pt-16 md:pl-12 lg:pl-16">
			<section>
				<Tag>BEST SELLER</Tag>

				<div className="mt-5.5 flex items-center justify-between gap-2 md:mt-8">
					<h1 className="font-bold text-[22px] md:text-2xl">{product.title}</h1>
					<h2 className="font-rozha-one text-philippine-brown text-2xl/8 md:text-[30px]">
						{format3Digit(price)}
					</h2>
				</div>

				<p className="mt-2 text-raisin-black/70 text-[13px] md:text-sm">
					{product.description}
				</p>
			</section>

			<section className="mt-6 border-t pt-4 text-raisin-black md:pt-6">
				<h2 className="font-semibold text-sm md:text-base">CAKE SIZE</h2>

				<ul className="mt-3 grid gap-4 grid-cols-2 xl:grid-cols-4">
					{product.variants.nodes.map(variant => (
						<li key={variant.id}>
							<VariantButton
								variant={variant}
								isSelected={selectedVariantId === variant.id}
								onClick={() => setSelectedVariantId(variant.id)}
							/>
						</li>
					))}
				</ul>
			</section>

			<section className="mt-4 border-b">
				<ul>
					<li className="py-4 border-t border-dashed">
						<CakeWording value={cakeWording} onChange={setCakeWording} />
					</li>
					<li className="py-4 border-t border-dashed">
						<GreetingCard value={greetingCard} onChange={setGreetingCard} />
					</li>
				</ul>
			</section>

			<section className="mt-6 mb-12 md:mb-15">
				<h2 className="font-semibold text-sm md:text-base">
					TERMS & CONDITIONS
				</h2>

				<ul className="mt-2 ml-4 space-y-1 font-medium text-raisin-black/78 text-[13px]/4.5 list-disc md:text-sm/5">
					{tncList.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			</section>

			<QuantityChanger
				variantId={selectedVariantId}
				cakeWording={cakeWording}
				greetingCard={greetingCard}
			/>
		</div>
	);
};
