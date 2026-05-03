import CTAButton from "./CTAButton";

const BULLETS = [
	{ title: "실시간 배당률", desc: "경기 흐름에 따라 즉시 갱신되는 라이브 배당" },
	{ title: "Star Points 가상 베팅", desc: "현금이 아닌 가상 포인트로 안전하게 즐기는 베팅" },
	{ title: "자동 정산", desc: "경기 종료 즉시 결과에 따라 포인트가 자동 지급" },
	{ title: "라이브 채팅", desc: "다른 팬들과 실시간으로 응원하고 의견을 나누세요" },
];

export default function LiveBettingHighlight() {
	return (
		<section
			id="live-betting"
			className="bg-gray-50 py-20 sm:py-28 border-y border-gray-200"
			aria-labelledby="live-betting-heading"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
					<div>
						<span className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700 mb-5">
							<span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
							LIVE
						</span>
						<h2
							id="live-betting-heading"
							className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
						>
							좋아하는 선수에게
							<br />
							<span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
								베팅하세요
							</span>
						</h2>
						<p className="mt-5 text-lg text-gray-700 leading-relaxed">
							PBA·LPBA 라이브 경기를 시청하면서 Star Points로 베팅하고,
							다른 팬들과 함께 경기를 즐겨보세요.
						</p>

						<ul className="mt-8 space-y-4">
							{BULLETS.map((b) => (
								<li key={b.title} className="flex gap-3">
									<span className="flex-shrink-0 mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700" aria-hidden="true">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<div>
										<h3 className="text-base font-bold text-gray-900">{b.title}</h3>
										<p className="text-sm text-gray-600">{b.desc}</p>
									</div>
								</li>
							))}
						</ul>

						<div className="mt-10">
							<CTAButton variant="primary" appPath="/live-games">라이브 경기 보기</CTAButton>
						</div>

						<p className="mt-6 text-xs text-gray-500 leading-relaxed">
							베팅은 가상 포인트(Star Points)로만 진행되며, 현금이나 환금성 자산이 아닙니다.
						</p>
					</div>

					{/* Mock live game card */}
					<div className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-8 shadow-xl shadow-sky-900/5">
						<div className="flex items-center justify-between mb-6">
							<span className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
								<span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" aria-hidden="true" />
								LIVE
							</span>
							<span className="text-xs font-semibold text-sky-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full">
								3쿠션
							</span>
						</div>

						<div className="grid grid-cols-3 items-center gap-4 mb-6">
							<div className="text-center">
								<div className="mx-auto mb-3 h-16 w-16 rounded-full bg-gradient-to-br from-red-400 to-red-700 flex items-center justify-center text-2xl font-black text-white" aria-hidden="true">
									A
								</div>
								<div className="text-sm font-bold text-gray-900">선수 A</div>
								<div className="mt-1 text-xs text-gray-500">○○○ 클럽</div>
							</div>
							<div className="text-center">
								<div className="text-4xl sm:text-5xl font-black text-gray-900 tabular-nums">
									2 <span className="text-gray-300">-</span> 1
								</div>
								<div className="mt-1 text-xs text-gray-500">5세트 경기</div>
							</div>
							<div className="text-center">
								<div className="mx-auto mb-3 h-16 w-16 rounded-full bg-gradient-to-br from-sky-400 to-sky-700 flex items-center justify-center text-2xl font-black text-white" aria-hidden="true">
									B
								</div>
								<div className="text-sm font-bold text-gray-900">선수 B</div>
								<div className="mt-1 text-xs text-gray-500">○○○ 클럽</div>
							</div>
						</div>

						<div className="grid grid-cols-2 gap-3">
							<div className="rounded-xl border border-sky-200 bg-sky-50 p-4 text-center">
								<div className="text-xs text-gray-600 mb-1">선수 A 승</div>
								<div className="text-2xl font-black text-sky-700 tabular-nums">1.85</div>
							</div>
							<div className="rounded-xl border border-gray-200 bg-gray-50 p-4 text-center">
								<div className="text-xs text-gray-600 mb-1">선수 B 승</div>
								<div className="text-2xl font-black text-gray-900 tabular-nums">2.10</div>
							</div>
						</div>

						<div className="mt-5 flex items-center justify-between text-xs text-gray-500">
							<span>참여 베팅 1,234건</span>
							<span>잔여 시간 04:21</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
