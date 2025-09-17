import Hero from '@/components/Hero';
import LiveTicker from '@/components/LiveTicker';
import PowellIndex from '@/components/PowellIndex';
import Roadmap from '@/components/Roadmap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <LiveTicker />
      {/* <PowellIndex /> */}
      <Roadmap />
      <Footer />
    </>
  );
}