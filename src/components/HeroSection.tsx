import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-bg" />
      
      {/* Parallax floating elements */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-hybrid opacity-30 float-animation" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-indica opacity-40 float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-gradient-sativa opacity-50 float-animation" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* RAZ Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-druk text-8xl md:text-9xl lg:text-[12rem] text-foreground neon-text tracking-tighter">
            RAZ
          </h1>
          <div className="h-2 w-32 bg-gradient-hero mx-auto rounded-full mb-6" />
        </div>

        {/* Tagline */}
        <div className="animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
          <h2 className="font-poppins-bold text-2xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Diamond Infused Pre-Rolls
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience premium 1.5G THC-P infused pre-rolls. Three distinct strains, 
            each with unique flavors and effects. 100% federally compliant hemp flower.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <button className="px-8 py-4 bg-primary text-primary-foreground font-poppins-bold text-lg rounded-2xl hover:shadow-red-glow transition-all duration-300 hover:scale-105">
            Explore Strains
          </button>
          <button className="px-8 py-4 glass text-foreground font-poppins-bold text-lg rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Compliance badge */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-poppins-bold text-foreground">
              100% Federally Compliant • THC &lt; 0.3%
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;