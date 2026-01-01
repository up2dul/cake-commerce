import Image from "next/image";
import type { CartLine } from "@/lib/types/cart";
import { format3Digit } from "@/lib/utils";

interface CartItemCardProps {
	line: CartLine;
}

export const CartItemCard = ({ line }: CartItemCardProps) => {
	const cakeWording = line.attributes.find(
		attr => attr.key.toLowerCase() === "cake wording",
	)?.value;

	return (
		<article className="flex items-start gap-4">
			<div className="aspect-square overflow-hidden size-20 relative">
				<Image
					src={line.merchandise.image.url}
					alt="Product Image"
					className="object-cover w-full h-full"
					fill
				/>
			</div>

			<div className="flex-1">
				<div className="flex items-center justify-between gap-2">
					<h2 className="font-semibold text-sm">
						{line.merchandise.product.title}
					</h2>
					<p className="font-rozha-one text-philippine-brown">
						{format3Digit(line.merchandise.price.amount)}
					</p>
				</div>
				<p className="mt-0.5 text-[#333]/70 text-xs">
					{cakeWording && "With cake wording"}
				</p>

				<div className="mt-4 flex items-center justify-between gap-2">
					<p className="font-rozha-one">{line.quantity}x</p>

					<div className="flex items-center gap-3 font-semibold text-xs">
						<button type="button" className="hover:text-army-green/80">
							EDIT
						</button>
						<button type="button" className="hover:text-army-green/80">
							REMOVE
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};
