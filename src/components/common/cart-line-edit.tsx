"use client";

import { MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "sonner";
import { updateCartLineAction } from "@/app/actions/cart";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store/cart";
import type { CartLine } from "@/lib/types/cart";
import { format3Digit } from "@/lib/utils";
import { CakeWording, GreetingCard } from "./optional-checkbox";

interface CartLineEditProps {
	line: CartLine;
	cartId: string;
	onBack: () => void;
}

export const CartLineEdit = ({ line, cartId, onBack }: CartLineEditProps) => {
	const [quantity, setQuantity] = useState(line.quantity);
	const [cakeWording, setCakeWording] = useState(
		line.attributes.find(attr => attr.key.toLowerCase() === "cake wording")
			?.value || "",
	);
	const [greetingCard, setGreetingCard] = useState(
		line.attributes.find(attr => attr.key.toLowerCase() === "greetings")
			?.value || "",
	);
	const [isLoading, setIsLoading] = useState(false);
	const { updateCart } = useCart();

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(prev => prev - 1);
		}
	};

	const handleIncrement = () => {
		setQuantity(prev => prev + 1);
	};

	const handleUpdate = async () => {
		setIsLoading(true);
		try {
			const updatedCart = await updateCartLineAction(
				cartId,
				line.id,
				quantity,
				cakeWording,
				greetingCard,
			);
			updateCart(updatedCart);
			onBack();
		} catch (error) {
			console.error("Failed to update cart line:", error);
			toast.error("Failed to update item. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col h-full">
			<div className="flex-1 overflow-y-auto py-6 px-4 lg:px-5">
				<button
					type="button"
					onClick={onBack}
					className="mb-6 flex items-center gap-2 text-sm font-medium hover:text-army-green/80"
				>
					BACK
				</button>

				<h1 className="font-bold uppercase text-[22px] md:text-[30px]">
					{line.merchandise.product.title}
				</h1>

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

				<section className="mt-3 flex items-center justify-between gap-4">
					<div className="flex items-center gap-4">
						<button
							type="button"
							aria-label="Decrement quantity"
							className="rounded-full disabled:cursor-not-allowed disabled:text-army-green/80 enabled:hover:text-white enabled:hover:bg-philippine-brown"
							disabled={quantity <= 1}
							onClick={handleDecrement}
						>
							<MinusCircleIcon size={24} weight="thin" className="md:size-8" />
						</button>

						<span className="font-rozha-one text-xl md:text-2xl">
							{quantity}
						</span>

						<button
							type="button"
							aria-label="Increment quantity"
							onClick={handleIncrement}
							className="rounded-full disabled:cursor-not-allowed disabled:text-army-green/80 enabled:hover:text-white enabled:hover:bg-philippine-brown"
						>
							<PlusCircleIcon size={24} weight="thin" className="md:size-8" />
						</button>
					</div>

					<p className="font-rozha-one text-xl text-philippine-brown md:text-2xl">
						{format3Digit(quantity * Number(line.merchandise.price.amount))}
					</p>
				</section>

				<Button
					size="lg"
					className="w-full mt-6"
					onClick={handleUpdate}
					disabled={isLoading}
				>
					{isLoading ? "UPDATING..." : "UPDATE"}
				</Button>
			</div>
		</div>
	);
};
