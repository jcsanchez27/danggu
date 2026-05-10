import CTAButton from "./CTAButton";
import { type TierKey } from "@/constants";

const TIER_ORDER: TierKey[] = [
	"Pearl",
	"Sapphire",
	"Emerald",
	"Ruby",
	"Diamond",
];

// Solaire-style card visual configuration
type TierCardStyle = {
	label: string;
	bg: string; // tailwind classes for card background
	ink: string; // gem outline + text color
	subInk: string; // muted brand text color
};

const TIER_STYLES: Record<TierKey, TierCardStyle> = {
	Pearl: {
		label: "Pearl",
		bg: "bg-gradient-to-br from-white to-slate-100",
		ink: "#64748b",
		subInk: "#94a3b8",
	},
	Sapphire: {
		label: "Sapphire",
		bg: "bg-gradient-to-br from-blue-600 to-blue-800",
		ink: "#bfdbfe",
		subInk: "#93c5fd",
	},
	Emerald: {
		label: "Emerald",
		bg: "bg-gradient-to-br from-emerald-600 to-green-800",
		ink: "#bbf7d0",
		subInk: "#86efac",
	},
	Ruby: {
		label: "Ruby",
		bg: "bg-gradient-to-br from-red-600 to-rose-800",
		ink: "#fecaca",
		subInk: "#fca5a5",
	},
	Diamond: {
		label: "Diamond",
		bg: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
		ink: "#e5e7eb",
		subInk: "#9ca3af",
	},
};

function TierIcon({ tier, color }: { tier: TierKey; color: string }) {
	const stroke = color;
	const sw = 1.4;
	switch (tier) {
		case "Pearl":
			return (
				<svg width="88" height="88" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={sw} aria-hidden="true">
					<circle cx="24" cy="24" r="16" />
					<circle cx="24" cy="24" r="12" />
				</svg>
			);
		case "Sapphire":
			return (
				<svg width="88" height="88" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" aria-hidden="true">
					<path d="M24 6 L34 18 L30 40 L18 40 L14 18 Z" />
					<path d="M14 18 L34 18" />
					<path d="M24 6 L24 40" />
					<path d="M18 40 L24 18 L30 40" />
				</svg>
			);
		case "Emerald":
			return (
				<svg width="88" height="88" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" aria-hidden="true">
					<path d="M14 8 L34 8 L40 14 L40 34 L34 40 L14 40 L8 34 L8 14 Z" />
					<path d="M14 14 L34 14 L34 34 L14 34 Z" />
					<path d="M8 14 L14 14 M34 14 L40 14 M14 34 L8 34 M34 34 L40 34" />
				</svg>
			);
		case "Ruby":
			return (
				<svg width="88" height="88" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" aria-hidden="true">
					<path d="M16 6 L32 6 L42 16 L42 32 L32 42 L16 42 L6 32 L6 16 Z" />
					<path d="M20 12 L28 12 L36 20 L36 28 L28 36 L20 36 L12 28 L12 20 Z" />
				</svg>
			);
		case "Diamond":
			return (
				<svg width="88" height="88" viewBox="0 0 48 48" fill="none" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" aria-hidden="true">
					<path d="M10 18 L24 6 L38 18 L24 44 Z" />
					<path d="M10 18 L38 18" />
					<path d="M16 18 L24 6 L32 18" />
					<path d="M10 18 L24 44 L38 18" />
					<path d="M16 18 L24 44 L32 18" />
				</svg>
			);
	}
}

function TierCard({ tier }: { tier: TierKey }) {
	const s = TIER_STYLES[tier];
	return (
		<div
			className={`relative ${s.bg} aspect-[3/4.4] rounded-2xl shadow-xl ring-1 ring-black/5 overflow-hidden flex flex-col items-center justify-between p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
		>
			{/* Subtle sheen */}
			<div
				className="pointer-events-none absolute inset-0 opacity-40"
				style={{
					backgroundImage:
						"linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 65%, rgba(255,255,255,0.08) 100%)",
				}}
				aria-hidden="true"
			/>

			<div className="relative flex items-center justify-center pt-2">
				<TierIcon tier={tier} color={s.ink} />
			</div>

			<div className="relative flex flex-col items-center text-center">
				<span
					className="text-[10px] sm:text-xs font-black tracking-[0.2em]"
					style={{ color: s.subInk }}
				>
					DANGGU IN
				</span>
				<span
					className="mt-2 text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase"
					style={{ color: s.ink }}
				>
					{s.label}
				</span>
			</div>
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
						등급 시스템
					</h2>
				</div>

				<ul className="mt-16 grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 items-center">
					{TIER_ORDER.map((key) => (
						<li key={key}>
							<TierCard tier={key} />
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
