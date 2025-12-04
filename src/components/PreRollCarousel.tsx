import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import rainbowBackground from '@/assets/rainbow-background.png';
import thcp2gSingle from '@/assets/2g-thcp-single.jpg';
import thca2gSingle from '@/assets/2g-thca-single.jpg';
import prerollRojo3 from '@/assets/preroll-rojo-3.png';

interface ProductType {
  id: string;
  name: string;
  tabLabel: string;
  cannabinoid: string;
  weight: string;
  image: string;
  gradient: string;
  glowColor: string;
  strains: string;
}

const productTypes: ProductType[] = [
  {
    id: '2g-thcp',
    name: '2G THCP',
    tabLabel: '2G THCP',
    cannabinoid: 'THCP',
    weight: '2G',
    image: thcp2gSingle,
    gradient: 'from-purple-600 via-purple-500 to-violet-400',
    glowColor: 'shadow-purple-600/30',
    strains: '6 Different Strains'
  },
  {
    id: '2g-thca',
    name: '2G THCA',
    tabLabel: '2G THCA',
    cannabinoid: 'THCA',
    weight: '2G',
    image: thca2gSingle,
    gradient: 'from-red-700 via-red-600 to-orange-500',
    glowColor: 'shadow-red-600/30',
    strains: '6 Different Strains'
  },
  {
    id: '1.5g-thcp',
    name: '1.5G THCP',
    tabLabel: '1.5G THCP',
    cannabinoid: 'THCP',
    weight: '1.5G',
    image: prerollRojo3,
    gradient: 'from-green-600 via-green-500 to-emerald-400',
    glowColor: 'shadow-green-600/30',
    strains: '3 Different Strains'
  }
];

const PreRollCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const currentProduct = productTypes[currentIndex];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % productTypes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <motion.section 
      ref={sectionRef}
      id="preroll-carousel" 
      className="relative h-[400px] sm:h-[400px] overflow-hidden py-[15px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
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
          {/* Tab Selector */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-2 sm:gap-4 p-1.5 sm:p-2 glass rounded-full">
              {productTypes.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => goToSlide(index)}
                  className={`px-3 py-1.5 sm:px-6 sm:py-2 rounded-full font-poppins-bold text-xs sm:text-sm transition-all duration-300 ${
                    currentIndex === index
                      ? `bg-gradient-to-r ${product.gradient} text-white shadow-lg`
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {product.tabLabel}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-8 items-center max-w-6xl mx-auto">
            
            {/* Left Side - Product Image */}
            <div className="flex justify-center lg:justify-end">
              <div className={`relative transition-all duration-700 ease-out ${isAnimating ? 'scale-95 opacity-60' : 'scale-100 opacity-100'}`}>
                <div className="relative w-52 h-36 sm:w-60 sm:h-40 lg:w-80 lg:h-60 flex items-center justify-center">
                  <img 
                    src={currentProduct.image} 
                    alt={`RAZ ${currentProduct.name} Pre-Roll`} 
                    className="w-full h-full object-contain drop-shadow-2xl rounded-lg" 
                  />
                </div>
              </div>
            </div>

            {/* Center - Product Name */}
            <div className={`flex flex-col items-center justify-center space-y-2 sm:space-y-4 transition-all duration-700 ease-out ${isAnimating ? 'translate-x-8 opacity-40' : 'translate-x-0 opacity-100'}`}>
              <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${currentProduct.gradient} text-white font-bold text-xs sm:text-sm shadow-lg`}>
                <span>{currentProduct.strains}</span>
              </div>
              
              <div className="relative text-center">
                <h3 className="font-druk text-2xl sm:text-4xl text-foreground">
                  {currentProduct.name}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mt-1">
                  Diamond Infused Preroll
                </p>
              </div>
            </div>

            {/* Right Side - Stats & CTA */}
            <div className={`space-y-3 sm:space-y-4 text-center flex flex-col items-center transition-all duration-700 ease-out ${isAnimating ? 'translate-x-8 opacity-40' : 'translate-x-0 opacity-100'}`}>
              {/* Quick Stats */}
              <div className="flex justify-center gap-2 sm:gap-4">
                <div className="glass p-1.5 sm:p-2 rounded-lg text-center min-w-[50px] sm:min-w-[60px]">
                  <div className="text-sm sm:text-lg font-druk font-bold text-foreground">{currentProduct.cannabinoid}</div>
                  <div className="text-xs text-muted-foreground">Cannabinoid</div>
                </div>
                <div className="glass p-1.5 sm:p-2 rounded-lg text-center min-w-[50px] sm:min-w-[60px]">
                  <div className="text-sm sm:text-lg font-druk text-foreground">{currentProduct.weight}</div>
                  <div className="text-xs text-muted-foreground">Weight</div>
                </div>
              </div>

              {/* CTA Button - Hidden on mobile */}
              <Button 
                size="sm" 
                className={`hidden sm:block px-6 py-2 bg-gradient-to-r ${currentProduct.gradient} text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 ${currentProduct.glowColor} hover:shadow-lg text-sm`}
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
        {productTypes.map((product, index) => (
          <button 
            key={index} 
            onClick={() => goToSlide(index)} 
            disabled={isAnimating} 
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? `bg-gradient-to-r ${product.gradient} shadow-md scale-125` 
                : 'bg-white/40 hover:bg-white/60'
            }`} 
          />
        ))}
      </div>
    </motion.section>
  );
};

export default PreRollCarousel;
