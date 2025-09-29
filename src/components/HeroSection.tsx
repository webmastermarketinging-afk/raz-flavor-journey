import { motion } from 'framer-motion';
import razHeroBanner from '@/assets/banner-raz-new.png';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-raz-black flex items-center justify-center overflow-hidden">
      <motion.img
        src={razHeroBanner}
        alt="RAZ THC-P Diamond Infused Pre-Rolls - Premium Cannabis Products"
        className="w-full h-auto object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </section>
  );
};

export default HeroSection;