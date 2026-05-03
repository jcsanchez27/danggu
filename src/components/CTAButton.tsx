import type { ReactNode } from "react";
import { APP_URL } from "@/constants";
import type { CTAVariant } from "@/types";

type CTAButtonProps = {
	children: ReactNode;
	variant?: CTAVariant;
	className?: string;
	ariaLabel?: string;
	/** Optional path appended to APP_URL (e.g. "/gallery"). Defaults to APP_URL root. */
	appPath?: string;
};

const VARIANT_CLASSES: Record<CTAVariant, string> = {
	primary:
		"bg-gradient-to-r from-sky-500 to-sky-700 text-white shadow-lg shadow-sky-600/25 hover:brightness-110 hover:shadow-sky-600/40",
	secondary:
		"bg-white text-sky-700 hover:bg-sky-50 shadow-lg shadow-sky-900/10 ring-1 ring-sky-100",
	ghost:
		"border border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-gray-400",
};

export default function CTAButton({
	children,
	variant = "primary",
	className = "",
	ariaLabel,
	appPath = "",
}: CTAButtonProps) {
	const href = appPath ? `${APP_URL}${appPath.startsWith("/") ? appPath : `/${appPath}`}` : APP_URL;
	return (
		<a
			href={href}
			target="_self"
			rel="noopener"
			aria-label={ariaLabel}
			className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-bold transition-all duration-300 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 ${VARIANT_CLASSES[variant]} ${className}`}
		>
			{children}
		</a>
	);
}
