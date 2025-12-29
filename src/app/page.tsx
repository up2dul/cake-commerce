import HeroBannerImage from "@/assets/cake-commerce-hero-banner.webp";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<main>
			{/* Hero banner */}
			<section
				className={cn(
					"h-160 pt-19 section-px md:pt-18 md:h-172 lg:h-180",
					"relative bg-cover bg-center bg-no-repeat",
				)}
				style={{ backgroundImage: `url(${HeroBannerImage.src})` }}
			>
				{/* Shadow overlay at top */}
				<div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent" />

				{/* Shadow overlay at bottom (only on mobile) */}
				<div className="block md:hidden absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/40 to-transparent" />

				{/* Oval blur backdrop behind text (only on >= md) */}
				<div
					className="hidden md:block absolute right-20 bottom-10 w-150 h-55 bg-black/60 blur-3xl rounded-[50%]"
					style={{ transform: "translateZ(0)" }}
				/>

				<h1
					className={cn(
						"font-bold text-xl md:text-2xl lg:text-[30px]",
						"absolute bottom-10 md:right-46.5 md:bottom-20 lg:bottom-26",
						"max-w-75 md:max-w-96 lg:max-w-103.25",
					)}
				>
					HANDCRAFTED DELIGHTS FOR EVERY OCCASION. MADE FRESH DAILY.
				</h1>
			</section>
		</main>
	);
}
