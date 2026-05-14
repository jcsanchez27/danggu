import CTAButton from "./CTAButton";
import { type TierKey } from "@/constants";

const TIER_ORDER: TierKey[] = [
	"Pearl",
	"Sapphire",
	"Emerald",
	"Ruby",
	"Diamond",
];

// Billiard ball visual configuration per tier
type TierBallStyle = {
	label: string;
	inner: string;
	mid: string;
	outer: string;
	labelColor: string;
};

const TIER_STYLES: Record<TierKey, TierBallStyle> = {
	Pearl: {
		label: "Pearl",
		inner: "#ffffff",
		mid: "#e2e8f0",
		outer: "#94a3b8",
		labelColor: "#475569",
	},
	Sapphire: {
		label: "Sapphire",
		inner: "#bfdbfe",
		mid: "#2563eb",
		outer: "#1e3a8a",
		labelColor: "#1e3a8a",
	},
	Emerald: {
		label: "Emerald",
		inner: "#bbf7d0",
		mid: "#059669",
		outer: "#064e3b",
		labelColor: "#064e3b",
	},
	Ruby: {
		label: "Ruby",
		inner: "#fecaca",
		mid: "#dc2626",
		outer: "#7f1d1d",
		labelColor: "#7f1d1d",
	},
	Diamond: {
		label: "Diamond",
		inner: "#cbd5e1",
		mid: "#1f2937",
		outer: "#000000",
		labelColor: "#0f172a",
	},
};

function TierGemIcon({ tier, color }: { tier: TierKey; color: string }) {
	const stroke = color;
	const sw = 2.4;
	// Drawn on a 48x48 viewBox, centered at (24,24)
	switch (tier) {
		case "Pearl":
			return (
				<g fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round">
					<circle cx="24" cy="24" r="16" />
					<circle cx="24" cy="24" r="11" />
				</g>
			);
		case "Sapphire":
			return (
				<g fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round">
					<path d="M24 6 L34 18 L30 40 L18 40 L14 18 Z" />
					<path d="M14 18 L34 18" />
					<path d="M24 6 L24 40" />
					<path d="M18 40 L24 18 L30 40" />
				</g>
			);
		case "Emerald":
			return (
				<g fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round">
					<path d="M14 8 L34 8 L40 14 L40 34 L34 40 L14 40 L8 34 L8 14 Z" />
					<path d="M14 14 L34 14 L34 34 L14 34 Z" />
					<path d="M8 14 L14 14 M34 14 L40 14 M14 34 L8 34 M34 34 L40 34" />
				</g>
			);
		case "Ruby":
			return (
				<g fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round">
					<path d="M16 6 L32 6 L42 16 L42 32 L32 42 L16 42 L6 32 L6 16 Z" />
					<path d="M20 12 L28 12 L36 20 L36 28 L28 36 L20 36 L12 28 L12 20 Z" />
				</g>
			);
		case "Diamond":
			return (
				<g fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round">
					<path d="M10 18 L24 6 L38 18 L24 44 Z" />
					<path d="M10 18 L38 18" />
					<path d="M16 18 L24 6 L32 18" />
					<path d="M10 18 L24 44 L38 18" />
					<path d="M16 18 L24 44 L32 18" />
				</g>
			);
	}
}

function TierBall({ tier }: { tier: TierKey }) {
	const s = TIER_STYLES[tier];
	const gradientId = `ballGrad-${tier}`;
	const shineId = `ballShine-${tier}`;
	return (
		<div className="flex flex-col items-center gap-4 group">
			<div className="relative w-full aspect-square transition-transform duration-300 group-hover:-translate-y-2">
				<svg
					viewBox="0 0 120 120"
					className="w-full h-full drop-shadow-xl"
					aria-hidden="true"
				>
					<defs>
						<radialGradient id={gradientId} cx="38%" cy="35%" r="70%">
							<stop offset="0%" stopColor={s.inner} />
							<stop offset="55%" stopColor={s.mid} />
							<stop offset="100%" stopColor={s.outer} />
						</radialGradient>
						<radialGradient id={shineId} cx="50%" cy="50%" r="50%">
							<stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
							<stop offset="60%" stopColor="rgba(255,255,255,0.15)" />
							<stop offset="100%" stopColor="rgba(255,255,255,0)" />
						</radialGradient>
					</defs>

					{/* Ball body */}
					<circle cx="60" cy="60" r="56" fill={`url(#${gradientId})`} />

					{/* Glossy highlight */}
					<ellipse
						cx="42"
						cy="34"
						rx="22"
						ry="14"
						fill={`url(#${shineId})`}
						transform="rotate(-25 42 34)"
					/>

					{/* White logo circle (like a real billiard ball number circle) */}
					<circle cx="60" cy="60" r="34" fill="#f8fafc" />

					{/* Tier gem logo, centered & scaled inside white circle */}
					<g transform="translate(36 36) scale(1)">
						<TierGemIcon tier={tier} color={s.labelColor} />
					</g>

					{/* Subtle outer ring */}
					<circle
						cx="60"
						cy="60"
						r="56"
						fill="none"
						stroke="rgba(0,0,0,0.15)"
						strokeWidth="1"
					/>
				</svg>
			</div>

			<span
				className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase"
				style={{ color: s.labelColor }}
			>
				{s.label}
			</span>
		</div>
	);
}

export default function CommunityTiers() {
	return (
		<section
			id="community"
			className="bg-gradient-to-b from-white to-slate-50 py-20 sm:py-28"
			aria-labelledby="community-heading"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto">
					<h2
						id="community-heading"
						className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900"
					>
						당구인 등급 시스템
					</h2>
					<p className="mt-4 text-base sm:text-lg text-gray-600">
						당구인(Dangguin) 커뮤니티에서 활동하며 등급을 올려보세요.
					</p>
				</div>

				<ul className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-6 sm:gap-8 items-end">
					{TIER_ORDER.map((key) => (
						<li key={key}>
							<TierBall tier={key} />
						</li>
					))}
				</ul>

				<div className="mt-16 text-center">
					<CTAButton variant="primary" appPath="/people-gallery">커뮤니티 가입하기</CTAButton>
				</div>
			</div>
		</section>
	);
}
