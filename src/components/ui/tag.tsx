import { cn } from "@/lib/utils";

type TagProps = {
	children: React.ReactNode;
	className?: string;
};
export const Tag = ({ children, className }: TagProps) => {
	return (
		<div
			className={cn(
				"relative inline-flex py-1.5 px-2 bg-army-green",
				className,
			)}
		>
			<span className="z-1 relative font-bold text-xs text-white uppercase">
				{children}
			</span>
			<div className="absolute w-4 top-0 bottom-0 right-0 bg-army-green -skew-x-26" />
			<div className="absolute w-4 top-0 bottom-0 right-0 bg-army-green skew-x-26" />
		</div>
	);
};

export const ProductCardTag = ({ children, className }: TagProps) => {
	return (
		<div className={cn("relative ", className)}>
			<div className="relative z-1 inline-flex py-1.5 px-2 bg-army-green">
				<span className="z-1 relative font-medium text-[10px] text-white uppercase md:text-xs">
					{children}
				</span>
				<div className="absolute w-4 top-0 bottom-0 left-0 bg-army-green -skew-x-26" />
				<div className="absolute w-4 top-0 bottom-0 left-0 bg-army-green skew-x-26" />
			</div>

			<div className="z-0 absolute w-2 h-2/5 -bottom-1 right-0 bg-raisin-black -skew-y-36" />
		</div>
	);
};
