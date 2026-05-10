export const APP_URL = "https://app.dangguin.com";
export const SITE_URL = "https://dangguin.com";
export const SITE_NAME = "Dangguin";
export const SITE_NAME_KO = "당구인";
export const SITE_TAGLINE = "당구 커뮤니티";

export const NAV_LINKS = [
	{ href: "#features", label: "기능" },
	{ href: "#live-betting", label: "라이브 베팅" },
	{ href: "#community", label: "커뮤니티" },
] as const;

export type Feature = {
	icon: string;
	title: string;
	description: string;
};

export const FEATURES: readonly Feature[] = [
	{ icon: "🎱", title: "라이브 경기", description: "PBA·LPBA YouTube, 실시간 점수 업데이트를 제공합니다." },
	{ icon: "🎯", title: "베팅 시스템", description: "Star Points로 즐기는 안전한 가상 베팅 시스템을 경험하세요." },
	{ icon: "👥", title: "선수 프로필", description: "프로와 아마추어 선수를 한곳에서. 점수, 하이런, 평균 등 상세 통계를 한눈에 확인합니다." },
	{ icon: "💬", title: "커뮤니티", description: "댓글, 1:1 메시지로 동호인과 자유롭게 소통하세요." },
] as const;

export type TierKey = "Pearl" | "Sapphire" | "Emerald" | "Ruby" | "Diamond";

export const TIER_BADGES: Record<
	TierKey,
	{ gradient: string; label: string; iconColor: string }
> = {
	Pearl: { gradient: "from-slate-50 to-slate-200", label: "Pearl", iconColor: "#64748b" },
	Sapphire: { gradient: "from-blue-500 to-indigo-700", label: "Sapphire", iconColor: "#ffffff" },
	Emerald: { gradient: "from-emerald-400 to-green-600", label: "Emerald", iconColor: "#ffffff" },
	Ruby: { gradient: "from-rose-500 to-red-700", label: "Ruby", iconColor: "#ffffff" },
	Diamond: { gradient: "from-gray-800 to-black", label: "Diamond", iconColor: "#ffffff" },
};
