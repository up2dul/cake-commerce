"use client";

import { MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const QuantityChanger = () => {
	const [quantity, setQuantity] = useState(1);

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(prev => prev - 1);
		}
	};

	const handleIncrement = () => {
		setQuantity(prev => prev + 1);
	};

	return (
		<div
			className={cn(
				"sticky bottom-0 h-25 w-full py-6 px-4",
				"flex items-center justify-between gap-2 md:gap-4",
				"bg-white border border-raisin-black border-b-0",
			)}
		>
			<div>
				<span className="font-medium text-xs md:text-sm">QUANTITY</span>
				<div className="mt-3 flex items-center gap-4 md:gap-6">
					<button
						type="button"
						aria-label="Decrement quantity"
						className="rounded-full disabled:cursor-not-allowed disabled:text-army-green/80 enabled:hover:text-white enabled:hover:bg-philippine-brown"
						disabled={quantity <= 1}
						onClick={handleDecrement}
					>
						<MinusCircleIcon size={24} weight="thin" className="md:size-8" />
					</button>

					<span className="font-rozha-one text-xl md:text-2xl">{quantity}</span>

					<button
						type="button"
						aria-label="Increment quantity"
						onClick={handleIncrement}
						className="rounded-full disabled:cursor-not-allowed disabled:text-army-green/80 enabled:hover:text-white enabled:hover:bg-philippine-brown"
					>
						<PlusCircleIcon size={24} weight="thin" className="md:size-8" />
					</button>
				</div>
			</div>

			<Button size="lg">ADD TO CART</Button>
		</div>
	);
};
