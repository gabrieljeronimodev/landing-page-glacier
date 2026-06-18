import { createFileRoute } from "@tanstack/react-router";
import { DemoBannerNav } from "@/components/landing/DemoBannerNav";
import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { Services } from "@/components/landing/Services";
import { About } from "@/components/landing/About";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTASection } from "@/components/landing/CTASection";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat, MobileCTABar } from "@/components/landing/FloatingElements";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Turquesa — Estética e Saúde em Jundiaí | Dra. Claudia Nogueira" },
      {
        name: "description",
        content:
          "Tratamentos estéticos personalizados com a Dra. Claudia Nogueira em Vianelo/Bonfiglioli, Jundiaí. Microagulhamento, jato de plasma e protocolos faciais e corporais.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Clínica Turquesa — Estética e Saúde em Jundiaí" },
      {
        property: "og:description",
        content: "Cuidado humanizado e tecnologia avançada com a Dra. Claudia Nogueira.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="pb-16 md:pb-0 bg-white">
      <DemoBannerNav />
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
