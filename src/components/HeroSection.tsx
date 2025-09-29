import { motion } from 'framer-motion';
import razHeroImage from '@/assets/raz-hero-products.jpg';
import razHeroMobile from '@/assets/banner-razz-mobile.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen max-h-[100vh] bg-raz-black flex items-center justify-center overflow-hidden">
      {/* Desktop Image */}
      <motion.img
        src={razHeroImage}
        alt="RAZ THC-P Diamond Infused Pre-Rolls"
        className="hidden lg:block w-full h-full object-cover"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {/* Mobile/Tablet Image */}
      <motion.img
        src={razHeroMobile}
        alt="RAZ THC-P Diamond Infused Pre-Rolls"
        className="block lg:hidden w-full h-full object-cover"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </section>
  );
};

export default HeroSection;