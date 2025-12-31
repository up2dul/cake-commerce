import { Footer } from "@/components/layout/footer";

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			{children}
			<Footer />
		</main>
	);
}
