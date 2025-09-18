import Hero from '@/components/Hero';
import LiveTicker from '@/components/LiveTicker';
import FightingClip from '@/components/FightingClip';
import ComicSection from '@/components/ComicSection';
import LoreSection from '@/components/LoreSection';
import HowToPlay from '@/components/HowToPlay';
import Tokenomics from '@/components/Tokenomics';
import VisionSection from '@/components/VisionSection';
import MemeGallery from '@/components/MemeGallery';
import Roadmap from '@/components/Roadmap';
import CommunitySection from '@/components/CommunitySection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <LiveTicker />
      <FightingClip />
      <ComicSection />
      <LoreSection />
      <HowToPlay />
      <Tokenomics />
      <VisionSection />
      <MemeGallery />
      <Roadmap />
      {/* <CommunitySection /> */}
      <FinalCTA />
      {/* <Footer /> */}
    </>
  );
}