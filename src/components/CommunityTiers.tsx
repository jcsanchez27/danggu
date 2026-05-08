import CTAButton from "./CTAButton";
import { TIER_BADGES } from "@/constants";

const TIER_ORDER: (keyof typeof TIER_BADGES)[] = [
	"Pearl",
	"Sapphire",
	"Emerald",
	"Ruby",
	"Diamond",
];

export default function CommunityTiers() {
	return (
		<section
			id="community"
			className="bg-white py-20 sm:py-28"
			aria-labelledby="community-heading"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto">
					<h2
						id="community-heading"
						className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900"
					>
						등급 시스템과 포인트 보상
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						활동할수록 등급이 오르고, 더 많은 혜택과 콘텐츠가 열립니다.
					</p>
				</div>

				<ul className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6">
					{TIER_ORDER.map((key) => {
						const t = TIER_BADGES[key];
						return (
							<li key={key} className="flex flex-col items-center">
								<div
									className={`relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gradient-to-br ${t.gradient} shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110`}
									aria-hidden="true"
								>
									<div className="absolute inset-1.5 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
										<svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="text-white drop-shadow">
											<path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.6L12 2z" />
										</svg>
									</div>
								</div>
								<span className="mt-3 text-sm font-bold text-gray-900">{t.label}</span>
							</li>
						);
					})}
				</ul>

				<div className="mt-14">
					<div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 sm:p-7 max-w-2xl mx-auto">
						<h3 className="text-xl font-bold text-gray-900 mb-3">
							포인트 보상
						</h3>
						<ul className="space-y-2 text-sm text-gray-700">
							<li>· 일일 출석 시 자동 포인트 지급</li>
							<li>· 게시글·댓글 작성 시 활동 포인트 적립</li>
							<li>· 등급 상승 시 추가 보상과 전용 배지 제공</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 text-center">
					<CTAButton variant="primary" appPath="/people-gallery">커뮤니티 가입하기</CTAButton>
				</div>
			</div>
		</section>
	);
}
