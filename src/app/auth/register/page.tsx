import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/cake-commerce-logo-dark.svg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input, PasswordInput } from "@/components/ui/input";

export default function Register() {
	return (
		<>
			<section className="py-3 flex items-center justify-center">
				<Link href="/" aria-label="Cake Commerce Home">
					<Image src={LogoImage} alt="Cake Commerce Logo" />
				</Link>
			</section>

			<section className="mt-8 mb-10 mx-auto p-8 bg-white text-raisin-black w-full md:mb-22.5 sm:w-4/5 md:w-3/5 lg:w-157">
				<h1 className="font-bold text-xl md:text-2xl">NEW CUSTOMERS</h1>
				<p className="mt-2 text-sm text-raisin-black/70 md:text-base">
					Create an account for seamless checkout experience & access to your
					order history
				</p>

				<form className="mt-8">
					<div className="mb-8 grid grid-cols-2 gap-y-6 gap-x-4">
						<Field className="col-span-2">
							<FieldLabel htmlFor="email">EMAIL</FieldLabel>
							<Input
								id="email"
								autoComplete="email"
								placeholder="Enter email"
							/>
						</Field>

						<Field className="col-span-2">
							<FieldLabel htmlFor="password">CREATE PASSWORD</FieldLabel>
							<PasswordInput
								id="password"
								autoComplete="new-password"
								placeholder="Enter password"
							/>
							<FieldDescription>
								<p>Password must contain:</p>
								<ul className="list-disc list-inside">
									<li>8 characters</li>
									<li>Upper and lower case</li>
									<li>Number</li>
								</ul>
							</FieldDescription>
						</Field>

						<Field className="col-span-2 md:col-span-1">
							<FieldLabel htmlFor="firstName">FIRST NAME</FieldLabel>
							<Input
								id="firstName"
								autoComplete="off"
								placeholder="Enter first name"
							/>
						</Field>

						<Field className="col-span-2 md:col-span-1">
							<FieldLabel htmlFor="lastName">LAST NAME</FieldLabel>
							<Input
								id="lastName"
								autoComplete="off"
								placeholder="Enter last name"
							/>
						</Field>

						<Field className="col-span-2" orientation="horizontal">
							<Checkbox id="subscribe" />
							<FieldLabel htmlFor="subscribe">
								Send me latest info & promotions about Union Bakery
							</FieldLabel>
						</Field>
					</div>

					<div>
						<Button type="submit" size="lg" className="w-full">
							REGISTER
						</Button>
						<p className="mt-6 text-center text-sm">
							By signing up, you agree to our{" "}
							<Link
								href="/terms-of-service"
								className="font-bold text-army-green hover:text-army-green/80"
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								href="/privacy-policy"
								className="font-bold text-army-green hover:text-army-green/80"
							>
								Privacy Policy
							</Link>
						</p>
					</div>
				</form>
			</section>
		</>
	);
}
