import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import alaskanThunderfuckBox from '@/assets/alaskan-thunderfuck-box.png';
import strawberryKushBox from '@/assets/strawberry-kush-box.png';
import alienCookiesBox from '@/assets/alien-cookies-box.png';
import alaskanThunderfuckProducts from '@/assets/alaskan-thunderfuck-products.png';
import strawberryKushProducts from '@/assets/strawberry-kush-products.png';
import alienCookiesProducts from '@/assets/alien-cookies-products.png';
import alaskanThunderfuckSingle from '@/assets/alaskan-thunderfuck-single.jpg';
import strawberryKushSingle from '@/assets/strawberry-kush-single.jpg';
import alienCookiesSingle from '@/assets/alien-cookies-single.jpg';

interface Strain {
  id: string;
  name: string;
  type: 'HYBRID' | 'INDICA' | 'SATIVA';
  flavor: string;
  effects: string[];
  description: string;
  color: string;
  gradient: string;
  images: string[];
}

const strains: Strain[] = [
  {
    id: 'alaskan',
    name: 'Alaskan Thunderfuck',
    type: 'HYBRID',
    flavor: 'This hybrid offers a perfect balance of relaxation and energy. Ideal for a smooth, well-rounded experience any time of day.',
    effects: ['Euphoric', 'Creative', 'Balanced', 'Uplifting'],
    description: 'Known for its bold, earthy aroma and powerful effects, this hybrid offers a balanced experience. Expect a clear, cerebral buzz paired with deep body relaxation.
',
    color: 'blue',
    gradient: 'bg-gradient-hybrid',
    images: [alaskanThunderfuckBox, alaskanThunderfuckProducts, alaskanThunderfuckSingle]
  },
  {
    id: 'alien',
    name: 'Alien Cookies',
    type: 'INDICA',
    flavor: 'This indica provides deep relaxation and calm for both body and mind. Best for unwinding and getting a restful night’s sleep.',
    effects: ['Relaxing', 'Sedating', 'Body High', 'Sleep Aid'],
    description: 'With rich, sweet notes and a smooth smoke, this indica brings deep calm and full-body relaxation. Ideal for unwinding and enjoying a peaceful night.',
    color: 'green',
    gradient: 'bg-gradient-indica',
    images: [alienCookiesBox, alienCookiesProducts, alienCookiesSingle]
  },
  {
    id: 'strawberry',
    name: 'Strawberry Kush',
    type: 'SATIVA',
    flavor: 'This sativa delivers uplifting, energizing effects that boost creativity and focus. Perfect for daytime use and staying active.',
    effects: ['Energizing', 'Focus', 'Creative', 'Mood Boost'],
    description: 'Sweet and fruity with a burst of strawberry flavor, this sativa delivers an uplifting, energizing high. Perfect for boosting creativity and keeping spirits bright throughout the day.'
','
    color: 'red',
    gradient: 'bg-gradient-sativa',
    images: [strawberryKushBox, strawberryKushProducts, strawberryKushSingle]
  }
];

const StrainShowcase = () => {
  const navigate = useNavigate();
  const [activeStrain, setActiveStrain] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-carousel functionality for main strains (7 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStrain(prev => (prev + 1) % strains.length);
      setActiveImageIndex(0); // Reset image index when strain changes
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-carousel functionality for images (3 seconds) - no pause on hover
  useEffect(() => {
    const currentStrain = strains[activeStrain];
    if (currentStrain.images.length > 1) {
      const interval = setInterval(() => {
        setActiveImageIndex(prev => (prev + 1) % currentStrain.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeStrain]);

  const nextImage = () => {
    const currentStrain = strains[activeStrain];
    setActiveImageIndex(prev => (prev + 1) % currentStrain.images.length);
  };

  const prevImage = () => {
    const currentStrain = strains[activeStrain];
    setActiveImageIndex(prev => (prev - 1 + currentStrain.images.length) % currentStrain.images.length);
  };

  const currentStrain = strains[activeStrain];

  return (
    <section 
      className="relative py-20 overflow-hidden no-hover-anim"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background with gradient */}
      <div className={`absolute inset-0 ${currentStrain.gradient} opacity-10`} />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-druk text-5xl md:text-7xl text-foreground mb-4">
            1.5G THC-P Diamond infused Preroll
          </h2>
        </div>

        {/* Interactive strain selector */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 glass rounded-full">
            {strains.map((strain, index) => (
              <button
                key={strain.id}
                onClick={() => setActiveStrain(index)}
                className={`px-6 py-3 rounded-full font-poppins-bold text-sm ${
                  activeStrain === index
                    ? `${strain.gradient} text-white shadow-neon`
                    : 'text-muted-foreground'
                }`}
              >
                {strain.type}
              </button>
            ))}
          </div>
        </div>

        {/* Main strain showcase */}
        <div className="strain-showcase">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Product visualization */}
            <div className="relative">
              <div className="strain-item">
                <div className="product-card p-8 text-center">
                  <div className="relative mb-6">
                    <img
                      src={currentStrain.images[activeImageIndex]}
                      alt={currentStrain.name}
                      className="w-full max-w-sm mx-auto rounded-xl"
                    />
                    <div className={`absolute -inset-4 ${currentStrain.gradient} opacity-20 rounded-xl blur-xl`} />
                    
                    {/* Navigation arrows for images */}
                    {currentStrain.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full glass border border-white/10 text-foreground"
                        >
                          <ChevronLeft className="w-4 h-4 mx-auto" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full glass border border-white/10 text-foreground"
                        >
                          <ChevronRight className="w-4 h-4 mx-auto" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  <div className={`inline-block px-4 py-2 ${currentStrain.gradient} text-white rounded-full font-poppins-bold text-sm mb-4`}>
                    {currentStrain.type}
                  </div>
                  
                  <h3 className="font-druk text-3xl text-foreground mb-2">
                    {currentStrain.name}
                  </h3>
                  
                  <div className="text-center">
                    <span className="text-lg font-poppins-bold text-foreground">1.5G THC-P Diamond infused Preroll</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strain details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Strain
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {currentStrain.flavor}
                </p>
              </div>

              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Effects
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentStrain.effects.map((effect, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 glass rounded-full text-foreground font-poppins-bold text-sm"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Experience
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentStrain.description}
                </p>
              </div>

              <button 
                className={`px-8 py-4 ${currentStrain.gradient} text-white font-poppins-bold text-lg rounded-2xl`}
                onClick={() => navigate('/contact')}
              >
                Experience {currentStrain.type}
              </button>
            </div>
          </div>
        </div>

        {/* Floating indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {strains.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeStrain === index
                  ? `${strains[index].gradient} shadow-neon`
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrainShowcase;