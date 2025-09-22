import razHeroImage from '@/assets/raz-hero-products.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src={razHeroImage}
        alt="RAZ THC-P Diamond Infused Pre-Rolls"
        className="w-full h-full object-cover object-center"
      />
    </section>
  );
};

export default HeroSection;