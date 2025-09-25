import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Leaf, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import razPrerollClean from '@/assets/raz-preroll-clean.png';
import alaskanTitle from '@/assets/alaskan-title.png';
import prerollVerde from '@/assets/preroll-verde-2.png';
import prerollRojo from '@/assets/preroll-rojo-2.png';
import rainbowBackground from '@/assets/rainbow-background.png';
const preRolls = [{
  id: 1,
  name: 'Green Dream',
  type: 'INDICA',
  effects: 'Calming, Peaceful, Relaxing',
  flavor: 'Herbal, Earthy, Pine',
  thc: '25-29%',
  weight: '1.5G',
  image: prerollVerde,
  gradient: 'from-green-600 via-green-500 to-emerald-400',
  glowColor: 'shadow-green-600/30',
  description: 'Deep relaxation with natural herbal essence.'
}, {
  id: 2,
  name: 'Cherry Blaze',
  type: 'SATIVA',
  effects: 'Energetic, Focused, Uplifting',
  flavor: 'Cherry, Spicy, Sweet',
  thc: '27-31%',
  weight: '1.5G',
  image: prerollRojo,
  gradient: 'from-red-600 via-red-500 to-pink-400',
  glowColor: 'shadow-red-600/30',
  description: 'Fiery energy boost with cherry sweetness.'
}, {
  id: 3,
  name: 'Alaskan Thunderfuck',
  type: 'HYBRID',
  effects: 'Balanced, Focus, Euphoric',
  flavor: 'Pine, Citrus, Diesel',
  thc: '26-30%',
  weight: '1.5G',
  image: razPrerollClean,
  gradient: 'from-blue-500 via-cyan-400 to-sky-300',
  glowColor: 'shadow-blue-500/30',
  description: 'Perfect balance of mind and body effects.'
}];
const PreRollCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const currentPreRoll = preRolls[currentIndex];

  // Parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev + 1) % preRolls.length);
    setTimeout(() => setIsAnimating(false), 300);
  };
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev - 1 + preRolls.length) % preRolls.length);
    setTimeout(() => setIsAnimating(false), 300);
  };
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Handle scroll navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) > 10) {
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };
    const container = document.getElementById('preroll-carousel');
    if (container) {
      container.addEventListener('wheel', handleWheel, {
        passive: false
      });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, []);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'INDICA':
        return <Leaf className="w-5 h-5" />;
      case 'SATIVA':
        return <Zap className="w-5 h-5" />;
      case 'HYBRID':
        return <Heart className="w-5 h-5" />;
      default:
        return <Leaf className="w-5 h-5" />;
    }
  };
  return <motion.section 
    ref={sectionRef}
    id="preroll-carousel" 
    className="relative h-[250px] sm:h-[300px] overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          y,
          scale,
          backgroundImage: `url(${rainbowBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Enhanced overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/30 backdrop-blur-[1px]" />
      
      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Side - Large Clean Pre-Roll */}
            <div className="flex justify-center">
              <div className={`relative transition-all duration-700 ease-out ${isAnimating ? 'scale-95 opacity-60' : 'scale-100 opacity-100'}`}>
                <div className="relative w-36 h-24 sm:w-80 sm:h-48 flex items-center justify-center">
                  <img 
                    src={currentPreRoll.image} 
                    alt={`RAZ ${currentPreRoll.name} Pre-Roll`} 
                    className="w-full h-full object-contain drop-shadow-2xl transform rotate-90" 
                  />
                </div>
              </div>
            </div>

            {/* Center - Title Image with Type */}
            <div className={`flex flex-col items-center justify-center space-y-2 sm:space-y-4 transition-all duration-700 ease-out ${isAnimating ? 'translate-x-8 opacity-40' : 'translate-x-0 opacity-100'}`}>
              {/* Type Badge Above */}
              <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${currentPreRoll.gradient} text-white font-bold text-xs sm:text-sm shadow-lg`}>
                {getTypeIcon(currentPreRoll.type)}
                <span>{currentPreRoll.type}</span>
              </div>
              
              {/* Product Title Image */}
              <div className="relative">
                <img 
                  src={alaskanTitle} 
                  alt={currentPreRoll.name} 
                  className="h-10 sm:h-16 object-contain" 
                />
              </div>
            </div>

            {/* Right Side - Stats & CTA */}
            <div className={`space-y-3 sm:space-y-4 text-center transition-all duration-700 ease-out ${isAnimating ? 'translate-x-8 opacity-40' : 'translate-x-0 opacity-100'}`}>
              {/* Quick Stats */}
              <div className="flex justify-center gap-2 sm:gap-4">
                <div className="glass p-1.5 sm:p-2 rounded-lg text-center min-w-[50px] sm:min-w-[60px]">
                  <div className="text-sm sm:text-lg font-druk text-foreground">{currentPreRoll.thc}</div>
                  <div className="text-xs text-muted-foreground">THC</div>
                </div>
                <div className="glass p-1.5 sm:p-2 rounded-lg text-center min-w-[50px] sm:min-w-[60px]">
                  <div className="text-sm sm:text-lg font-druk text-foreground">{currentPreRoll.weight}</div>
                  <div className="text-xs text-muted-foreground">Weight</div>
                </div>
              </div>

              {/* CTA Button */}
              <Button size="sm" className={`px-3 py-1.5 sm:px-6 sm:py-2 bg-gradient-to-r ${currentPreRoll.gradient} text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 ${currentPreRoll.glowColor} hover:shadow-lg text-xs sm:text-sm`}>
                View more
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-2 sm:left-4 flex items-center z-20">
        <Button variant="ghost" size="icon" onClick={prevSlide} disabled={isAnimating} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full glass border border-white/10 text-foreground hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
          <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-2 sm:right-4 flex items-center z-20">
        <Button variant="ghost" size="icon" onClick={nextSlide} disabled={isAnimating} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full glass border border-white/10 text-foreground hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300">
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
        {preRolls.map((_, index) => <button key={index} onClick={() => goToSlide(index)} disabled={isAnimating} className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${index === currentIndex ? `bg-gradient-to-r ${currentPreRoll.gradient} shadow-md scale-125` : 'bg-white/40 hover:bg-white/60'}`} />)}
      </div>

      {/* Product Counter */}
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 glass px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 z-20">
        <span className="text-xs font-bold text-foreground">
          {String(currentIndex + 1).padStart(2, '0')} / {String(preRolls.length).padStart(2, '0')}
        </span>
      </div>
    </motion.section>;
};
export default PreRollCarousel;