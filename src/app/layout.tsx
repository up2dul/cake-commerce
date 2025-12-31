import type { Metadata } from "next";
import { EB_Garamond, Montserrat, Rozha_One } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import BgPattern from "@/assets/bg-pattern.webp";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	display: "swap",
});
const rozhaOne = Rozha_One({
	variable: "--font-rozha-one",
	weight: "400",
	subsets: ["latin"],
	display: "swap",
});
const ebGaramond = EB_Garamond({
	variable: "--font-eb-garamond",
	subsets: ["latin"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Cake Commerce",
	description:
		"Discover delicious cakes for every occasion. Browse our curated selection of artisan cakes, custom designs, and sweet treats. Order online for delivery or pickup with fast, secure checkout.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					montserrat.variable,
					rozhaOne.variable,
					ebGaramond.variable,
					"antialiased",
				)}
				style={{
					backgroundImage: `url(${BgPattern.src})`,
					backgroundPosition: "center",
					backgroundRepeat: "repeat",
				}}
			>
				<ReactLenis root />
				{children}
			</body>
		</html>
	);
}
