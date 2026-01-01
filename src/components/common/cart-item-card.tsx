import Image from "next/image";

export const CartItemCard = () => {
	return (
		<article className="flex items-start gap-4">
			<div className="aspect-square overflow-hidden size-20 relative">
				<Image
					src="https://cdn.shopify.com/s/files/1/0745/6371/5346/files/REDVELVETCHRISTMASEDITION.jpg?v=1766363479"
					alt="Product Image"
					className="object-cover w-full h-full"
					fill
				/>
			</div>

			<div className="flex-1">
				<div className="flex items-center justify-between gap-2">
					<h2 className="font-semibold text-sm">
						RED VELVET CHRISTMAS EDITION
					</h2>
					<p className="font-rozha-one text-philippine-brown">800</p>
				</div>
				<p className="mt-0.5 text-[#333]/70 text-xs">20cm with cake wording</p>

				<div className="mt-4 flex items-center justify-between gap-2">
					<p className="font-rozha-one">1x</p>

					<div className="flex items-center gap-3 font-semibold text-xs">
						<button type="button" className="hover:text-army-green/80">
							EDIT
						</button>
						<button type="button" className="hover:text-army-green/80">
							REMOVE
						</button>
					</div>
				</div>
			</div>
		</article>
	);
};
