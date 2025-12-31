import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/cake-commerce-logo-dark.svg";
import { Button, ButtonLink } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input, PasswordInput } from "@/components/ui/input";

export default function Login() {
	return (
		<>
			<section className="py-3 flex items-center justify-center">
				<Link href="/" aria-label="Cake Commerce Home">
					<Image src={LogoImage} alt="Cake Commerce Logo" />
				</Link>
			</section>

			<section className="mt-8 mx-auto p-8 bg-white text-raisin-black w-full sm:w-4/5 md:w-3/5 lg:w-157">
				<h1 className="font-bold text-xl md:text-2xl">RETURNING CUSTOMER</h1>
				<p className="mt-2 text-sm md:text-base">
					If you already have an account, please log in to continue
				</p>

				<form className="mt-8">
					<Field>
						<FieldLabel htmlFor="email">EMAIL</FieldLabel>
						<Input id="email" autoComplete="off" placeholder="Enter email" />
					</Field>

					<Field className="mt-6">
						<FieldLabel htmlFor="password">PASSWORD</FieldLabel>
						<PasswordInput
							id="password"
							autoComplete="off"
							placeholder="Enter password"
						/>
					</Field>

					<Link
						href="/auth/forgot-password"
						className="mt-4 float-right font-bold text-sm text-army-green hover:text-army-green/80"
					>
						FORGOT PASSWORD
					</Link>

					<Button type="submit" size="lg" className="mt-8 w-full">
						LOGIN
					</Button>
				</form>
			</section>

			<section className="mt-8 mb-10 mx-auto p-8 bg-white w-full md:mb-20 sm:w-4/5 md:w-3/5 lg:w-157">
				<h1 className="font-bold text-xl md:text-2xl">NEW CUSTOMERS</h1>
				<p className="mt-2 text-sm md:text-base">
					Create an account for seamless checkout experience & access to your
					order history
				</p>

				<ButtonLink href="/auth/register" size="lg" className="mt-8 w-full">
					REGISTER
				</ButtonLink>
			</section>
		</>
	);
}
