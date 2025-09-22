import { motion } from 'framer-motion';
import razHeroImage from '@/assets/raz-hero-products.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-raz-black flex items-center justify-center overflow-hidden">
      <motion.img
        src={razHeroImage}
        alt="RAZ THC-P Diamond Infused Pre-Rolls"
        className="w-full h-auto object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </section>
  );
};

export default HeroSection;