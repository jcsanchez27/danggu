import CTAButton from "./CTAButton";

/**
 * Beta status / "왜 지금 가입해야 하는가" section.
 *
 * Replaces the old fabricated usage-stats strip. We are still in beta, so
 * showing made-up totals would be dishonest. Instead we communicate the
 * actual value of joining now: founding-member perks while the platform
 * is being built.
 */
const BETA_HIGHLIGHTS = [
	{
		icon: "🚀",
		title: "베타 진행 중",
		description:
			"지금은 비공개 베타 단계입니다. 핵심 기능을 함께 다듬어 줄 초기 사용자를 모집합니다.",
	},
	{
		icon: "🎖️",
		title: "초기 회원 혜택",
		description:
			"베타 기간 가입 시 정식 출시 후에도 유지되는 전용 배지와 추가 Star Points를 지급합니다.",
	},
	{
		icon: "🛠️",
		title: "함께 만드는 플랫폼",
		description:
			"피드백은 곧바로 다음 업데이트에 반영됩니다. 원하는 기능을 직접 제안해 보세요.",
	},
] as const;

export default function StatsStrip() {
	return (
		<section
			className="bg-gray-50 py-16 sm:py-20 border-y border-gray-200"
			aria-labelledby="beta-heading"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto">
					<span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
						<span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
						BETA
					</span>
					<h2
						id="beta-heading"
						className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900"
					>
						한국 당구 커뮤니티, 함께 시작합니다
					</h2>
					<p className="mt-4 text-base sm:text-lg text-gray-600">
						Danggu IN(당구인)은 현재 베타 테스트 중입니다.
						실제 사용 통계는 정식 출시 이후 투명하게 공개할 예정입니다.
					</p>
				</div>

				<ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
					{BETA_HIGHLIGHTS.map((item) => (
						<li
							key={item.title}
							className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-7 text-left"
						>
							<div className="text-4xl mb-3" aria-hidden="true">
								{item.icon}
							</div>
							<h3 className="text-lg font-bold text-gray-900 mb-2">
								{item.title}
							</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								{item.description}
							</p>
						</li>
					))}
				</ul>

				<div className="mt-10 text-center">
					<CTAButton variant="primary">베타에 참여하기</CTAButton>
				</div>
			</div>
		</section>
	);
}
