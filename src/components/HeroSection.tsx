import { useEffect, useState } from 'react';
import razHeroImage from '@/assets/raz-hero-products.jpg';
import floatingPreroll from '@/assets/floating-preroll.png';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll-based opacities and transforms
  const imageOpacity = Math.max(0, 1 - scrollY / 500); // Image fades out as user scrolls
  const textOpacity = Math.min(1, scrollY / 300); // Text appears as user scrolls
  const textTransform = Math.max(0, 50 - scrollY / 10); // Text slides up as user scrolls

  return (
    <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Full-screen background image - fades out on scroll */}
      <div 
        className="absolute inset-0 transition-opacity duration-300"
        style={{ opacity: imageOpacity }}
      >
        <img
          src={razHeroImage}
          alt="RAZ THC-P Diamond Infused Pre-Rolls"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay only for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-raz-black/20 via-transparent to-raz-black/20" />
      </div>

      {/* Floating Pre-roll Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={floatingPreroll}
          alt="Floating pre-roll"
          className="absolute top-20 left-10 w-16 h-16 opacity-30 animate-float"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(15deg)` }}
        />
        <img
          src={floatingPreroll}
          alt="Floating pre-roll"
          className="absolute top-1/3 right-20 w-20 h-20 opacity-40 animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.2}px) rotate(-20deg)`,
            animationDelay: '2s'
          }}
        />
        <img
          src={floatingPreroll}
          alt="Floating pre-roll"
          className="absolute bottom-1/4 left-1/4 w-12 h-12 opacity-35 animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.4}px) rotate(45deg)`,
            animationDelay: '4s'
          }}
        />
        <img
          src={floatingPreroll}
          alt="Floating pre-roll"
          className="absolute top-1/2 left-1/2 w-14 h-14 opacity-25 animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.15}px) rotate(-10deg)`,
            animationDelay: '6s'
          }}
        />
        <img
          src={floatingPreroll}
          alt="Floating pre-roll"
          className="absolute bottom-20 right-1/3 w-18 h-18 opacity-30 animate-float"
          style={{ 
            transform: `translateY(${scrollY * 0.25}px) rotate(30deg)`,
            animationDelay: '8s'
          }}
        />
      </div>
      
      {/* Text content - appears on scroll */}
      <div 
        className="relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-500"
        style={{ 
          opacity: textOpacity,
          transform: `translateY(${textTransform}px)`
        }}
      >
        {/* RAZ Logo - Massive and glowing */}
        <div className="mb-8">
          <h1 className="font-druk text-8xl md:text-9xl lg:text-[14rem] text-white neon-text tracking-tighter drop-shadow-2xl">
            RAZ
          </h1>
          <div className="h-3 w-40 bg-gradient-hero mx-auto rounded-full mb-8 shadow-neon" />
        </div>

        {/* Enhanced tagline */}
        <div className="space-y-6">
          <h2 className="font-poppins-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-xl">
            Diamond Infused Pre-Rolls
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Experience premium <span className="text-raz-blue font-bold">1.5G THC-P</span> infused pre-rolls. 
            Three distinct strains, each with unique flavors and effects. 
            <span className="text-raz-red font-bold">100% federally compliant</span> hemp flower.
          </p>
          
          {/* Premium feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['THC-P Diamond Infused', 'Lab Tested', 'Child-Proof Packaging', 'Florida Compliant'].map((feature, index) => (
              <div 
                key={feature}
                className="glass px-4 py-2 rounded-full text-white font-poppins-bold text-sm shadow-glass"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
          <button className="px-10 py-5 bg-gradient-to-r from-raz-red to-raz-red/80 text-white font-poppins-bold text-xl rounded-2xl hover:shadow-red-glow transition-all duration-300 hover:scale-105 shadow-2xl">
            Explore Strains
          </button>
          <button className="px-10 py-5 glass text-white font-poppins-bold text-xl rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105 border border-white/20">
            Learn More
          </button>
        </div>

        {/* Compliance badge */}
        <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full shadow-glass border border-white/20">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg" />
          <span className="text-lg font-poppins-bold text-white">
            100% Federally Compliant • THC &lt; 0.3%
          </span>
        </div>
      </div>

      {/* Enhanced scroll indicator - only visible when image is visible */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-opacity duration-300"
        style={{ opacity: imageOpacity }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center shadow-glow">
          <div className="w-2 h-4 bg-white rounded-full mt-2 animate-pulse" />
        </div>
        <p className="text-white text-sm mt-2 font-poppins-bold">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;