import Hero from '@/components/Hero';
import LiveTicker from '@/components/LiveTicker';
import FightingClip from '@/components/FightingClip';
import LogosMarquee from '@/components/LogosMarquee';
import ChaosPartners from '@/components/ChaosPartners';
import ComicSection from '@/components/ComicSection';
import HowToBuy from '@/components/HowToBuy';
import LoreSection from '@/components/LoreSection';
import HowToPlay from '@/components/HowToPlay';
import Tokenomics from '@/components/Tokenomics';
import TheFighters from '@/components/TheFighters';
import VisionSection from '@/components/VisionSection';
import MemeGallery from '@/components/MemeGallery';
import Roadmap from '@/components/Roadmap';
import FAQ from '@/components/FAQ';
import CommunitySection from '@/components/CommunitySection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (

    <>
      <Hero />
      <LiveTicker />
      <LoreSection />
      <FightingClip />
      <LogosMarquee />
      <ChaosPartners />
      <ComicSection />
      {/* <HowToBuy /> */}
      
      <HowToPlay />
      <Tokenomics />
      <TheFighters />
     
      {/* <VisionSection /> */}
      <MemeGallery />
      <Roadmap />
      <FAQ />
      {/* <CommunitySection /> */}
      <FinalCTA />
      {/* <Footer /> */}
    </>

  );
}