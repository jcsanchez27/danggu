export const APP_URL = "https://app.dangguin.com";
export const SITE_URL = "https://dangguin.com";
export const SITE_NAME = "Dangguin";
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
	"Pearl" | "Sapphire" | "Emerald" | "Ruby" | "Diamond",
	{ gradient: string; label: string }
> = {
	Pearl: { gradient: "from-slate-100 to-slate-300", label: "Pearl" },
	Sapphire: { gradient: "from-blue-500 to-indigo-700", label: "Sapphire" },
	Emerald: { gradient: "from-emerald-400 to-green-600", label: "Emerald" },
	Ruby: { gradient: "from-rose-500 to-red-700", label: "Ruby" },
	Diamond: { gradient: "from-cyan-300 to-sky-600", label: "Diamond" },
};

export const GALLERY_ITEMS = [
	{ category: "메인 갤러리", title: "결승 하이라이트", views: "12.4K", likes: "1.2K" },
	{ category: "미니 갤러리", title: "10초 트릭샷", views: "8.7K", likes: "890" },
	{ category: "사람들 갤러리", title: "동호회 정기전", views: "3.1K", likes: "412" },
	{ category: "메인 갤러리", title: "프로 경기 풀영상", views: "21.0K", likes: "2.1K" },
] as const;
