import HeroSection from "@/components/HeroSection";
import StrainShowcase from "@/components/StrainShowcase";
import InfiniteScroll from "@/components/InfiniteScroll";
import ProductStorytellingScroll from "@/components/ProductStorytellingScroll";
import ComplianceSection from "@/components/ComplianceSection";
import PreRollCarousel from "@/components/PreRollCarousel";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InfiniteScroll />
      <StrainShowcase />
      <PreRollCarousel />
      <NewsletterSection />
    </main>
  );
};

export default Index;
