import type { Metadata } from "next";
import { Montserrat, Rozha_One } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
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
				className={cn(montserrat.variable, rozhaOne.variable, "antialiased")}
			>
				<Navbar />

				{children}
			</body>
		</html>
	);
}
