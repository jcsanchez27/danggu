import CTAButton from "./CTAButton";

export default function FinalCTA() {
	return (
		<section
			className="relative overflow-hidden bg-gradient-to-r from-sky-500 to-sky-700 py-20 sm:py-24"
			aria-labelledby="final-cta-heading"
		>
			<div
				className="absolute inset-0 opacity-25"
				style={{
					backgroundImage:
						"radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.4), transparent 50%)",
				}}
				aria-hidden="true"
			/>
			<div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
				<h2
					id="final-cta-heading"
					className="text-3xl sm:text-4xl md:text-5xl font-black text-white"
				>
					지금 바로 시작하세요
				</h2>
				<div className="mt-8">
					<CTAButton variant="secondary" className="!text-lg !px-8 !py-4">
						앱으로 이동
					</CTAButton>
				</div>
			</div>
		</section>
	);
}
