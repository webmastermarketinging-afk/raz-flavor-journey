import PreRollCarousel from "@/components/PreRollCarousel";
import StrainShowcase from "@/components/StrainShowcase";
import InfiniteScroll from "@/components/InfiniteScroll";
// ❌ Eliminamos la importación del slider
// import ProductStorytellingScroll from "@/components/ProductStorytellingScroll";
import ComplianceSection from "@/components/ComplianceSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Banner estático */}
      <PreRollCarousel />

      <InfiniteScroll />
      <StrainShowcase />

      {/* Secciones opcionales */}
      {/* <ProductStorytellingScroll /> */}
      {/* <ComplianceSection /> */}

      <NewsletterSection />
    </main>
  );
};

export default Index;
