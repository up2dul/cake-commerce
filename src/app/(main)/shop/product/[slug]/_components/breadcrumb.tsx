import Link from "next/link";

export const Breadcrumb = ({ title }: { title: string }) => {
	return (
		<nav className="section-px hidden w-full py-3 bg-darker-green md:block">
			<ul className="flex items-center gap-4.5 uppercase font-bold text-xs text-white [&>li>a]:hover:text-slate-300">
				<li>
					<Link href="/">HOME</Link>
				</li>
				<li>•</li>
				<li>
					<Link href="/shop">SHOP</Link>
				</li>
				<li>•</li>
				<li>{title}</li>
			</ul>
		</nav>
	);
};
