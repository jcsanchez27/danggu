import CTAButton from "./CTAButton";

export default function Hero() {
	return (
		<section
			id="top"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-16 bg-white"
			aria-labelledby="hero-heading"
		>
			{/* Soft sky-tinted gradient background */}
			<div
				className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-sky-100 animate-gradient"
				aria-hidden="true"
			/>
			<div
				className="absolute inset-0 opacity-60"
				style={{
					backgroundImage:
						"radial-gradient(circle at 15% 20%, rgba(2,132,199,0.10), transparent 45%), radial-gradient(circle at 85% 80%, rgba(2,132,199,0.08), transparent 45%)",
				}}
				aria-hidden="true"
			/>

			{/* Decorative SVG balls */}
			<svg
				className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
				viewBox="0 0 1200 800"
				preserveAspectRatio="xMidYMid slice"
				aria-hidden="true"
			>
				<defs>
					<radialGradient id="ballSky" cx="35%" cy="35%">
						<stop offset="0%" stopColor="#bae6fd" />
						<stop offset="60%" stopColor="#0284c7" />
						<stop offset="100%" stopColor="#0c4a6e" />
					</radialGradient>
					<radialGradient id="ballRed" cx="35%" cy="35%">
						<stop offset="0%" stopColor="#fecaca" />
						<stop offset="60%" stopColor="#dc2626" />
						<stop offset="100%" stopColor="#7f1d1d" />
					</radialGradient>
					<radialGradient id="ballYellow" cx="35%" cy="35%">
						<stop offset="0%" stopColor="#fef08a" />
						<stop offset="60%" stopColor="#eab308" />
						<stop offset="100%" stopColor="#713f12" />
					</radialGradient>
				</defs>
				<circle cx="160" cy="180" r="80" fill="url(#ballSky)" className="animate-float" />
				<circle cx="1040" cy="220" r="70" fill="url(#ballYellow)" className="animate-float" style={{ animationDelay: "1.5s" }} />
				<circle cx="1080" cy="640" r="100" fill="url(#ballRed)" className="animate-float" style={{ animationDelay: "3s" }} />
				<line x1="0" y1="700" x2="1200" y2="500" stroke="rgba(2,132,199,0.15)" strokeWidth="2" />
				<line x1="200" y1="0" x2="900" y2="800" stroke="rgba(2,132,199,0.1)" strokeWidth="1" />
			</svg>

			<div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
				<span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-xs font-semibold text-sky-700 mb-6">
					<span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" aria-hidden="true" />
					지금 베타 오픈 중
				</span>

				<h1
					id="hero-heading"
					className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-gray-900"
				>
					한국 당구 커뮤니티의 모든 것,
					<br />
					<span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
						한 곳에서
					</span>
				</h1>

				<p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
					라이브 경기 베팅과 토너먼트, 선수 프로필과 갤러리까지.
					<br className="hidden sm:block" />
					한국 당구 커뮤니티 팬들이 모이는 단 하나의 플랫폼.
				</p>

				<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
					<CTAButton variant="primary" className="!text-lg !px-8 !py-4">
					지금 시작하기
					</CTAButton>
					<a
						href="#features"
						className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
					>
						더 알아보기
					</a>
				</div>

				<p className="mt-6 text-sm text-gray-600">
					무료 가입 · 즉시 1,000 포인트 지급
				</p>
			</div>
		</section>
	);
}
