"use client";

import { XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useLockBodyScroll } from "react-use";
import BgPattern from "@/assets/bg-pattern.webp";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CartItemCard } from "./cart-item-card";

export const CartDrawer = () => {
	const [isOpen, setIsOpen] = useState(true);
	useLockBodyScroll(isOpen);

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
							"w-full h-full max-h-screen overflow-y-auto md:w-1/2 lg:w-88.5 xl:w-95.5",
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

							<ul className="flex flex-col gap-4">
								<li>
									<CartItemCard />
								</li>
								<li>
									<CartItemCard />
								</li>
							</ul>
						</div>

						<footer className="p-4 pb-6 bg-white border-t">
							<div className="flex items-center justify-between">
								<span className="font-medium text-xs">SUBTOTAL</span>
								<span className="font-rozha-one text-philippine-brown text-xl/5">
									1.360
								</span>
							</div>
							<Button className="w-full mt-4" size="lg">
								CHOOSE DELIVERY TIME
							</Button>
						</footer>
					</motion.aside>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
