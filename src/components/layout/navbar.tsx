"use client";

import { ListIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoImage from "@/assets/cake-commerce-logo-light.svg";
import { cn } from "@/lib/utils";

export const Navbar = () => {
	const pathname = usePathname();
	const isHome = pathname === "/";

	return (
		<nav
			className={cn(
				"flex items-center justify-between",
				"py-3.5 px-4 md:py-3 md:px-8 lg:px-10",
				"fixed top-0 inset-x-0 z-30 w-full",
				isHome ? "bg-transparent" : "bg-[#3F4B1F]",
			)}
		>
			<Link href="/" aria-label="Cake Commerce Home">
				<Image src={LogoImage} alt="Cake Commerce Logo" />
			</Link>

			{/* Mobile menu */}
			<button
				type="button"
				className="flex items-center gap-3 font-medium text-xs md:hidden"
			>
				CART
				<ListIcon size={24} />
			</button>

			{/* Desktop menu */}
			<div
				className={cn(
					"hidden items-center gap-5 font-bold lg:gap-6 md:flex",
					"text-xs uppercase [&>ul>li>a]:hover:text-slate-300 transition-colors",
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
						<Link href="/account">Account</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};
