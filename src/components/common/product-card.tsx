import Image from "next/image";
import Link from "next/link";

export const ProductCard = () => {
	return (
		<Link href="/shop" className="group block size-full">
			<div className="relative aspect-square overflow-hidden w-full">
				<Image
					src="https://cdn.shopify.com/s/files/1/0745/6371/5346/files/RedVelvetPie.jpg?v=1766363474"
					alt="Red Velvet Cake"
					className="object-cover group-hover:scale-110 transition-transform"
					fill
				/>
			</div>
			<div className="mt-4 flex items-start justify-between gap-1 group-hover:opacity-80">
				<span className="font-semibold text-sm text-raisin-black lg:text-base">
					RED VELVET CAKE
				</span>
				<span className="font-rozha-one text-philippine-brown lg:text-xl">
					900
				</span>
			</div>
		</Link>
	);
};
