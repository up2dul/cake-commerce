import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/cake-commerce-logo-dark.svg";
import GroupOrderSectionImage from "@/assets/home_group-order.webp";
import HeroBannerImage from "@/assets/home_hero-banner.webp";
import HighlightSectionImage from "@/assets/home_highlight.webp";
import { Button } from "@/components/ui/button";
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
			<section
				className={cn(
					"section-px py-10 uppercase md:py-20",
					"relative text-white bg-cover bg-center bg-no-repeat",
				)}
			>
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
			<section
				className={cn(
					"section-px w-full h-120 md:h-140 lg:h-165",
					"relative text-white bg-cover bg-bottom bg-repeat-y",
					"flex flex-col justify-end pb-6 md:pb-8 lg:pb-12",
				)}
				style={{ backgroundImage: `url(${HighlightSectionImage.src})` }}
			>
				<div className="relative z-1">
					<h1 className="font-bold text-xl md:text-2xl">
						UNION MADE IS WELL MADE
					</h1>
					<p className="font-medium text-sm mt-1.5 md:mt-2">
						Our cakes are crafted with premium ingredients to guarantee quality
						in every bite
					</p>
				</div>

				{/* Shadow overlay at bottom (only on mobile) */}
				<div className="block lg:hidden absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/60 to-transparent" />
			</section>

			{/* Group order */}
			<section className="section-px pt-10 pb-12 flex flex-col items-center justify-between gap-y-8 gap-x-4 md:flex-row">
				<div className="flex flex-col gap-4 shrink-0 md:w-2/5 lg:w-109.5">
					<Image src={LogoImage} alt="Cake Commerce Logo" />
					<h1 className="font-bold text-xl md:text-[30px]">GROUP ORDER</h1>
					<p>
						Whether you're treating clients or celebrating a company milestone,
						our cakes are sure to impress. We offer a variety of sizes to suit
						any occasion.
					</p>
					<Button className="mt-2 self-start">DISCOVER MORE</Button>
				</div>

				<div className="h-65.5 relative w-full bg-cover bg-center bg-no-repeat md:w-167 md:h-133.5">
					<Image
						src={GroupOrderSectionImage.src}
						alt="Group Order Cake"
						className="object-cover size-full"
						fill
					/>
				</div>
			</section>
		</main>
	);
}
