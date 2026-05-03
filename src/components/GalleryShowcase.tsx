import CTAButton from "./CTAButton";
import { GALLERY_ITEMS } from "@/constants";

const GRADIENTS = [
	"from-sky-200 to-sky-500",
	"from-blue-200 to-blue-500",
	"from-amber-200 to-amber-500",
	"from-purple-200 to-purple-500",
];

export default function GalleryShowcase() {
	return (
		<section
			id="gallery"
			className="bg-gray-50 py-20 sm:py-28 border-y border-gray-200"
			aria-labelledby="gallery-heading"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto">
					<h2
						id="gallery-heading"
						className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900"
					>
						당구의 모든 순간을 영상으로
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						회원들이 직접 올리는 다양한 콘텐츠와, 등급별로 제공되는 프리미엄 영상을 만나보세요.
					</p>
				</div>

				<ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{GALLERY_ITEMS.map((item, idx) => (
						<li
							key={item.title}
							className="rounded-2xl bg-white border border-gray-200 overflow-hidden group transition-all duration-300 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-900/5 hover:-translate-y-1"
						>
							<div className={`relative aspect-video bg-gradient-to-br ${GRADIENTS[idx % GRADIENTS.length]} flex items-center justify-center overflow-hidden`}>
								<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.5),transparent_60%)]" aria-hidden="true" />
								<div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-sky-700 shadow-lg transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
									<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
										<path d="M8 5v14l11-7z" />
									</svg>
								</div>
								<span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-sky-700">
									{item.category}
								</span>
							</div>
							<div className="p-4">
								<h3 className="text-sm font-bold text-gray-900 truncate">
									{item.title}
								</h3>
								<div className="mt-2 flex items-center gap-3 text-xs text-gray-600">
									<span className="inline-flex items-center gap-1">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
											<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
											<circle cx="12" cy="12" r="3" />
										</svg>
										{item.views}
									</span>
									<span className="inline-flex items-center gap-1">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
											<path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
										</svg>
										{item.likes}
									</span>
								</div>
							</div>
						</li>
					))}
				</ul>

				<div className="mt-12 text-center">
					<CTAButton variant="primary" appPath="/gallery">갤러리 둘러보기</CTAButton>
				</div>
			</div>
		</section>
	);
}
