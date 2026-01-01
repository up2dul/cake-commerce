"use client";

import { MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { toast } from "sonner";
import { addToCartAction } from "@/app/actions/cart";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store/cart";
import { cn } from "@/lib/utils";

interface QuantityChangerProps {
	variantId: string | null;
	cakeWording: string;
	greetingCard: string;
}

export const QuantityChanger = ({
	variantId,
	cakeWording,
	greetingCard,
}: QuantityChangerProps) => {
	const [quantity, setQuantity] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const { cartId, updateCart, setCartId } = useCart();

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity(prev => prev - 1);
		}
	};

	const handleIncrement = () => {
		setQuantity(prev => prev + 1);
	};

	const handleAddToCart = async () => {
		if (!variantId) {
			toast.error("Please select a cake variant");
			return;
		}

		setIsLoading(true);
		try {
			const cartRequest = {
				variantId,
				quantity,
				cartId: cartId || undefined,
				...(cakeWording && { cakeWording }),
				...(greetingCard && { greetingWording: greetingCard }),
			};

			const cart = await addToCartAction(cartRequest);
			setCartId(cart.id);
			updateCart(cart);

			setQuantity(1);

			toast.success("Successfully added to cart");
		} catch (error) {
			console.error("Failed to add to cart:", error);
			toast.error("Failed to add to cart. Please try again.");
		} finally {
			setIsLoading(false);
		}
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

			<Button
				size="lg"
				onClick={handleAddToCart}
				disabled={isLoading || !variantId}
			>
				{isLoading ? "ADDING..." : "ADD TO CART"}
			</Button>
		</div>
	);
};
