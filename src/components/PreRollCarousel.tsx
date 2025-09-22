import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import prerollBase from '@/assets/preroll-base.png';
import prerollTypography from '@/assets/preroll-typography.png';
import alienCookies from '@/assets/alien-cookies.jpg';
import strawberryKush from '@/assets/strawberry-kush.jpg';
import alazkanThunderfuck from '@/assets/alazkan-thunderfuck.jpg';

const preRolls = [
  {
    id: 1,
    name: 'Alien Cookies',
    type: 'INDICA',
    effects: 'Relaxing, Euphoric, Sleepy',
    flavor: 'Sweet, Earthy, Vanilla',
    thc: '28-32%',
    weight: '1.5G',
    image: alienCookies,
    gradient: 'from-green-500 via-emerald-400 to-teal-300',
    glowColor: 'shadow-green-500/30',
    description: 'Perfect for evening relaxation and stress relief.'
  },
  {
    id: 2,
    name: 'Strawberry Kush',
    type: 'SATIVA',
    effects: 'Energizing, Creative, Uplifting',
    flavor: 'Berry, Sweet, Fruity',
    thc: '24-28%',
    weight: '1.5G',
    image: strawberryKush,
    gradient: 'from-red-500 via-pink-400 to-rose-300',
    glowColor: 'shadow-red-500/30',
    description: 'Ideal for daytime creativity and social activities.'
  },
  {
    id: 3,
    name: 'Alaskan Thunderfuck',
    type: 'HYBRID',
    effects: 'Balanced, Focus, Euphoric',
    flavor: 'Pine, Citrus, Diesel',
    thc: '26-30%',
    weight: '1.5G',
    image: alazkanThunderfuck,
    gradient: 'from-blue-500 via-cyan-400 to-sky-300',
    glowColor: 'shadow-blue-500/30',
    description: 'Perfect balance of mind and body effects.'
  }
];

const PreRollCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentPreRoll = preRolls[currentIndex];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % preRolls.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + preRolls.length) % preRolls.length);
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
      container.addEventListener('wheel', handleWheel, { passive: false });
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
      case 'INDICA': return <Leaf className="w-5 h-5" />;
      case 'SATIVA': return <Zap className="w-5 h-5" />;
      case 'HYBRID': return <Heart className="w-5 h-5" />;
      default: return <Leaf className="w-5 h-5" />;
    }
  };

  return (
    <section id="preroll-carousel" className="relative h-[300px] bg-background overflow-hidden">
      {/* Background with smooth transitions */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${currentPreRoll.gradient} opacity-5 transition-all duration-700 ease-out`}
      />
      
      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Side - Pre-Roll Image with 3D Effect (Larger) */}
            <div className="flex justify-center">
              <div className={`relative group cursor-pointer transition-all duration-700 ease-out ${isAnimating ? 'scale-95 opacity-60' : 'scale-100 opacity-100'}`}>
                <div 
                  className={`relative w-64 h-40 transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:-rotate-12 ${currentPreRoll.glowColor} group-hover:shadow-xl`}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '800px'
                  }}
                >
                  {/* Pre-Roll Base Image - Horizontal */}
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:rotateY-12">
                    <img
                      src={prerollBase}
                      alt={`${currentPreRoll.name} Pre-Roll`}
                      className="w-full h-full object-contain drop-shadow-lg transform rotate-90"
                    />
                  </div>
                  
                  {/* Floating Brand Typography */}
                  <div className="absolute -top-2 -right-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <img
                      src={prerollTypography}
                      alt="RAZ Typography"
                      className="w-20 h-20 object-contain opacity-70"
                    />
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${currentPreRoll.gradient} opacity-10 rounded-full blur-lg scale-75 group-hover:scale-90 transition-all duration-500`} />
                </div>
              </div>
            </div>

            {/* Center - Strain Image with Name */}
            <div className={`flex justify-center transition-all duration-700 ease-out ${isAnimating ? 'translate-x-8 opacity-40' : 'translate-x-0 opacity-100'}`}>
              <div className="relative group cursor-pointer">
                {/* Strain Image */}
                <div className="relative w-48 h-32 rounded-xl overflow-hidden">
                  <img
                    src={currentPreRoll.image}
                    alt={currentPreRoll.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent`} />
                  
                  {/* Type Badge */}
                  <div className="absolute top-2 right-2">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r ${currentPreRoll.gradient} text-white font-bold text-xs`}>
                      {getTypeIcon(currentPreRoll.type)}
                      <span>{currentPreRoll.type}</span>
                    </div>
                  </div>
                  
                  {/* Product Name Overlay */}
                  <div className="absolute bottom-2 left-2 right-2">
                    <h2 className="font-druk text-xl lg:text-2xl text-white tracking-tight drop-shadow-lg">
                      {currentPreRoll.name}
                    </h2>
                    <p className="text-xs text-white/80 mt-1">
                      {currentPreRoll.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Stats & CTA */}
            <div className={`space-y-4 text-center transition-all duration-700 ease-out ${isAnimating ? 'translate-x-8 opacity-40' : 'translate-x-0 opacity-100'}`}>
              {/* Quick Stats */}
              <div className="flex justify-center gap-4">
                <div className="glass p-2 rounded-lg text-center min-w-[60px]">
                  <div className="text-lg font-druk text-foreground">{currentPreRoll.thc}</div>
                  <div className="text-xs text-muted-foreground">THC</div>
                </div>
                <div className="glass p-2 rounded-lg text-center min-w-[60px]">
                  <div className="text-lg font-druk text-foreground">{currentPreRoll.weight}</div>
                  <div className="text-xs text-muted-foreground">Weight</div>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="sm"
                className={`px-6 py-2 bg-gradient-to-r ${currentPreRoll.gradient} text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 ${currentPreRoll.glowColor} hover:shadow-lg`}
              >
                View more
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={isAnimating}
          className="w-8 h-8 rounded-full glass border border-white/10 text-foreground hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={isAnimating}
          className="w-8 h-8 rounded-full glass border border-white/10 text-foreground hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {preRolls.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? `bg-gradient-to-r ${currentPreRoll.gradient} shadow-md scale-125` 
                : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Product Counter */}
      <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full border border-white/10 z-20">
        <span className="text-xs font-bold text-foreground">
          {String(currentIndex + 1).padStart(2, '0')} / {String(preRolls.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};

export default PreRollCarousel;