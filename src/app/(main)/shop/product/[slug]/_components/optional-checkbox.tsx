"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";

export const CakeWording = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const [value, setValue] = useState("");

	return (
		<div>
			<button
				type="button"
				onClick={() => setIsEnabled(!isEnabled)}
				aria-label="Add cake wording"
				className="w-full mb-3 flex items-center justify-between group"
			>
				<div className="w-full flex flex-col items-start gap-2 group-hover:text-army-green/80">
					<span className="font-semibold text-sm md:text-base">
						ADD CAKE WORDING
					</span>
					<span className="text-xs text-raisin-black/60 md:text-sm">
						Optional • max. 50 characters
					</span>
				</div>

				<Checkbox checked={isEnabled} className="size-6" />
			</button>

			{isEnabled && (
				<Textarea
					maxLength={50}
					className="resize-none"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			)}
		</div>
	);
};

export const GreetingCard = () => {
	const [isEnabled, setIsEnabled] = useState(false);
	const [value, setValue] = useState("");

	return (
		<div>
			<button
				type="button"
				onClick={() => setIsEnabled(!isEnabled)}
				aria-label="Add greeting card"
				className="w-full mb-3 flex items-center justify-between group"
			>
				<div className="w-full flex flex-col items-start gap-2 group-hover:text-army-green/80">
					<span className="font-semibold text-sm md:text-base">
						ADD GREETING CARD
					</span>
					<span className="text-xs text-raisin-black/60 md:text-sm">
						Optional • max. 100 characters
					</span>
				</div>

				<Checkbox checked={isEnabled} className="size-6" />
			</button>

			{isEnabled && (
				<Textarea
					maxLength={100}
					className="resize-none"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			)}
		</div>
	);
};
