"use client";

import { ListIcon, XIcon } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
	useKeyPressEvent,
	useLockBodyScroll,
	useWindowScroll,
} from "react-use";
import LogoImage from "@/assets/cake-commerce-logo-light.svg";
import { cn } from "@/lib/utils";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	useLockBodyScroll(isMenuOpen);

	useKeyPressEvent("Escape", () => setIsMenuOpen(false));

	const pathname = usePathname();
	const isHomePage = pathname === "/";
	const { y } = useWindowScroll();
	const isTopHomePage = isHomePage && y < 100;

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
				<div className="flex items-center gap-3">
					<button
						type="button"
						aria-label="Open cart"
						className="font-medium text-xs hover:text-slate-300 md:hidden"
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
						"text-xs uppercase [&>ul>li>a]:hover:text-slate-300",
					)}
				>
					<ul className="flex items-center gap-5 lg:gap-6">
						<li>
							<Link href="/shop">Shop</Link>
						</li>
						<li>
							<Link href="/group-order">Group Order</Link>
						</li>
						<li>
							<Link href="/faq">FAQ</Link>
						</li>
					</ul>
					<span>•</span>
					<ul className="flex items-center gap-5 lg:gap-6">
						<li>
							<Link href="/cart">Cart</Link>
						</li>
						<li>
							<Link href="/auth/login">Account</Link>
						</li>
					</ul>
				</div>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="fixed z-20 inset-0 bg-gray-900/70 backdrop-blur-xs"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
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
								className="float-right hover:text-slate-300"
								onClick={() => setIsMenuOpen(false)}
							>
								<XIcon size={32} />
							</button>

							<ul
								className={cn(
									"h-full flex flex-col items-center justify-center gap-6",
									"text-3xl [&>li>a]:hover:text-slate-400 [&>li>button]:hover:text-slate-400 sm:text-4xl",
								)}
							>
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
									<button type="button">CART</button>
								</li>
								<li>
									<Link href="/auth/login">ACCOUNT</Link>
								</li>
							</ul>
						</motion.aside>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
