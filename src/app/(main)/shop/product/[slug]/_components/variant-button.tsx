import type { ProductVariant } from "@/lib/types/product";
import { cn } from "@/lib/utils";

type VariantButtonProps = {
	variant: ProductVariant;
	isSelected?: boolean;
};
export const VariantButton = ({
	variant,
	isSelected = false,
}: VariantButtonProps) => {
	return (
		<button
			type="button"
			aria-label={`Select ${variant.title} variant`}
			disabled={!variant.availableForSale}
			className={cn(
				"group flex flex-col gap-1 items-center justify-center",
				"w-full h-20 border border-[#333]/60 border-dashed disabled:cursor-not-allowed enabled:hover:bg-army-green/5",
				isSelected && "border-2 border-army-green border-solid",
			)}
		>
			<span className="font-rozha-one text-[32px]/6 text-philippine-brown group-disabled:text-philippine-brown/70">
				{variant.title}
			</span>
			<span className="font-medium text-sm text-raisin-black">cm</span>
		</button>
	);
};
