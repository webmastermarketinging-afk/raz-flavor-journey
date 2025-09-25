import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import razHeroImage from '@/assets/raz-hero-products.jpg';
import alaskanThunderfuckImage from '@/assets/alaskan-thunderfuck.jpg';
import alaskanThunderfuckSingle from '@/assets/alaskan-thunderfuck-single.jpg';
import alaskanThunderfuckProducts from '@/assets/alaskan-thunderfuck-products.png';
import alienCookiesImage from '@/assets/alien-cookies.jpg';
import alienCookiesSingle from '@/assets/alien-cookies-single.jpg';
import alienCookiesProducts from '@/assets/alien-cookies-products.png';
import strawberryKushImage from '@/assets/strawberry-kush.jpg';
import strawberryKushSingle from '@/assets/strawberry-kush-single.jpg';
import strawberryKushProducts from '@/assets/strawberry-kush-products.png';

const products = [
  {
    id: 1,
    name: "Alaskan Thunderfuck",
    type: "Sativa",
    images: [alaskanThunderfuckImage, alaskanThunderfuckSingle, alaskanThunderfuckProducts],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    name: "Alien Cookies",
    type: "Hybrid",
    images: [alienCookiesImage, alienCookiesSingle, alienCookiesProducts],
    gradient: "from-green-500 to-blue-600"
  },
  {
    id: 3,
    name: "Strawberry Kush",
    type: "Indica",
    images: [strawberryKushImage, strawberryKushSingle, strawberryKushProducts],
    gradient: "from-pink-500 to-red-600"
  }
];

const ProductCarousel = ({ product }: { product: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <motion.div
      className="glass rounded-3xl p-6 group hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Image Carousel */}
      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <div className="relative h-64 w-full">
          <img
            src={product.images[currentIndex]}
            alt={`${product.name} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-20`} />
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
          {product.images.map((_: any, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-druk text-2xl text-foreground mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{product.type}</p>
        
        {/* CTA Button */}
        <button className={`w-full py-3 px-6 bg-gradient-to-r ${product.gradient} text-white font-poppins-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105`}>
          View Lab Results
        </button>
      </div>
    </motion.div>
  );
};

const LabTesting = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] bg-raz-black flex items-center justify-center overflow-hidden">
        <motion.img
          src={razHeroImage}
          alt="RAZ THC-P Diamond Infused Pre-Rolls"
          className="w-full h-auto object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </section>

      {/* Text Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="font-druk text-5xl lg:text-6xl text-foreground mb-8">
              LAB RESULTS
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              All RAZ Pre-Roll products are made with 100% USA indoor-grown cannabis and undergo independent lab testing to ensure quality and safety. To access the lab results for your specific product and batch number, please refer to the information provided below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <ProductCarousel key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default LabTesting;