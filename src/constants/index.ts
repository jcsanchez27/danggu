export const APP_URL = "https://app.dangguin.com";
export const SITE_URL = "https://dangguin.com";
export const SITE_NAME = "Danggu IN";
export const SITE_NAME_KO = "당구인";
export const SITE_TAGLINE = "한국 당구 커뮤니티";

export const NAV_LINKS = [
	{ href: "#features", label: "기능" },
	{ href: "#live-betting", label: "라이브 베팅" },
	{ href: "#gallery", label: "갤러리" },
	{ href: "#community", label: "커뮤니티" },
] as const;

export type Feature = {
	icon: string;
	title: string;
	description: string;
};

export const FEATURES: readonly Feature[] = [
	{ icon: "🏆", title: "대회 관리", description: "토너먼트 브래킷, 실시간 점수, 결과 추적까지 한 번에 관리합니다." },
	{ icon: "🎱", title: "실시간 경기", description: "PBA·LPBA 라이브 중계와 실시간 점수 업데이트를 제공합니다." },
	{ icon: "🎯", title: "베팅 시스템", description: "Star Points로 즐기는 안전한 가상 베팅 시스템을 경험하세요." },
	{ icon: "📸", title: "갤러리", description: "풀영상부터 짧은 클립까지, 모든 당구 콘텐츠를 한곳에서." },
	{ icon: "👥", title: "선수 프로필", description: "점수, 하이런, 평균 등 상세 통계를 한눈에 확인합니다." },
	{ icon: "💬", title: "커뮤니티", description: "매치 요청, 댓글, 1:1 메시지로 동호인과 자유롭게 소통하세요." },
] as const;

export const TIER_BADGES: Record<
	"Bronze" | "Silver" | "Gold" | "Platinum" | "Emerald" | "Diamond",
	{ gradient: string; label: string }
> = {
	Bronze: { gradient: "from-amber-600 to-amber-800", label: "브론즈" },
	Silver: { gradient: "from-gray-400 to-gray-600", label: "실버" },
	Gold: { gradient: "from-yellow-400 to-yellow-600", label: "골드" },
	Platinum: { gradient: "from-cyan-400 to-blue-500", label: "플래티넘" },
	Emerald: { gradient: "from-emerald-400 to-green-600", label: "에메랄드" },
	Diamond: { gradient: "from-blue-400 to-indigo-600", label: "다이아몬드" },
};

export const GALLERY_ITEMS = [
	{ category: "메인 갤러리", title: "결승 하이라이트", views: "12.4K", likes: "1.2K" },
	{ category: "미니 갤러리", title: "10초 트릭샷", views: "8.7K", likes: "890" },
	{ category: "사람들 갤러리", title: "동호회 정기전", views: "3.1K", likes: "412" },
	{ category: "메인 갤러리", title: "프로 경기 풀영상", views: "21.0K", likes: "2.1K" },
] as const;
