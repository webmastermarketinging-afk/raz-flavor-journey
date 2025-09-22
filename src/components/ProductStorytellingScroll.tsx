import { useEffect, useRef } from 'react';
import { Shield, Lock, FileCheck, Leaf, Zap, Heart } from 'lucide-react';
import razLiquidImage from '@/assets/raz-liquid-effects.jpg';

const storySteps = [
  {
    id: 1,
    title: "Premium Hemp Flower",
    subtitle: "The Foundation",
    description: "We start with 100% federally compliant hemp flower, carefully selected for its superior quality and unique terpene profiles.",
    icon: Leaf,
    color: "from-green-400 to-emerald-600",
    visual: "🌿"
  },
  {
    id: 2,
    title: "THC-P Diamond Infusion",
    subtitle: "The Enhancement",
    description: "Our proprietary diamond infusion process elevates each pre-roll with precisely measured THC-P for consistent potency.",
    icon: Zap,
    color: "from-blue-400 to-cyan-600",
    visual: "💎"
  },
  {
    id: 3,
    title: "Expert Crafted Blends",
    subtitle: "The Artistry",
    description: "Master cultivators blend three distinct strain profiles: Hybrid balance, Indica relaxation, and Sativa energy.",
    icon: Heart,
    color: "from-purple-400 to-pink-600",
    visual: "🎨"
  },
  {
    id: 4,
    title: "Florida Compliant",
    subtitle: "The Trust",
    description: "Every product meets Florida's strict cannabinoid regulations, ensuring legal compliance and consumer safety.",
    icon: Shield,
    color: "from-orange-400 to-red-600",
    visual: "🛡️"
  },
  {
    id: 5,
    title: "Child-Proof Packaging",
    subtitle: "The Safety",
    description: "Advanced child-resistant packaging keeps products secure while maintaining freshness and potency.",
    icon: Lock,
    color: "from-teal-400 to-green-600",
    visual: "🔒"
  },
  {
    id: 6,
    title: "Laboratory Tested",
    subtitle: "The Verification",
    description: "Rigorous third-party testing ensures every batch meets our high standards for purity and consistency.",
    icon: FileCheck,
    color: "from-indigo-400 to-blue-600",
    visual: "🧪"
  }
];

const ProductStorytellingScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener('wheel', handleWheel);
    return () => scrollContainer.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-gradient-to-br from-background via-background/95 to-background relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={razLiquidImage} 
          alt="Background effects" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-raz-blue/10 via-transparent to-raz-red/10" />

      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="font-druk text-5xl md:text-7xl text-foreground neon-text mb-4">
            THE RAZ STORY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scroll horizontally to discover the craftsmanship behind every RAZ pre-roll
          </p>
          <div className="flex justify-center mt-6 gap-2">
            <div className="w-20 h-1 bg-gradient-hybrid rounded-full animate-pulse" />
            <div className="w-20 h-1 bg-gradient-indica rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
            <div className="w-20 h-1 bg-gradient-sativa rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto pb-8 px-4 scrollbar-hide"
        style={{ 
          scrollBehavior: 'smooth',
          scrollSnapType: 'x mandatory'
        }}
      >
        {storySteps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.id}
              className="flex-shrink-0 w-96 h-[500px] relative group cursor-pointer"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Main Card */}
              <div className="h-full glass rounded-3xl p-8 relative overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-neon">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass flex items-center justify-center">
                  <span className="font-druk text-lg text-foreground">{step.id}</span>
                </div>

                {/* Visual Icon */}
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-float">{step.visual}</div>
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:shadow-neon transition-all duration-500`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-4">
                  <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${step.color} text-white font-poppins-bold text-sm`}>
                    {step.subtitle}
                  </div>
                  
                  <h3 className="font-druk text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Animated Elements */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${step.color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                        animationDelay: `${i * 0.5}s`,
                        animation: 'float 3s ease-in-out infinite'
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Connection Line to Next Card */}
              {index < storySteps.length - 1 && (
                <div className="absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent opacity-50" />
              )}
            </div>
          );
        })}

        {/* Final Card - Call to Action */}
        <div className="flex-shrink-0 w-96 h-[500px] relative group cursor-pointer" style={{ scrollSnapAlign: 'center' }}>
          <div className="h-full glass rounded-3xl p-8 relative overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-red-glow bg-gradient-to-br from-raz-red/20 to-raz-blue/20">
            <div className="text-center h-full flex flex-col justify-center space-y-6">
              <div className="text-8xl animate-pulse mb-4">🚀</div>
              
              <h3 className="font-druk text-3xl text-foreground neon-text">
                EXPERIENCE RAZ
              </h3>
              
              <p className="text-lg text-muted-foreground">
                Ready to elevate your experience with premium THC-P diamond infused pre-rolls?
              </p>
              
              <button className="px-8 py-4 bg-gradient-to-r from-raz-red to-raz-blue text-white font-poppins-bold text-lg rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105">
                Shop Now
              </button>
              
              <div className="flex justify-center gap-4 mt-6">
                <div className="w-3 h-3 bg-gradient-hybrid rounded-full animate-pulse" />
                <div className="w-3 h-3 bg-gradient-indica rounded-full animate-pulse" style={{animationDelay: '0.2s'}} />
                <div className="w-3 h-3 bg-gradient-sativa rounded-full animate-pulse" style={{animationDelay: '0.4s'}} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-8">
        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
          <span className="text-sm text-muted-foreground">Scroll horizontally</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}} />
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStorytellingScroll;