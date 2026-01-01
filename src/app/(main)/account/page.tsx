import type { Metadata } from "next";
import { getCustomer } from "@/lib/data/customer";

export const metadata: Metadata = {
	title: "Account | Cake Commerce",
	description: "View your account information.",
};

export default async function AccountPage() {
	const customer = await getCustomer();

	if (!customer) {
		return (
			<div className="min-h-[60svh] section-px py-4 max-w-2xl mx-auto">
				<h1 className="text-2xl font-bold mb-4 md:text-3xl">Account</h1>
				<div className="p-4 bg-red-50 border border-red-200" role="alert">
					<p className="text-destructive">
						Failed to load account information. Please try again later.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-[60svh] section-px py-4 max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold mb-8 md:text-3xl">ACCOUNT</h1>

			<section className="border border-gray-200 rounded p-6">
				<h2 className="text-xl font-bold mb-4">PERSONAL INFORMATION</h2>
				<div className="space-y-3">
					<div>
						<p className="text-sm text-gray-600">Name</p>
						<p className="text-lg font-medium">
							{customer.firstName} {customer.lastName}
						</p>
					</div>
					<div>
						<p className="text-sm text-gray-600">Email</p>
						<p className="text-lg font-medium">{customer.email}</p>
					</div>
					<div>
						<p className="text-sm text-gray-600">Display Name</p>
						<p className="text-lg font-medium">{customer.displayName}</p>
					</div>
				</div>
			</section>

			<section className="mt-6 border border-gray-200 rounded p-6">
				<h2 className="text-xl font-bold mb-4">ACCOUNT ID</h2>
				<div className="p-3 bg-gray-50 rounded font-mono text-sm break-all">
					{customer.id}
				</div>
			</section>
		</div>
	);
}
