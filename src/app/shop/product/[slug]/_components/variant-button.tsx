import { cn } from "@/lib/utils";

export const VariantButton = () => {
	return (
		<button
			type="button"
			aria-label="18cm variant"
			className={cn(
				"flex flex-col gap-1 items-center justify-center",
				"w-full h-20 border border-[#333]/60 border-dashed hover:bg-army-green/5",
			)}
		>
			<span className="font-rozha-one text-[32px]/6 text-philippine-brown">
				18
			</span>
			<span className="font-medium text-sm text-raisin-black">cm</span>
		</button>
	);
};
