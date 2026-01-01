"use client";

import { useActionState } from "react";
import { type RegisterFormState, registerUser } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input, PasswordInput } from "@/components/ui/input";

const initialState: RegisterFormState = {};

export function RegisterForm() {
	const [state, formAction, pending] = useActionState(
		registerUser,
		initialState,
	);

	return (
		<form action={formAction} className="mt-8">
			<div className="mb-8 grid grid-cols-2 gap-y-6 gap-x-4">
				<Field className="col-span-2">
					<FieldLabel htmlFor="email">EMAIL</FieldLabel>
					<Input
						id="email"
						name="email"
						type="email"
						autoComplete="email"
						placeholder="Enter email"
						defaultValue={state.values?.email || ""}
						required
						disabled={pending}
					/>
					{state.errors?.email && (
						<p className="mt-1 text-sm text-red-600" role="alert">
							{state.errors.email[0]}
						</p>
					)}
				</Field>

				<Field className="col-span-2">
					<FieldLabel htmlFor="password">CREATE PASSWORD</FieldLabel>
					<PasswordInput
						id="password"
						name="password"
						autoComplete="new-password"
						placeholder="Enter password"
						minLength={8}
						required
						disabled={pending}
					/>
					{state.errors?.password ? (
						<p className="mt-1 text-sm text-red-600" role="alert">
							{state.errors.password[0]}
						</p>
					) : (
						<FieldDescription>
							<p>Password must contain:</p>
							<ul className="list-disc list-inside">
								<li>8 characters</li>
								<li>Upper and lower case</li>
								<li>Number</li>
							</ul>
						</FieldDescription>
					)}
				</Field>

				<Field className="col-span-2 md:col-span-1">
					<FieldLabel htmlFor="firstName">FIRST NAME</FieldLabel>
					<Input
						id="firstName"
						name="firstName"
						autoComplete="given-name"
						placeholder="Enter first name"
						defaultValue={state.values?.firstName || ""}
						required
						disabled={pending}
					/>
					{state.errors?.firstName && (
						<p className="mt-1 text-sm text-red-600" role="alert">
							{state.errors.firstName[0]}
						</p>
					)}
				</Field>

				<Field className="col-span-2 md:col-span-1">
					<FieldLabel htmlFor="lastName">LAST NAME</FieldLabel>
					<Input
						id="lastName"
						name="lastName"
						autoComplete="family-name"
						placeholder="Enter last name"
						defaultValue={state.values?.lastName || ""}
						required
						disabled={pending}
					/>
					{state.errors?.lastName && (
						<p className="mt-1 text-sm text-red-600" role="alert">
							{state.errors.lastName[0]}
						</p>
					)}
				</Field>

				<Field className="col-span-2 gap-2" orientation="horizontal">
					<Checkbox id="subscribe" name="subscribe" disabled={pending} />
					<FieldLabel htmlFor="subscribe">
						Send me latest info & promotions about Union Bakery
					</FieldLabel>
				</Field>
			</div>

			{state.message && (
				<div className="mb-6 p-3 bg-red-50 border border-red-200" role="alert">
					<p className="text-sm text-destructive">{state.message}</p>
				</div>
			)}

			<div>
				<Button type="submit" size="lg" className="w-full" disabled={pending}>
					{pending ? "REGISTERING..." : "REGISTER"}
				</Button>
				<p className="mt-6 text-center text-sm text-balance">
					By signing up, you agree to our{" "}
					<a
						href="/terms-of-service"
						className="font-bold text-army-green hover:text-army-green/80"
					>
						Terms of Service
					</a>{" "}
					and{" "}
					<a
						href="/privacy-policy"
						className="font-bold text-army-green hover:text-army-green/80"
					>
						Privacy Policy
					</a>
				</p>
			</div>
		</form>
	);
}
