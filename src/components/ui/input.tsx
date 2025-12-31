"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import { EyeClosedIcon, EyeIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const baseClassName = cn(
	// Layout & Sizing
	"h-14 w-full px-1 py-4",
	// Border & Radius
	"rounded-none border-b border-gray-400",
	// Background
	"bg-transparent",
	// Transitions
	"transition-colors",
	// Focus states
	"focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-1",
	// Invalid/Error states
	"aria-invalid:ring-destructive/20 aria-invalid:border-destructive aria-invalid:ring-1",
	// Disabled states
	"disabled:bg-input/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
	// File input specific
	"file:h-6 file:text-xs file:font-medium file:text-foreground file:inline-flex file:border-0 file:bg-transparent",
	// Text and Placeholder
	"font-medium placeholder:font-medium placeholder:text-raisin-black/50 placeholder:text-base",
	// Outline
	"min-w-0 outline-none",
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	inputPrefix?: React.ReactNode | null;
	inputSuffix?: React.ReactNode | null;
};

function Input({
	className,
	type = "text",
	inputPrefix,
	inputSuffix,
	...props
}: InputProps) {
	// If no prefix or suffix, render simple input
	if (!inputPrefix && !inputSuffix) {
		return (
			<InputPrimitive
				type={type}
				data-slot="input"
				className={cn(baseClassName, className)}
				{...props}
			/>
		);
	}

	// Render input with prefix/suffix wrapper
	return (
		<div
			className={cn(
				"relative flex items-center",
				// Border & Radius
				"rounded-none border-b border-gray-400",
				// Background
				"bg-transparent",
				className,
			)}
		>
			{inputPrefix && (
				<div className="absolute left-1 bg-transparent">{inputPrefix}</div>
			)}
			<InputPrimitive
				type={type}
				data-slot="input"
				className={cn(
					baseClassName,
					"flex-1 border-0 bg-transparent",
					inputPrefix && "pl-8",
					inputSuffix && "pr-8",
				)}
				{...props}
			/>
			{inputSuffix && (
				<div className="absolute right-1 bg-transparent">{inputSuffix}</div>
			)}
		</div>
	);
}

function PasswordInput({ className, ...props }: InputProps) {
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<Input
			type={showPassword ? "text" : "password"}
			inputSuffix={
				<button
					type="button"
					onClick={togglePasswordVisibility}
					aria-label={showPassword ? "Hide password" : "Show password"}
					className="flex items-center justify-center p-1"
				>
					{showPassword ? <EyeIcon size={16} /> : <EyeClosedIcon size={16} />}
				</button>
			}
			className={className}
			{...props}
		/>
	);
}

export { Input, PasswordInput };
