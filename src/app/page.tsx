import Header from "@/components/Header";
import Hero from "@/components/Hero";
import UtilityBar from "@/components/UtilityBar";
import MenuGrid from "@/components/MenuGrid";
import FeatureSection from "@/components/FeatureSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import FloatingNavigateButton from "@/components/FloatingNavigateButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream/30">
      <Header />
      <Hero />
      <UtilityBar />
      <FeatureSection />
      <MenuGrid />
      <AboutSection />
      <Footer />
      <FloatingNavigateButton />
    </main>
  );
}
