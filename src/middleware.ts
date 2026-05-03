import { NextResponse, type NextRequest } from "next/server";

/**
 * Edge middleware:
 *  1. Force HTTPS (redirect any http:// hit to https://).
 *  2. Lightweight per-IP rate limiting using an in-memory token-bucket
 *     style counter. Note: on Cloudflare Workers each isolate has its own
 *     memory, so this is a soft limit per edge isolate — sufficient to
 *     stop casual abuse. For globally-consistent limits, attach a
 *     Cloudflare `RATE_LIMITER` binding (configured in wrangler.jsonc).
 */

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 120; // per IP per window

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function getClientIp(req: NextRequest): string {
	return (
		req.headers.get("cf-connecting-ip") ??
		req.headers.get("x-real-ip") ??
		req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
		"unknown"
	);
}

function checkRateLimit(ip: string): { ok: boolean; retryAfter: number } {
	const now = Date.now();
	const bucket = buckets.get(ip);
	if (!bucket || bucket.resetAt <= now) {
		buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
		return { ok: true, retryAfter: 0 };
	}
	bucket.count += 1;
	if (bucket.count > MAX_REQUESTS) {
		return { ok: false, retryAfter: Math.ceil((bucket.resetAt - now) / 1000) };
	}
	return { ok: true, retryAfter: 0 };
}

export function middleware(req: NextRequest) {
	const url = req.nextUrl;

	// 1. HTTPS enforcement
	const proto = req.headers.get("x-forwarded-proto");
	if (proto && proto !== "https" && url.hostname !== "localhost") {
		const httpsUrl = new URL(url.toString());
		httpsUrl.protocol = "https:";
		return NextResponse.redirect(httpsUrl, 308);
	}

	// 2. Rate limiting
	const ip = getClientIp(req);
	const { ok, retryAfter } = checkRateLimit(ip);
	if (!ok) {
		return new NextResponse("Too Many Requests", {
			status: 429,
			headers: {
				"Retry-After": String(retryAfter),
				"Content-Type": "text/plain; charset=utf-8",
			},
		});
	}

	return NextResponse.next();
}

// Apply to all routes except Next internals, static assets and SEO files.
export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|favicon.svg|robots.txt|sitemap.xml|google97dc72cb71040a8b.html|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map)$).*)",
	],
};
