"use client";

import { XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useLockBodyScroll } from "react-use";
import { toast } from "sonner";
import { removeFromCartAction } from "@/app/actions/cart";
import BgPattern from "@/assets/bg-pattern.webp";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/store/cart";
import type { CartLine } from "@/lib/types/cart";
import { cn, format3Digit } from "@/lib/utils";
import { CartItemCard } from "./cart-item-card";
import { CartLineEdit } from "./cart-line-edit";

export const CartDrawer = () => {
	const { isOpen, setIsOpen, lines, subtotal, cartId, updateCart } = useCart();
	const [editingLine, setEditingLine] = useState<CartLine | null>(null);
	const [isRemoving, setIsRemoving] = useState(false);

	useLockBodyScroll(isOpen);

	const handleRemove = async (lineId: string) => {
		if (!cartId) return;

		setIsRemoving(true);
		try {
			const updatedCart = await removeFromCartAction(cartId, lineId);
			updateCart(updatedCart);
		} catch (error) {
			console.error("Failed to remove item:", error);
			toast.error("Failed to remove item. Please try again.");
		} finally {
			setIsRemoving(false);
		}
	};

	if (editingLine && cartId) {
		return (
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="fixed z-30 inset-0 bg-black/60 backdrop-blur-xs"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.5,
							ease: "backInOut",
						}}
					>
						<motion.aside
							className={cn(
								"fixed right-0 top-0 bottom-0",
								"flex flex-col",
								"w-full h-full max-h-screen md:w-1/2 lg:w-88.5 xl:w-95.5",
							)}
							style={{
								backgroundImage: `url(${BgPattern.src})`,
								backgroundPosition: "center",
								backgroundRepeat: "repeat",
								backgroundSize: "120%",
							}}
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.3 }}
						>
							<CartLineEdit
								line={editingLine}
								cartId={cartId}
								onBack={() => setEditingLine(null)}
							/>
						</motion.aside>
					</motion.div>
				)}
			</AnimatePresence>
		);
	}

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					className="fixed z-30 inset-0 bg-black/60 backdrop-blur-xs"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{
						duration: 0.5,
						ease: "backInOut",
					}}
				>
					<motion.aside
						className={cn(
							"fixed right-0 top-0 bottom-0",
							"flex flex-col",
							"w-full h-full max-h-screen md:w-1/2 lg:w-88.5 xl:w-95.5",
						)}
						style={{
							backgroundImage: `url(${BgPattern.src})`,
							backgroundPosition: "center",
							backgroundRepeat: "repeat",
							backgroundSize: "120%",
						}}
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ duration: 0.3 }}
					>
						<div className="flex-1 overflow-y-auto py-6 px-4 lg:px-5">
							<div className="flex items-start gap-4 mb-6">
								<div className="flex-1">
									<h1 className="font-bold text-[22px] md:text-[30px]">CART</h1>
									<p className="mt-1 font-eb-garamond italic text-gray-500 text-sm/5">
										*All prices shown are in thousands of rupiah
									</p>
								</div>

								<button
									type="button"
									aria-label="Close cart drawer"
									className="hover:text-army-green/80"
									onClick={() => setIsOpen(false)}
								>
									<XIcon size={24} weight="bold" />
								</button>
							</div>

							{lines.length === 0 ? (
								<div className="flex items-center justify-center h-40 text-gray-500">
									<p>Your cart is empty</p>
								</div>
							) : (
								<ul className="flex flex-col gap-4">
									{lines.map(line => (
										<li key={line.id}>
											<CartItemCard
												line={line}
												onEdit={setEditingLine}
												onRemove={handleRemove}
											/>
										</li>
									))}
								</ul>
							)}
						</div>

						<footer className="p-4 pb-6 bg-white border-t">
							<div className="flex items-center justify-between">
								<span className="font-medium text-xs">SUBTOTAL</span>
								<span className="font-rozha-one text-philippine-brown text-xl/5">
									{format3Digit(subtotal)}
								</span>
							</div>
							<Button
								className="w-full mt-4"
								size="lg"
								disabled={lines.length === 0 || isRemoving}
							>
								CHOOSE DELIVERY TIME
							</Button>
						</footer>
					</motion.aside>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
