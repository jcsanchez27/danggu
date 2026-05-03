import { FEATURES } from "@/constants";

export default function Features() {
	return (
		<section
			id="features"
			className="bg-white py-20 sm:py-28"
			aria-labelledby="features-heading"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-2xl mx-auto">
					<h2
						id="features-heading"
						className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900"
					>
						플랫폼 핵심 기능
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						경기 관리부터 커뮤니티까지, 당구 팬을 위한 모든 기능을 제공합니다.
					</p>
				</div>

				<ul className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{FEATURES.map((f) => (
						<li
							key={f.title}
							className="rounded-2xl bg-white border border-gray-200 p-6 sm:p-7 transition-all duration-300 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-900/5 hover:-translate-y-1"
						>
							<div className="text-4xl mb-4" aria-hidden="true">
								{f.icon}
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-2">
								{f.title}
							</h3>
							<p className="text-sm text-gray-600 leading-relaxed">
								{f.description}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
