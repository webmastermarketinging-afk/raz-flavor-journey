import { useEffect, useState } from 'react';
import razProducts from '@/assets/raz-products.jpg';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${razProducts})`,
          transform: `translateY(${scrollY * 0.5}px)`,
          filter: 'brightness(0.3)'
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="parallax-slow">
          <h2 className="font-druk text-6xl md:text-8xl text-foreground neon-text mb-6">
            PREMIUM
            <br />
            EXPERIENCE
          </h2>
          
          <div className="glass p-8 rounded-2xl backdrop-blur-xl">
            <p className="text-xl md:text-2xl text-foreground font-poppins-bold mb-6">
              "RAZ delivers an unparalleled smoking experience with precision-crafted 
              pre-rolls that blend innovation with tradition."
            </p>
            
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="font-druk text-3xl md:text-4xl text-primary neon-text">
                  1.5G
                </div>
                <div className="text-sm text-muted-foreground font-poppins-bold">
                  Premium Weight
                </div>
              </div>
              
              <div>
                <div className="font-druk text-3xl md:text-4xl text-secondary neon-text">
                  3
                </div>
                <div className="text-sm text-muted-foreground font-poppins-bold">
                  Unique Strains
                </div>
              </div>
              
              <div>
                <div className="font-druk text-3xl md:text-4xl text-primary neon-text">
                  100%
                </div>
                <div className="text-sm text-muted-foreground font-poppins-bold">
                  Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center animate-bounce opacity-60">
          <div className="w-1 h-3 bg-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;