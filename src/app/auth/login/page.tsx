import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LogoImage from "@/assets/cake-commerce-logo-dark.svg";
import { ButtonLink } from "@/components/ui/button";
import { LoginForm } from "./_components/login-form";

export const metadata: Metadata = {
	title: "Login | Cake Commerce",
	description:
		"Log in to your Cake Commerce account to access your orders and profile.",
};

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
				<p className="mt-2 text-sm text-raisin-black/70 md:text-base">
					If you already have an account, please log in to continue
				</p>

				<LoginForm />
			</section>

			<section className="mt-8 mb-10 mx-auto p-8 bg-white w-full md:mb-20 sm:w-4/5 md:w-3/5 lg:w-157">
				<h1 className="font-bold text-xl md:text-2xl">NEW CUSTOMERS</h1>
				<p className="mt-2 text-sm text-raisin-black/70 md:text-base">
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
