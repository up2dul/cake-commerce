"use client";

import { MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const QuantityChanger = () => {
	return (
		<div
			className={cn(
				"sticky bottom-0 h-25 w-full py-6 px-4",
				"flex items-center justify-between gap-2 md:gap-4",
				"bg-white border border-raisin-black border-b-0",
			)}
		>
			<div>
				<span className="font-medium text-xs md:text-sm">QUANTITY</span>
				<div className="mt-3 flex items-center gap-4 md:gap-6">
					<button type="button" className="hover:text-army-green/80">
						<MinusCircleIcon size={24} weight="thin" className="md:size-8" />
					</button>
					<span className="font-rozha-one text-xl md:text-2xl">1</span>
					<button type="button" className="hover:text-army-green/80">
						<PlusCircleIcon size={24} weight="thin" className="md:size-8" />
					</button>
				</div>
			</div>

			<Button size="lg">ADD TO CART</Button>
		</div>
	);
};
