import type { Metadata, Viewport } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { APP_URL, SITE_NAME, SITE_NAME_KO, SITE_TAGLINE, SITE_URL } from "@/constants";

const notoSansKR = Noto_Sans_KR({
	variable: "--font-noto-sans-kr",
	subsets: ["latin"],
	weight: ["300", "400", "500", "700", "900"],
	display: "swap",
});

const TITLE = `당구 커뮤니티 | ${SITE_NAME_KO} (${SITE_NAME}) — 한국 당구 플랫폼`;
const DESCRIPTION =
	"당구 커뮤니티 당구인(Danggu IN) — 한국 최고의 당구 커뮤니티. PBA·LPBA 라이브 경기, 3쿠션·포켓볼 토너먼트, 선수 프로필, 갤러리, 베팅, 동호인 매치까지 한국 당구 팬을 위한 통합 플랫폼입니다.";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: TITLE,
		template: `%s | ${SITE_NAME}`,
	},
	description: DESCRIPTION,
	keywords: [
		"당구 커뮤니티",
		"한국 당구 커뮤니티",
		"당구인",
		"Danggu IN",
		"당구",
		"빌리어드",
		"3쿠션",
		"포켓볼",
		"PBA",
		"LPBA",
		"당구 베팅",
		"당구 갤러리",
		"당구 토너먼트",
		"라이브 당구",
		"한국 당구",
		"당구 동호회",
		"당구 매치",
		"당구 동호인",
		"당구 선수",
		"3쿠션 당구",
		"포켓볼 커뮤니티",
	],
	authors: [{ name: SITE_NAME }],
	creator: SITE_NAME,
	publisher: SITE_NAME,
	alternates: {
		canonical: SITE_URL,
	},
	openGraph: {
		type: "website",
		locale: "ko_KR",
		url: SITE_URL,
		siteName: SITE_NAME,
		title: TITLE,
		description: DESCRIPTION,
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: `${SITE_NAME} - ${SITE_TAGLINE}`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: TITLE,
		description: DESCRIPTION,
		images: ["/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	icons: {
		icon: { url: "/favicon.ico", type: "image/x-icon" },
		apple: "/apple-touch-icon.png",
	},
	formatDetection: {
		telephone: false,
		email: false,
		address: false,
	},
	referrer: "strict-origin-when-cross-origin",
	other: {
		naverbot: "index,follow",
		daumoa: "index,follow",
	},
	verification: {
		google: "HxoeoZ-XKr2HkLZfUrFQaCMSydEIpsG6yfCyYY5OMgg",
	},
};

export const viewport: Viewport = {
	themeColor: "#0284c7",
	colorScheme: "light",
	width: "device-width",
	initialScale: 1,
};

const faqJsonLd = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "당구 커뮤니티 당구인(Danggu IN)은 무엇인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "당구인(Danggu IN)은 한국 당구 팬을 위한 통합 커뮤니티 플랫폼입니다. PBA·LPBA 라이브 경기, 3쿠션·포켓볼 토너먼트, 선수 프로필, 갤러리, 베팅, 동호인 매치를 한 곳에서 즐길 수 있습니다.",
			},
		},
		{
			"@type": "Question",
			name: "당구인에서 어떤 기능을 제공하나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "PBA·LPBA 실시간 라이브 중계, 3쿠션·포켓볼 토너먼트 관리, Star Points 가상 베팅 시스템, 당구 갤러리, 선수 프로필 및 통계, 동호인 매치 요청, 커뮤니티 댓글 기능을 제공합니다.",
			},
		},
		{
			"@type": "Question",
			name: "당구인 가입 방법은 무엇인가요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "app.dangguin.com에서 무료로 가입할 수 있으며, 가입 즉시 1,000 포인트가 지급됩니다.",
			},
		},
		{
			"@type": "Question",
			name: "한국 당구 커뮤니티를 어디서 찾을 수 있나요?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "dangguin.com에서 한국 최고의 당구 커뮤니티를 만날 수 있습니다. PBA·LPBA 팬부터 동호인까지 모든 당구 팬이 모이는 플랫폼입니다.",
			},
		},
	],
};

const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": `${SITE_URL}/#organization`,
			name: SITE_NAME,
			alternateName: SITE_NAME_KO,
			url: SITE_URL,
			logo: `${SITE_URL}/favicon.ico`,
			sameAs: [
				"https://twitter.com/dangguin",
				"https://www.instagram.com/dangguin",
				"https://www.youtube.com/@dangguin",
			],
		},
		{
			"@type": "WebSite",
			"@id": `${SITE_URL}/#website`,
			url: SITE_URL,
			name: SITE_NAME,
			description: DESCRIPTION,
			inLanguage: "ko-KR",
			publisher: { "@id": `${SITE_URL}/#organization` },
			potentialAction: {
				"@type": "SearchAction",
				target: {
					"@type": "EntryPoint",
					urlTemplate: `${APP_URL}/search?q={search_term_string}`,
				},
				"query-input": "required name=search_term_string",
			},
		},
		{
			"@type": "WebApplication",
			"@id": `${APP_URL}/#webapp`,
			name: SITE_NAME,
			alternateName: SITE_NAME_KO,
			url: APP_URL,
			applicationCategory: "SportsApplication",
			operatingSystem: "Web",
			inLanguage: "ko-KR",
			offers: {
				"@type": "Offer",
				price: "0",
				priceCurrency: "KRW",
			},
			publisher: { "@id": `${SITE_URL}/#organization` },
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className={notoSansKR.variable}>
			<head>
				<script
					type="application/ld+json"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<script
					type="application/ld+json"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
				/>
			</head>
			<body className="antialiased bg-white text-gray-900">
				{children}
			</body>
		</html>
	);
}
