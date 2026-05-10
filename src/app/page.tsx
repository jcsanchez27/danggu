import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveBettingHighlight from "@/components/LiveBettingHighlight";
import Features from "@/components/Features";
import CommunityTiers from "@/components/CommunityTiers";
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
				<CommunityTiers />
				<FinalCTA />
			</main>
			<Footer />
		</>
	);
}
