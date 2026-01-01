"use client";

import Link from "next/link";
import { useActionState } from "react";
import { type LoginFormState, loginUser } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input, PasswordInput } from "@/components/ui/input";

const initialState: LoginFormState = {};

export function LoginForm() {
	const [state, formAction, pending] = useActionState(loginUser, initialState);

	return (
		<form action={formAction} className="mt-8">
			<Field>
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

			<Field className="mt-6">
				<FieldLabel htmlFor="password">PASSWORD</FieldLabel>
				<PasswordInput
					id="password"
					name="password"
					autoComplete="current-password"
					placeholder="Enter password"
					required
					disabled={pending}
				/>
				{state.errors?.password && (
					<p className="mt-1 text-sm text-red-600" role="alert">
						{state.errors.password[0]}
					</p>
				)}
			</Field>

			{state.message && (
				<div className="mt-4 p-3 bg-red-50 border border-red-200" role="alert">
					<p className="text-sm text-destructive">{state.message}</p>
				</div>
			)}

			<Link
				href="/auth/forgot-password"
				className="mt-4 float-right font-bold text-sm text-army-green hover:text-army-green/80"
			>
				FORGOT PASSWORD
			</Link>

			<Button
				type="submit"
				size="lg"
				className="mt-8 w-full"
				disabled={pending}
			>
				{pending ? "LOGGING IN..." : "LOGIN"}
			</Button>
		</form>
	);
}
