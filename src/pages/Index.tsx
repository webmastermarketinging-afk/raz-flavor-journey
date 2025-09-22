import HeroSection from '@/components/HeroSection';
import StrainShowcase from '@/components/StrainShowcase'; 
import InfiniteScroll from '@/components/InfiniteScroll';
import ProductStorytellingScroll from '@/components/ProductStorytellingScroll';
import ComplianceSection from '@/components/ComplianceSection';
import PreRollCarousel from '@/components/PreRollCarousel';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InfiniteScroll />
      <StrainShowcase />
      <ProductStorytellingScroll />
      <PreRollCarousel />
      <ComplianceSection />
    </main>
  );
};

export default Index;