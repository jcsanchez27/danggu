import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveBettingHighlight from "@/components/LiveBettingHighlight";
import Features from "@/components/Features";
import GalleryShowcase from "@/components/GalleryShowcase";
import CommunityTiers from "@/components/CommunityTiers";
import StatsStrip from "@/components/StatsStrip";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<LiveBettingHighlight />
				<Features />
				<GalleryShowcase />
				<CommunityTiers />
				<StatsStrip />
				<FinalCTA />
			</main>
			<Footer />
		</>
	);
}
