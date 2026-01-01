"use client";

import { usePathname } from "next/navigation";
import { CartDrawer } from "@/components/common/cart-drawer";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathname = usePathname();
	const isNotHomePage = pathname !== "/";

	return (
		<main className={cn(isNotHomePage && "pt-19 md:pt-18")}>
			<Navbar />
			<CartDrawer />
			{children}
			<Footer />
		</main>
	);
}
