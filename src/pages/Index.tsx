import PreRollCarousel from "@/components/PreRollCarousel";
import InfiniteScroll from "@/components/InfiniteScroll";
// ❌ Quitamos StrainShowcase del home
// import StrainShowcase from "@/components/StrainShowcase";

// Si quieres reutilizarlo en otra página, lo importas allí, no aquí.
// import ProductStorytellingScroll from "@/components/ProductStorytellingScroll";
import ComplianceSection from "@/components/ComplianceSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Banner estático */}
      <PreRollCarousel />

      <InfiniteScroll />

      {/* Secciones opcionales que ya NO se muestran en el home */}
      {/* <StrainShowcase /> */}
      {/* <ProductStorytellingScroll /> */}
      {/* <ComplianceSection /> */}

      <NewsletterSection />
    </main>
  );
};

export default Index;
