import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import heroSlide1 from '@/assets/hero-slide-1.png';
import heroSlide2 from '@/assets/hero-slide-2.png';
import razHeroBanner from '@/assets/banner-raz-new.png';
import razHeroMobile from '@/assets/banner-razz-mobile.jpg';

const slides = [
  { id: 1, src: heroSlide1, alt: "RAZ THCA Diamond Infused Pre-Rolls - Premium Cannabis Products" },
  { id: 2, src: heroSlide2, alt: "RAZ THCP Diamond Infused Pre-Rolls - Premium Cannabis Products" },
  { id: 3, src: razHeroBanner, alt: "RAZ THC-P Diamond Infused Pre-Rolls - Premium Cannabis Products" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-raz-black flex items-center justify-center overflow-hidden">
      {/* Desktop Carousel */}
      <div className="hidden lg:block w-full relative">
        <div className="relative w-full">
          {slides.map((slide, index) => (
            <motion.img
              key={slide.id}
              src={slide.src}
              alt={slide.alt}
              className={`w-full h-auto object-contain ${index === 0 ? 'relative' : 'absolute top-0 left-0'}`}
              initial={false}
              animate={{ opacity: currentSlide === index ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          ))}
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

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
