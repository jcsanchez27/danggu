import CTAButton from "./CTAButton";
import { APP_URL, NAV_LINKS, SITE_NAME } from "@/constants";

export default function Navbar() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-200">
			{/* Top row */}
			<nav
				className="mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8 h-16"
				aria-label="주요 내비게이션"
			>
				{/* Mobile: centered logo with CTA on right */}
				<div className="md:hidden flex items-center justify-between w-full relative">
					<span className="w-24" aria-hidden="true" />
					<a
						href="#top"
						className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group"
						aria-label={`${SITE_NAME} 홈`}
					>
						<img
							src="/favicon.ico"
							alt=""
							aria-hidden="true"
							width={28}
							height={28}
							className="h-7 w-7 rounded-full shadow-sm"
						/>
						<span className="text-lg font-black tracking-tight text-gray-900">
							Danggu <span className="text-sky-600">IN</span>
						</span>
					</a>
					<a
						href={APP_URL}
						target="_self"
						rel="noopener"
						className="rounded-lg bg-gradient-to-r from-sky-500 to-sky-700 px-3 py-2 text-xs font-bold text-white shadow-sm shadow-sky-600/25"
					>
						지금 시작하기
					</a>
				</div>

				{/* Desktop */}
				<div className="hidden md:flex items-center justify-between w-full">
					<a
						href="#top"
						className="flex items-center gap-2 group"
						aria-label={`${SITE_NAME} 홈`}
					>
						<img
							src="/favicon.ico"
							alt=""
							aria-hidden="true"
							width={28}
							height={28}
							className="h-7 w-7 rounded-full shadow-sm group-hover:scale-110 transition-transform"
						/>
						<span className="text-xl font-black tracking-tight text-gray-900">
							Danggu <span className="text-sky-600">IN</span>
						</span>
					</a>

					<ul className="flex items-center gap-1">
						{NAV_LINKS.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:text-sky-700 hover:bg-sky-50 transition-colors"
								>
									{link.label}
								</a>
							</li>
						))}
					</ul>

					<CTAButton variant="primary" className="!px-5 !py-2 !text-sm">
						지금 시작하기
					</CTAButton>
				</div>
			</nav>

			{/* Mobile sub-navbar */}
			<nav
				className="md:hidden border-t border-gray-200 bg-white/90"
				aria-label="모바일 섹션 내비게이션"
			>
				<ul className="mx-auto flex max-w-7xl items-center justify-between px-2 h-12">
					{NAV_LINKS.map((link) => (
						<li key={link.href} className="flex-1">
							<a
								href={link.href}
								className="block text-center rounded-lg px-2 py-2 text-xs font-semibold text-gray-700 hover:text-sky-700 hover:bg-sky-50 transition-colors whitespace-nowrap"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
