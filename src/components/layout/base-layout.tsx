"use client";

import { usePathname } from "next/navigation";
import BgPattern from "@/assets/bg-pattern.webp";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { cn } from "@/lib/utils";

export const BaseLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const pathname = usePathname();
	const isNotHomePage = pathname !== "/";

	return (
		<main
			className={cn(isNotHomePage && "pt-19 md:pt-18", "bg-center bg-repeat")}
			style={{
				backgroundImage: `url(${BgPattern.src})`,
			}}
		>
			<Navbar />
			{children}
			<Footer />
		</main>
	);
};
