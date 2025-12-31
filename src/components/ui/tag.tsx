type TagProps = {
	children: React.ReactNode;
};
export const Tag = ({ children }: TagProps) => {
	return (
		<div className="relative inline-flex py-1.5 px-2 bg-army-green">
			<span className="z-1 relative font-bold text-xs text-white uppercase">
				{children}
			</span>
			<div className="absolute w-4 top-0 bottom-0 right-0 bg-army-green -skew-x-26" />
			<div className="absolute w-4 top-0 bottom-0 right-0 bg-army-green skew-x-26" />
		</div>
	);
};
