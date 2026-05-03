import { APP_URL, SITE_NAME, SITE_TAGLINE } from "@/constants";

export default function Footer() {
	return (
		<footer className="bg-white border-t border-gray-200">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 gap-8">
					<div>
						<div className="flex items-center gap-2">
							<span aria-hidden="true" className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-sky-500 to-sky-700" />
							<span className="text-xl font-black text-gray-900">
								Danggu <span className="text-sky-600">IN</span>
							</span>
						</div>
						<p className="mt-3 text-sm text-gray-600">{SITE_TAGLINE}</p>
						<p className="mt-4 text-sm text-gray-700">
							앱 바로가기:{" "}
							<a
								href={APP_URL}
								target="_self"
								rel="noopener"
								className="text-sky-700 hover:text-sky-800 font-medium underline underline-offset-2"
							>
								app.dangguin.com
							</a>
						</p>
					</div>
				</div>

				<div className="mt-10 pt-8 border-t border-gray-200">
					<p className="text-xs text-gray-600 leading-relaxed">
						본 서비스의 베팅은 가상 포인트(Star Points)로 진행되며, 실제 금전 거래가 아닙니다.
					</p>
					<p className="mt-3 text-xs text-gray-500">
						© 2026 {SITE_NAME}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
