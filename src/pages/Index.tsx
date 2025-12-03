import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ParallaxCTA } from "@/components/ParallaxCTA";
import { Services } from "@/components/Services";
import { VitrineSection } from "@/components/VitrineSection";
import { ParallaxStats } from "@/components/ParallaxStats";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <ParallaxCTA />
      <Services />
      <VitrineSection />
      <ParallaxStats />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
