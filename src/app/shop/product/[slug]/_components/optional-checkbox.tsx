export const CakeWording = () => {
	return (
		<button
			type="button"
			aria-label="Add cake wording"
			className="w-full flex flex-col items-start gap-2 text-raisin-black hover:text-army-green/80"
		>
			<span className="font-semibold text-sm md:text-base">
				ADD CAKE WORDING
			</span>
			<span className="text-xs md:text-sm">Optional • max. 50 characters</span>
		</button>
	);
};

export const GreetingCard = () => {
	return (
		<button
			type="button"
			aria-label="Add greeting card"
			className="w-full flex flex-col items-start gap-2 text-raisin-black hover:text-army-green/80"
		>
			<span className="font-semibold text-sm md:text-base">
				ADD GREETING CARD
			</span>
			<span className="text-xs md:text-sm">Optional • max. 100 characters</span>
		</button>
	);
};
