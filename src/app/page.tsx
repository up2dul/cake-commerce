import Image from "next/image";
import Link from "next/link";
import HeroBannerImage from "@/assets/cake-commerce-hero-banner.webp";
import { cn } from "@/lib/utils";

export default function Home() {
	return (
		<main>
			{/* Hero banner */}
			<section
				className={cn(
					"h-160 pt-19 section-px md:pt-18 md:h-172 lg:h-180",
					"relative text-white bg-cover bg-center bg-no-repeat",
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

			{/* Products */}
			<section className="section-px py-10 uppercase md:py-20">
				<div className="flex items-center justify-between">
					<h1 className="font-bold text-[22px] md:text-[30px]">
						OUR SIGNATURE CAKES
					</h1>

					<Link
						href="/shop"
						className="hidden font-bold text-sm text-army-green hover:text-slate-500 md:block"
					>
						SHOP NOW
					</Link>
				</div>

				<ul
					className={cn(
						"mt-6 overflow-x-auto pb-2",
						"flex gap-4 lg:gap-6",
						"md:grid grid-cols-3",
					)}
				>
					<li>
						<Link href="/shop" className="group block">
							<div className="relative aspect-square overflow-hidden size-70 md:size-auto">
								<Image
									src="https://cdn.shopify.com/s/files/1/0745/6371/5346/files/RedVelvetPie.jpg?v=1766363474"
									alt="Red Velvet Cake"
									className="object-cover group-hover:scale-110 transition-transform"
									fill
								/>
							</div>
							<div className="mt-4 flex items-center justify-between gap-1">
								<span className="font-semibold text-sm text-raisin-black lg:text-base">
									RED VELVET CAKE
								</span>
								<span className="font-rozha-one text-philippine-brown lg:text-xl">
									900
								</span>
							</div>
						</Link>
					</li>
					<li>
						<Link href="/shop" className="group block">
							<div className="relative aspect-square overflow-hidden size-70 md:size-auto">
								<Image
									src="https://cdn.shopify.com/s/files/1/0745/6371/5346/files/RedVelvetPie.jpg?v=1766363474"
									alt="Red Velvet Cake"
									className="object-cover group-hover:scale-110 transition-transform"
									fill
								/>
							</div>
							<div className="mt-4 flex items-center justify-between gap-1">
								<span className="font-semibold text-sm text-raisin-black lg:text-base">
									RED VELVET CHRISTMAS EDITION
								</span>
								<span className="font-rozha-one text-philippine-brown lg:text-xl">
									850
								</span>
							</div>
						</Link>
					</li>
					<li>
						<Link href="/shop" className="group block">
							<div className="relative aspect-square overflow-hidden size-70 md:size-auto">
								<Image
									src="https://cdn.shopify.com/s/files/1/0745/6371/5346/files/RedVelvetPie.jpg?v=1766363474"
									alt="Red Velvet Cake"
									className="object-cover group-hover:scale-110 transition-transform"
									fill
								/>
							</div>
							<div className="mt-4 flex items-center justify-between gap-1">
								<span className="font-semibold text-sm text-raisin-black lg:text-base">
									CHOCOLATE CRUNCH CAKE
								</span>
								<span className="font-rozha-one text-philippine-brown lg:text-xl">
									720
								</span>
							</div>
						</Link>
					</li>
				</ul>
			</section>

			{/* Highlight */}

			{/* Group order */}
		</main>
	);
}
