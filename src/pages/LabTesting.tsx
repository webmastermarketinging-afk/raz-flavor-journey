import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import razHeroImage from "@/assets/banner-razz-labtesting.jpg";
import razHeroMobile from "@/assets/banner-razz-mobile.jpg";
// THCP 1.5g Products
import alaskanThunderfuckImage from "@/assets/alaskan-thunderfuck.jpg";
import alaskanThunderfuckSingle from "@/assets/alaskan-thunderfuck-single.jpg";
import alaskanThunderfuckProducts from "@/assets/alaskan-thunderfuck-products.png";
import alienCookiesImage from "@/assets/alien-cookies.jpg";
import alienCookiesSingle from "@/assets/alien-cookies-single.jpg";
import alienCookiesProducts from "@/assets/alien-cookies-products.png";
import strawberryKushImage from "@/assets/strawberry-kush.jpg";
import strawberryKushSingle from "@/assets/strawberry-kush-single.jpg";
import strawberryKushProducts from "@/assets/strawberry-kush-products.png";
// THCP 2g Products
import thcp2gNightCrawler from "@/assets/thcp-2g-night-crawler.png";
import thcp2gCactusJack from "@/assets/thcp-2g-cactus-jack.png";
import thcp2gGeorgiaPie from "@/assets/thcp-2g-georgia-pie.png";
import thcp2gMiamiMintz from "@/assets/thcp-2g-miami-mintz.png";
import thcp2gDayCrawler from "@/assets/thcp-2g-day-crawler.png";
import thcp2gForbiddenFruit from "@/assets/thcp-2g-forbidden-fruit.png";
// THCA 2g Products
import thca2gEmeraldCity from "@/assets/thca-2g-emerald-city.png";
import thca2gRubySlippers from "@/assets/thca-2g-ruby-slippers.png";
import thca2gNorthernLights from "@/assets/thca-2g-northern-lights.png";
import thca2gBlueDream from "@/assets/thca-2g-blue-dream.png";
import thca2gTropicalGush from "@/assets/thca-2g-tropical-gush.png";
import thca2gFireIce from "@/assets/thca-2g-fire-ice.png";

const productsTHCP15g = [
  {
    id: 1,
    name: "Alaskan Thunderf*ck",
    type: "Sativa",
    images: [alaskanThunderfuckImage, alaskanThunderfuckSingle, alaskanThunderfuckProducts],
    gradient: "from-blue-500 to-purple-600",
    pdfUrl: "/alaskan-thunderfuck-coa.pdf",
  },
  {
    id: 2,
    name: "Alien Cookies",
    type: "Hybrid",
    images: [alienCookiesImage, alienCookiesSingle, alienCookiesProducts],
    gradient: "from-green-500 to-blue-600",
    pdfUrl: "/alien-cookies-coa.pdf",
  },
  {
    id: 3,
    name: "Strawberry Kush",
    type: "Indica",
    images: [strawberryKushImage, strawberryKushSingle, strawberryKushProducts],
    gradient: "from-pink-500 to-red-600",
    pdfUrl: "/strawberry-kush-coa.pdf",
  },
];

const productsTHCP2g = [
  {
    id: 1,
    name: "Night Crawler",
    type: "Indica",
    images: [thcp2gNightCrawler],
    gradient: "from-purple-500 to-indigo-600",
    pdfUrl: "#",
  },
  {
    id: 2,
    name: "Cactus Jack",
    type: "Sativa",
    images: [thcp2gCactusJack],
    gradient: "from-green-500 to-emerald-600",
    pdfUrl: "#",
  },
  {
    id: 3,
    name: "Georgia Pie",
    type: "Hybrid",
    images: [thcp2gGeorgiaPie],
    gradient: "from-amber-500 to-yellow-600",
    pdfUrl: "#",
  },
  {
    id: 4,
    name: "Miami Mintz",
    type: "Hybrid",
    images: [thcp2gMiamiMintz],
    gradient: "from-blue-400 to-cyan-500",
    pdfUrl: "#",
  },
  {
    id: 5,
    name: "Day Crawler",
    type: "Sativa",
    images: [thcp2gDayCrawler],
    gradient: "from-gray-500 to-slate-600",
    pdfUrl: "#",
  },
  {
    id: 6,
    name: "Forbidden Fruit",
    type: "Indica",
    images: [thcp2gForbiddenFruit],
    gradient: "from-purple-400 to-pink-500",
    pdfUrl: "#",
  },
];

const productsTHCA2g = [
  {
    id: 1,
    name: "Emerald City",
    type: "Sativa",
    images: [thca2gEmeraldCity],
    gradient: "from-emerald-500 to-green-600",
    pdfUrl: "#",
  },
  {
    id: 2,
    name: "Ruby Slippers",
    type: "Sativa",
    images: [thca2gRubySlippers],
    gradient: "from-red-500 to-rose-600",
    pdfUrl: "#",
  },
  {
    id: 3,
    name: "Northern Lights",
    type: "Indica",
    images: [thca2gNorthernLights],
    gradient: "from-pink-500 to-purple-600",
    pdfUrl: "#",
  },
  {
    id: 4,
    name: "Blue Dream",
    type: "Indica",
    images: [thca2gBlueDream],
    gradient: "from-blue-500 to-indigo-600",
    pdfUrl: "#",
  },
  {
    id: 5,
    name: "Tropical Gush",
    type: "Hybrid",
    images: [thca2gTropicalGush],
    gradient: "from-amber-500 to-yellow-600",
    pdfUrl: "#",
  },
  {
    id: 6,
    name: "Fire & Ice",
    type: "Hybrid",
    images: [thca2gFireIce],
    gradient: "from-blue-400 to-pink-500",
    pdfUrl: "#",
  },
];

const ProductCarousel = ({ product }: { product: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const hasMultipleImages = product.images.length > 1;

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

        {/* Navigation Arrows - Only show if multiple images */}
        {hasMultipleImages && (
          <>
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
                    index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Info */}
      <div className="text-center">
        <h3 className="font-druk text-2xl text-foreground mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{product.type}</p>

        {/* CTA Button */}
        <button
          onClick={() => window.open(product.pdfUrl, "_blank")}
          className={`w-full py-3 px-6 bg-gradient-to-r ${product.gradient} text-white font-poppins-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105`}
        >
          View Lab Results
        </button>
      </div>
    </motion.div>
  );
};

interface ProductSectionProps {
  id: string;
  title: string;
  subtitle: string;
  products: any[];
}

const ProductSection = ({ id, title, subtitle, products }: ProductSectionProps) => (
  <section id={id} className="py-16 bg-gradient-to-b from-background to-background/50">
    <div className="container mx-auto px-4">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="font-druk text-4xl lg:text-5xl text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <ProductCarousel key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

const LabTesting = () => {
  const location = useLocation();

  // Cuando llegas con /lab-testing#thcp-15g, hace scroll a esa sección
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // pequeño delay por si aún se está montando
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] bg-raz-black flex items-center justify-center overflow-hidden">
        {/* Desktop Image */}
        <motion.img
          src={razHeroImage}
          alt="RAZ THC-P Diamond Infused Pre-Rolls"
          className="hidden lg:block w-full h-auto object-contain opacity-70"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {/* Mobile/Tablet Image */}
        <motion.img
          src={razHeroMobile}
          alt="RAZ THC-P Diamond Infused Pre-Rolls"
          className="block lg:hidden w-full h-full object-cover opacity-70"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="font-druk text-5xl lg:text-7xl text-white text-center drop-shadow-2xl">
            LAB RESULTS
          </h1>
        </motion.div>
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              All RAZ Pre-Roll products are made with 100% USA indoor-grown cannabis and undergo
              independent lab testing to ensure quality and safety. To access the lab results for
              your specific product and batch number, please refer to the information provided
              below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* THCP 1.5g Products Section */}
      <ProductSection
        id="thcp-15g"
        title="THCP 1.5g"
        subtitle="THC-P Diamond Infused Pre-Rolls"
        products={productsTHCP15g}
      />

      {/* THCP 2g Products Section */}
      <ProductSection
        id="thcp-2g"
        title="THCP 2g"
        subtitle="THC-P Diamond Infused Pre-Rolls - 2 Grams Each"
        products={productsTHCP2g}
      />

      {/* THCA 2g Products Section */}
      <ProductSection
        id="thca-2g"
        title="THCA 2g"
        subtitle="THC-A Diamond Infused Pre-Rolls - 2 Grams Each"
        products={productsTHCA2g}
      />
    </main>
  );
};

export default LabTesting;
