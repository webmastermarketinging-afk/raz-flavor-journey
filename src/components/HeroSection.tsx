import { motion } from 'framer-motion';
import razHeroBanner from '@/assets/banner-raz-new.png';
import razHeroMobile from '@/assets/banner-razz-mobile.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-raz-black flex items-center justify-center overflow-hidden">
      {/* Desktop Image */}
      <motion.img
        src={razHeroBanner}
        alt="RAZ THC-P Diamond Infused Pre-Rolls - Premium Cannabis Products"
        className="hidden lg:block w-full h-auto object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {/* Mobile/Tablet Image */}
      <motion.img
        src={razHeroMobile}
        alt="RAZ THC-P Diamond Infused Pre-Rolls - Premium Cannabis Products"
        className="block lg:hidden w-full h-auto object-contain"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </section>
  );
};

export default HeroSection;