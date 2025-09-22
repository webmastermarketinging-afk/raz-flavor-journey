import { useEffect, useRef, useState } from 'react';
import razLiquidEffects from '@/assets/raz-liquid-effects.jpg';
import razProductDetails from '@/assets/raz-product-details.jpg';

const ScrollytellingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(3); // Default to step 4 (index 3)
  const [isActive, setIsActive] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);

  const steps = [
    {
      id: 1,
      title: "RAZ",
      subtitle: "Premium Cannabis Experience",
      description: "Discover the pinnacle of cannabis craftsmanship with our diamond-infused pre-rolls.",
      image: null,
      gradient: "from-raz-red via-raz-red/80 to-raz-red/60"
    },
    {
      id: 2,
      title: "Diamond Infused",
      subtitle: "THC-P Technology", 
      description: "Our exclusive 1.5G pre-rolls are infused with premium THC-P diamonds for unmatched potency and purity.",
      image: razLiquidEffects,
      gradient: "from-raz-blue via-raz-blue/80 to-raz-blue/60"
    },
    {
      id: 3,
      title: "Three Distinct Strains",
      subtitle: "Unique Flavors & Effects",
      description: "Each strain offers a distinctive experience with carefully curated flavors and therapeutic effects.",
      image: razProductDetails,
      gradient: "from-purple-500 via-purple-400 to-pink-400"
    },
    {
      id: 4,
      title: "Lab Tested & Compliant",
      subtitle: "Quality Assurance",
      description: "100% federally compliant hemp flower with comprehensive lab testing for safety and consistency.",
      image: null,
      gradient: "from-green-500 via-emerald-400 to-teal-400"
    },
    {
      id: 5,
      title: "Premium Features",
      subtitle: "Professional Grade",
      description: "Child-proof packaging, Florida compliant, and crafted with precision for the discerning consumer.",
      image: null,
      gradient: "from-orange-500 via-amber-400 to-yellow-400"
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.intersectionRatio > 0.6;
        setIsActive(isInView);
        
        // Reset to step 4 (index 3) as default when entering the section
        if (isInView && !isTransitioning) {
          setCurrentStep(3);
        }
      },
      {
        threshold: 0.6,
        rootMargin: '0px'
      }
    );

    observer.observe(container);

    const handleScroll = (e: WheelEvent) => {
      if (!isActive || isTransitioning) return;
      
      e.preventDefault();
      
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      
      // Reset accumulator if enough time has passed (debounce)
      if (timeSinceLastScroll > 150) {
        scrollAccumulator.current = 0;
      }
      
      lastScrollTime.current = now;
      scrollAccumulator.current += Math.abs(e.deltaY);
      
      // Require significant scroll to change steps (threshold)
      const scrollThreshold = 100;
      
      if (scrollAccumulator.current >= scrollThreshold) {
        setIsTransitioning(true);
        scrollAccumulator.current = 0;
        
        if (e.deltaY > 0) {
          // Scroll down - next step
          if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
          } else {
            // At last step, go to next section
            setIsActive(false);
            const nextSection = container.nextElementSibling as HTMLElement;
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        } else {
          // Scroll up - previous step
          if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
          } else {
            // At first step, go to previous section
            setIsActive(false);
            const prevSection = container.previousElementSibling as HTMLElement;
            if (prevSection) {
              prevSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
        
        // Reset transition state after animation
        setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      }
    };

    container.addEventListener('wheel', handleScroll, { passive: false });
    
    return () => {
      container.removeEventListener('wheel', handleScroll);
      observer.disconnect();
    };
  }, [currentStep, steps.length, isActive, isTransitioning]);

  const currentStepData = steps[currentStep];

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-raz-black"
    >
      {/* Background with gradient transition */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${currentStepData?.gradient} transition-all duration-700 ease-out`}
        style={{
          opacity: isActive ? 0.3 : 0.1
        }}
      />

      {/* Background Image */}
      {currentStepData?.image && (
        <div 
          className="absolute inset-0 transition-all duration-700 ease-out"
          style={{
            opacity: 0.4
          }}
        >
          <img
            src={currentStepData.image}
            alt={currentStepData.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-raz-black/80 via-raz-black/60 to-transparent" />
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center px-8 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Title */}
            <div className="space-y-4">
              <h1 className="font-druk text-6xl md:text-8xl lg:text-9xl text-white neon-text tracking-tighter">
                {currentStepData?.title}
              </h1>
              <div className="h-2 w-32 bg-gradient-hero rounded-full shadow-neon" />
            </div>

            {/* Subtitle */}
            <h2 className="font-poppins-bold text-2xl md:text-4xl lg:text-5xl text-white/90">
              {currentStepData?.subtitle}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              {currentStepData?.description}
            </p>

            {/* Features for last step */}
            {currentStep === 4 && (
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {['THC-P Diamond Infused', 'Lab Tested', 'Child-Proof Packaging', 'Florida Compliant'].map((feature) => (
                  <div 
                    key={feature}
                    className="glass px-4 py-2 rounded-full text-white font-poppins-bold text-sm shadow-glass"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            )}

            {/* CTA Buttons for last step */}
            {currentStep === 4 && (
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button className="px-8 py-4 bg-gradient-to-r from-raz-red to-raz-red/80 text-white font-poppins-bold text-lg rounded-2xl hover:shadow-red-glow transition-all duration-300 hover:scale-105 shadow-2xl">
                  Explore Strains
                </button>
                <button className="px-8 py-4 glass text-white font-poppins-bold text-lg rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105 border border-white/20">
                  Learn More
                </button>
              </div>
            )}
          </div>

          {/* Visual Indicator */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full glass border-4 border-white/20 flex items-center justify-center">
                <span className="text-8xl font-druk text-white neon-text">
                  {currentStep + 1}
                </span>
              </div>
              <div 
                className={`absolute inset-0 rounded-full bg-gradient-to-br ${currentStepData?.gradient} opacity-20 animate-pulse`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentStep 
                ? 'bg-white shadow-glow scale-125' 
                : 'bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Compliance Badge */}
      <div className="absolute top-8 right-8 inline-flex items-center gap-3 glass px-6 py-3 rounded-full shadow-glass border border-white/20">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg" />
        <span className="text-sm font-poppins-bold text-white">
          100% Federally Compliant • THC &lt; 0.3%
        </span>
      </div>
    </section>
  );
};

export default ScrollytellingSection;