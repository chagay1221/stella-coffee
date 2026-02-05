import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UtilityBar from "@/components/UtilityBar";
import MenuGrid from "@/components/MenuGrid";
import FeatureSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen pb-0 overflow-x-hidden bg-cream">
      <Header />
      <Hero />
      <UtilityBar />
      <FeatureSection />
      <MenuGrid />
      <AboutSection />
      <Footer />
    </main>
  );
}
