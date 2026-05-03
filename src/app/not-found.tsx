import CTAButton from "@/components/CTAButton";

export default function NotFound() {
	return (
		<main className="min-h-screen flex items-center justify-center px-6 bg-white">
			<div className="text-center max-w-md">
				<p className="text-7xl sm:text-8xl font-black bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
					404
				</p>
				<h1 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
					페이지를 찾을 수 없습니다
				</h1>
				<p className="mt-3 text-gray-600">
					요청하신 페이지가 존재하지 않거나 이동되었습니다.
				</p>
				<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
					<a
						href="/"
						className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-base font-bold text-gray-900 hover:bg-gray-50 transition-all duration-300"
					>
						홈으로
					</a>
					<CTAButton variant="primary">앱으로 이동</CTAButton>
				</div>
			</div>
		</main>
	);
}
