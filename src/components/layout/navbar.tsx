"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
	useKeyPressEvent,
	useLockBodyScroll,
	useWindowScroll,
} from "react-use";
import LogoImage from "@/assets/cake-commerce-logo-light.svg";
import { useCart } from "@/lib/store/cart";
import { cn } from "@/lib/utils";

export const Navbar = () => {
	const isCartOpen = useCart(state => state.isOpen);
	const setIsCartOpen = useCart(state => state.setIsOpen);

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	useLockBodyScroll(isMenuOpen || isCartOpen);

	useKeyPressEvent("Escape", () => setIsMenuOpen(false));

	const pathname = usePathname();
	const isHomePage = pathname === "/";
	const { y } = useWindowScroll();
	const isTopHomePage = isHomePage && y < 100;

	// biome-ignore lint/correctness/useExhaustiveDependencies: pathname is necessary due to the route change
	useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	const handleOpenCart = () => {
		setIsCartOpen(true);
		setIsMenuOpen(false);
	};

	return (
		<>
			<nav
				className={cn(
					"flex items-center justify-between text-white",
					"py-3.5 section-px md:py-3",
					"fixed top-0 inset-x-0 z-10 w-full",
					"transition-colors duration-300 ease-in-out",
					isTopHomePage ? "bg-transparent" : "bg-army-green",
				)}
			>
				<Link href="/" aria-label="Cake Commerce Home">
					<Image src={LogoImage} alt="Cake Commerce Logo" />
				</Link>

				{/* Mobile button */}
				<div className="flex items-center gap-3 sm:gap-6">
					<button
						type="button"
						aria-label="Open cart"
						className="font-medium text-xs hover:text-slate-300 sm:text-sm md:hidden"
						onClick={handleOpenCart}
					>
						CART
					</button>
					<button
						type="button"
						aria-label="Open menu"
						className="hover:text-slate-300 md:hidden"
						onClick={() => setIsMenuOpen(true)}
					>
						<ListIcon size={24} />
					</button>
				</div>

				{/* Desktop menu */}
				<div
					className={cn(
						"hidden items-center gap-5 font-bold lg:gap-6 md:flex",
						"text-sm [&>ul>li>a]:hover:text-slate-300",
					)}
				>
					<ul className="flex items-center gap-5 lg:gap-6">
						<li>
							<Link href="/shop">SHOP</Link>
						</li>
						<li>
							<Link href="/group-order">GROUP ORDER</Link>
						</li>
						<li>
							<Link href="/faq">FAQ</Link>
						</li>
					</ul>
					<span>•</span>
					<ul className="flex items-center gap-5 lg:gap-6">
						<li>
							<button
								type="button"
								aria-label="Open cart"
								onClick={handleOpenCart}
							>
								CART
							</button>
						</li>
						<li>
							<Link href="/account">ACCOUNT</Link>
						</li>
					</ul>
				</div>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="fixed z-20 inset-0 bg-black/60 backdrop-blur-xs"
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
								"bg-army-green text-white section-px py-3.5 md:px-2",
								"w-full h-full max-h-screen overflow-y-auto md:w-1/2 lg:w-5/12",
							)}
							initial={{ x: "100%" }}
							animate={{ x: 0 }}
							exit={{ x: "100%" }}
							transition={{ duration: 0.3 }}
						>
							<button
								type="button"
								aria-label="Close menu"
								className="absolute top-6 right-6 hover:text-slate-300"
								onClick={() => setIsMenuOpen(false)}
							>
								<XIcon size={32} weight="bold" />
							</button>

							<ul
								className={cn(
									"h-full flex flex-col items-center justify-center gap-6",
									"font-bold text-3xl [&>li>a]:hover:text-slate-400 [&>li>button]:hover:text-slate-400 sm:text-4xl",
								)}
							>
								<li>
									<Link href="/">HOME</Link>
								</li>
								<li>
									<Link href="/shop">SHOP</Link>
								</li>
								<li>
									<Link href="/group-order">GROUP ORDER</Link>
								</li>
								<li>
									<Link href="/faq">FAQ</Link>
								</li>
								<li>
									<button
										type="button"
										aria-label="Open cart"
										onClick={handleOpenCart}
									>
										CART
									</button>
								</li>
								<li>
									<Link href="/account">ACCOUNT</Link>
								</li>
							</ul>
						</motion.aside>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
