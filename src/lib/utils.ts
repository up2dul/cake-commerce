import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function format3Digit(amount: number | string) {
	let result = Number(amount);

	if (result > 1000) {
		result = result / 1000;
	}

	return result
		.toLocaleString("en-US", {
			maximumFractionDigits: 0,
			minimumFractionDigits: 0,
		})
		.replace(/,/g, ".");
}
