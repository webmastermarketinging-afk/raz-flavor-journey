import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import alaskanThunderfuckImage from '@/assets/alaskan-thunderfuck.jpg';
import strawberryKushImage from '@/assets/strawberry-kush.jpg';
import alienCookiesImage from '@/assets/alien-cookies.jpg';

interface Strain {
  id: string;
  name: string;
  type: 'HYBRID' | 'INDICA' | 'SATIVA';
  flavor: string;
  effects: string[];
  description: string;
  color: string;
  gradient: string;
  image: string;
}

const strains: Strain[] = [
  {
    id: 'alaskan',
    name: 'Alaskan Thunderfuck',
    type: 'HYBRID',
    flavor: 'Piney with earthy undertones and a hint of citrus',
    effects: ['Euphoric', 'Creative', 'Balanced', 'Uplifting'],
    description: 'Experience the perfect balance of mind and body with this legendary Alaskan strain. Known for its potent effects and unique flavor profile.',
    color: 'blue',
    gradient: 'bg-gradient-hybrid',
    image: alaskanThunderfuckImage
  },
  {
    id: 'alien',
    name: 'Alien Cookies',
    type: 'INDICA',
    flavor: 'Sweet vanilla cookies with mysterious alien tang',
    effects: ['Relaxing', 'Sedating', 'Body High', 'Sleep Aid'],
    description: 'Unwind with this otherworldly indica blend. Perfect for evening relaxation and deep, restful sleep.',
    color: 'green',
    gradient: 'bg-gradient-indica',
    image: alienCookiesImage
  },
  {
    id: 'strawberry',
    name: 'Strawberry Kush',
    type: 'SATIVA',
    flavor: 'Fresh strawberries with tropical fruit notes',
    effects: ['Energizing', 'Focus', 'Creative', 'Mood Boost'],
    description: 'Elevate your day with this delicious sativa. Bursting with fruity flavors and energizing effects.',
    color: 'red',
    gradient: 'bg-gradient-sativa',
    image: strawberryKushImage
  }
];

const StrainShowcase = () => {
  const [activeStrain, setActiveStrain] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStrain = strains[activeStrain];

  return (
    <motion.section 
      className="relative py-20 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background with parallax effect */}
      <div 
        className={`absolute inset-0 ${currentStrain.gradient} opacity-10 transition-all duration-1000`}
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-druk text-5xl md:text-7xl text-foreground neon-text mb-4">
            THREE WORLDS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover unique flavor profiles and effects crafted for every experience
          </p>
        </div>

        {/* Interactive strain selector */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 glass rounded-full">
            {strains.map((strain, index) => (
              <button
                key={strain.id}
                onClick={() => setActiveStrain(index)}
                className={`px-6 py-3 rounded-full font-poppins-bold text-sm transition-all duration-300 ${
                  activeStrain === index
                    ? `${strain.gradient} text-white shadow-neon`
                    : 'text-muted-foreground hover:text-foreground'
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
                      src={currentStrain.image}
                      alt={currentStrain.name}
                      className="w-full max-w-sm mx-auto rounded-xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                    <div className={`absolute -inset-4 ${currentStrain.gradient} opacity-20 rounded-xl blur-xl`} />
                  </div>
                  
                  <div className={`inline-block px-4 py-2 ${currentStrain.gradient} text-white rounded-full font-poppins-bold text-sm mb-4`}>
                    {currentStrain.type}
                  </div>
                  
                  <h3 className="font-druk text-3xl text-foreground mb-2">
                    {currentStrain.name}
                  </h3>
                  
                  <div className="text-center">
                    <span className="text-2xl font-poppins-bold text-foreground">1.5G</span>
                    <span className="text-sm text-muted-foreground ml-2">THC-P Diamond Infused</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Strain details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Flavor Profile
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

              <button className={`px-8 py-4 ${currentStrain.gradient} text-white font-poppins-bold text-lg rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105`}>
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeStrain === index
                  ? `${strains[index].gradient} shadow-neon`
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StrainShowcase;