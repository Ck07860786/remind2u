import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { LiveDemo } from './components/LiveDemo';
import { WhyRemind2U } from './components/WhyRemind2U';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <LiveDemo />
        <WhyRemind2U />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
