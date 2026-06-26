import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTASection } from "@/components/landing/CTASection";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat, MobileCTABar } from "@/components/landing/FloatingElements";

export default function Index() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileCTABar />
    </div>
  );
}
