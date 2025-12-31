import Link from "next/link";
import { cn } from "@/lib/utils";

export const Footer = () => {
	return (
		<footer className="bg-raisin-black text-white text-sm">
			<ul className="section-px py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<li>
					<span className="text-xs text-white/60">UNION BAKERY</span>
					<ul
						className={cn(
							"mt-4 flex flex-col gap-2",
							"[&>li>a]:font-bold [&>li>a]:hover:text-slate-300",
						)}
					>
						<li>
							<Link href="/shop">SHOP</Link>
						</li>
						<li>
							<Link href="/group-order">GROUP ORDER</Link>
						</li>
						<li>
							<Link href="/faq">FAQ</Link>
						</li>
					</ul>
				</li>

				<li>
					<span className="text-xs text-white/60">GET IN TOUCH</span>
					<ul
						className={cn(
							"mt-4 flex flex-col gap-2",
							"[&>li>a]:font-bold [&>li>a]:hover:text-slate-300",
						)}
					>
						<li>
							WA.
							<Link href="#"> (+62)882 1157 3980</Link>
						</li>
						<li>
							E.
							<Link href="/group-order"> BAKERY@UNIONJKT.COM</Link>
						</li>
					</ul>
				</li>

				<li>
					<span className="text-xs text-white/60">CONNECT WITH US</span>
					<ul
						className={cn(
							"mt-4 flex flex-col gap-2",
							"[&>li>a]:font-bold [&>li>a]:hover:text-slate-300",
						)}
					>
						<li>
							<Link href="#">@UNIONJKT</Link>
						</li>
						<li>
							<Link href="/group-order">@UNION.SBY</Link>
						</li>
						<li>
							<Link href="/group-order">WhatsApp</Link>
						</li>
					</ul>
				</li>

				<li>
					<span className="text-xs text-white/60">LINKS</span>
					<ul
						className={cn(
							"mt-4 flex flex-col gap-2",
							"[&>li>a]:font-bold [&>li>a]:hover:text-slate-300",
						)}
					>
						<li>
							<Link href="#">TERMS OF SERVICE</Link>
						</li>
						<li>
							<Link href="/group-order">PRIVACY POLICY</Link>
						</li>
					</ul>
				</li>
			</ul>

			<div className="section-px py-4 border-t border-white/20 font-medium text-xs text-white/70">
				<span>© 2024 The Union Group. All rights reserved.</span>
			</div>
		</footer>
	);
};
