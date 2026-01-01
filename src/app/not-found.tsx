import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
	title: "Page Not Found | Cake Commerce",
	description:
		"The page you are looking for does not exist. Browse our shop or return to home.",
};

export default function NotFound() {
	return (
		<main className="flex items-center justify-center min-h-svh px-4 sm:px-6 lg:px-8">
			<article className="text-center max-w-2xl w-full space-y-8">
				{/* Error Code Section */}
				<section aria-labelledby="error-code" className="relative mb-8">
					<h1
						id="error-code"
						className="text-9xl md:text-[140px] font-bold text-rose-200/60"
					>
						404
					</h1>
					<p className="font-rozha-one text-3xl md:text-5xl text-army-green absolute inset-0 flex items-center justify-center">
						OOPS!
					</p>
				</section>

				{/* Error Message Section */}
				<section aria-labelledby="error-title" className="space-y-3">
					<h2 id="error-title" className="text-2xl md:text-3xl font-bold">
						Page Not Found
					</h2>
					<p className="md:text-lg text-gray-600 text-balance">
						We couldn't find the delicious cake you're looking for. It seems
						like this page has been eaten or moved to a different shelf!
					</p>
				</section>

				{/* Call to Action Section */}
				<section className="space-y-4">
					<p className="text-sm text-gray-500">
						Let's get you back on track and find something sweet!
					</p>
					<ButtonLink href="/" size="lg">
						RETURN TO HOME
					</ButtonLink>
				</section>

				{/* Navigation Footer */}
				<nav
					aria-label="Additional navigation"
					className="mt-12 pt-8 border-t border-rose-200"
				>
					<p className="text-xs text-gray-500 mb-4">
						Or explore another thing:
					</p>
					<ul className="flex flex-col sm:flex-row gap-4 justify-center list-none p-0 m-0">
						<li>
							<Link
								href="/shop"
								className="text-army-green font-bold hover:text-army-green/80 px-2 py-1 text-sm"
							>
								BROWSE SHOP
							</Link>
						</li>
						<li className="hidden sm:block text-gray-400" aria-hidden="true">
							•
						</li>
						<li>
							<Link
								href="/account"
								className="text-army-green font-bold hover:text-army-green/80 px-2 py-1 text-sm"
							>
								MY ACCOUNT
							</Link>
						</li>
					</ul>
				</nav>
			</article>
		</main>
	);
}
