import HeroSection from '@/components/HeroSection';
import StrainShowcase from '@/components/StrainShowcase'; 
import InfiniteScroll from '@/components/InfiniteScroll';
import ParallaxSection from '@/components/ParallaxSection';
import ComplianceSection from '@/components/ComplianceSection';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InfiniteScroll />
      <StrainShowcase />
      <ParallaxSection />
      <ComplianceSection />
    </main>
  );
};

export default Index;