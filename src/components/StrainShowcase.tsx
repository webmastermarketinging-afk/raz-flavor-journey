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
import thcp2gSingle from '@/assets/2g-thcp-single.jpg';
import thcp2gProducts from '@/assets/2g-thcp-products.jpg';
import thcp2gBox from '@/assets/2g-thcp-box.jpg';
import thca2gSingle from '@/assets/2g-thca-single.jpg';
import thca2gProducts from '@/assets/2g-thca-products.jpg';
import thca2gBox from '@/assets/2g-thca-box.jpg';
interface ProductCategory {
  id: string;
  name: string;
  tabLabel: string;
  strainType: string;
  effects: string[];
  strainName: string;
  gradient: string;
  images: string[];
}

const productCategories: ProductCategory[] = [
  {
    id: '2g-thcp',
    name: '2G THCP',
    tabLabel: '2G THCP',
    strainType: 'Available in six strains, including sativa, hybrid, and indica options. Each preroll is infused with THCP diamonds and bold terpene profiles.',
    effects: ['Potent', 'Flavorful', 'Long-Lasting', 'Body and Mind Elevation'],
    strainName: 'Choose from six strains, each offering its own flavor and effect. Perfect for users who want a strong, smooth, terpene-rich 2g preroll experience.',
    gradient: 'bg-gradient-thcp',
    images: [thcp2gSingle, thcp2gProducts, thcp2gBox]
  },
  {
    id: '2g-thca',
    name: '2G THCA',
    tabLabel: '2G THCA',
    strainType: 'Offered in six strain varieties, including uplifting sativas, balanced hybrids, and relaxing indicas. Infused with THCA diamonds for a clean, powerful effect.',
    effects: ['Clear', 'Strong', 'Aromatic', 'Balanced Body and Mind'],
    strainName: 'Six strains available, each with unique terpene notes and effects. Ideal for customers who want flavor, purity, and a potent THCA preroll.',
    gradient: 'bg-gradient-thca',
    images: [thca2gSingle, thca2gProducts, thca2gBox]
  },
  {
    id: '1.5g-thcp',
    name: '1.5G THCP',
    tabLabel: '1.5G THCP',
    strainType: 'A curated set of three strains: one sativa, one hybrid, and one indica. Each preroll is infused with THCP diamonds and rich terpenes.',
    effects: ['Sativa: Focused and Energizing', 'Hybrid: Balanced and Smooth', 'Indica: Calming and Relaxing'],
    strainName: 'Three signature strains chosen for standout flavor and consistent effects. A simple, premium lineup for customers who want reliable 1.5g THCP prerolls.',
    gradient: 'bg-gradient-15g',
    images: [alaskanThunderfuckBox, alienCookiesBox, strawberryKushBox, alaskanThunderfuckProducts, alienCookiesProducts, strawberryKushProducts, alaskanThunderfuckSingle, alienCookiesSingle, strawberryKushSingle]
  }
];

const StrainShowcase = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-carousel functionality for main categories (7 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % productCategories.length);
      setActiveImageIndex(0);
    }, 7000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Auto-carousel functionality for images (3 seconds) - only for 1.5G THCP
  useEffect(() => {
    const currentCategory = productCategories[activeCategory];
    if (currentCategory.images.length > 1) {
      const interval = setInterval(() => {
        setActiveImageIndex(prev => (prev + 1) % currentCategory.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [activeCategory]);

  const nextImage = () => {
    const currentCategory = productCategories[activeCategory];
    if (currentCategory.images.length > 0) {
      setActiveImageIndex(prev => (prev + 1) % currentCategory.images.length);
    }
  };

  const prevImage = () => {
    const currentCategory = productCategories[activeCategory];
    if (currentCategory.images.length > 0) {
      setActiveImageIndex(prev => (prev - 1 + currentCategory.images.length) % currentCategory.images.length);
    }
  };

  const currentCategory = productCategories[activeCategory];
  const hasImages = currentCategory.images.length > 0;

  return (
    <section 
      className="relative py-20 overflow-hidden no-hover-anim"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background with gradient */}
      <div className={`absolute inset-0 ${currentCategory.gradient} opacity-10`} />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <h2 className="font-druk text-3xl md:text-5xl text-foreground leading-tight">
              World Famous, Locally Grown,
            </h2>
            <h2 className="font-druk text-4xl md:text-6xl text-foreground leading-tight">
              And Locally Rolled
            </h2>
            <p className="font-poppins text-lg md:text-xl text-muted-foreground mt-2">
              Something To Remember
            </p>
            <p className="font-poppins-bold text-xl md:text-2xl text-foreground mt-3">
              Explore Our Products
            </p>
          </div>
        </div>

        {/* Interactive category selector */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 p-2 glass rounded-full">
            {productCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(index);
                  setActiveImageIndex(0);
                }}
                className={`px-6 py-3 rounded-full font-poppins-bold text-sm ${
                  activeCategory === index
                    ? `${category.gradient} text-white shadow-neon`
                    : 'text-muted-foreground'
                }`}
              >
                {category.tabLabel}
              </button>
            ))}
          </div>
        </div>

        {/* Main category showcase */}
        <div className="strain-showcase">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Product visualization */}
            <div className="relative">
              <div className="strain-item">
                <div className="product-card p-8 text-center">
                  {hasImages ? (
                    <div className="relative mb-6">
                      <img
                        src={currentCategory.images[activeImageIndex]}
                        alt={currentCategory.name}
                        className="w-full max-w-sm mx-auto rounded-xl"
                      />
                      <div className={`absolute -inset-4 ${currentCategory.gradient} opacity-20 rounded-xl blur-xl`} />
                      
                      {/* Navigation arrows for images */}
                      {currentCategory.images.length > 1 && (
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
                  ) : (
                    <div className="relative mb-6">
                      <div className={`w-full max-w-sm mx-auto h-64 rounded-xl ${currentCategory.gradient} opacity-30 flex items-center justify-center`}>
                        <span className="font-druk text-4xl text-white/50">Coming Soon</span>
                      </div>
                      <div className={`absolute -inset-4 ${currentCategory.gradient} opacity-20 rounded-xl blur-xl`} />
                    </div>
                  )}
                  
                  <div className={`inline-block px-4 py-2 ${currentCategory.gradient} text-white rounded-full font-poppins-bold text-sm mb-4`}>
                    {currentCategory.name}
                  </div>
                  
                  <h3 className="font-druk text-3xl text-foreground mb-2">
                    {currentCategory.name}
                  </h3>
                  
                  <div className="text-center">
                    <span className="text-lg font-poppins-bold text-foreground">
                      {currentCategory.id === '1.5g-thcp' ? '3 Different Strains' : '6 Different Strains'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Strain Type
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {currentCategory.strainType}
                </p>
              </div>

              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Effects
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentCategory.effects.map((effect, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-foreground font-poppins-bold text-sm bg-white/20 backdrop-blur-md border border-gray-200 shadow-md"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Strain Name
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentCategory.strainName}
                </p>
              </div>

              <button 
                className={`px-8 py-4 ${currentCategory.gradient} text-white font-poppins-bold text-lg rounded-2xl`}
                onClick={() => navigate('/faqs')}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating indicators */}
        <div className="flex justify-center mt-12 gap-2">
          {productCategories.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeCategory === index
                  ? `${productCategories[index].gradient} shadow-neon`
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
