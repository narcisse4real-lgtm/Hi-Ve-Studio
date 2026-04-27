import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileCTA } from "@/components/layout/mobile-cta";
import { Hero } from "@/components/sections/hero";
import { ConstatSection } from "@/components/sections/constat";
import { SolutionSection } from "@/components/sections/solution";
import { ShowroomSection } from "@/components/sections/showroom";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { CiblesSection } from "@/components/sections/cibles";
import { MethodeSection } from "@/components/sections/methode";
import { OffresSection } from "@/components/sections/offres";
import { PourquoiSection } from "@/components/sections/pourquoi";
import { FaqSection } from "@/components/sections/faq";
import { AuditSection } from "@/components/sections/audit-section";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Hi-Ve — Sites vitrines pour artisans, PME et professions libérales",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hi-ve.fr/#organization",
    name: "Hi-Ve",
    description:
      "Agence de création de sites vitrines pour artisans, PME et professions libérales en France.",
    url: "https://hi-ve.fr",
    email: siteConfig.email,
    image: "https://hi-ve.fr/og.png",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
    },
    sameAs: [siteConfig.socials.linkedin, siteConfig.socials.instagram],
  };

  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <ConstatSection />
        <SolutionSection />
        <ShowroomSection />
        <BeforeAfterSection />
        <CiblesSection />
        <MethodeSection />
        <OffresSection />
        <PourquoiSection />
        <FaqSection />
        <AuditSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <MobileCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
