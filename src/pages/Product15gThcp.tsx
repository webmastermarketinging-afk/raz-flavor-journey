import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Product images
import alaskanThunderfuckBox from "@/assets/alaskan-thunderfuck-box.png";
import strawberryKushBox from "@/assets/strawberry-kush-box.png";
import alienCookiesBox from "@/assets/alien-cookies-box.png";
import alaskanThunderfuckProducts from "@/assets/alaskan-thunderfuck-products.png";
import strawberryKushProducts from "@/assets/strawberry-kush-products.png";
import alienCookiesProducts from "@/assets/alien-cookies-products.png";
import alaskanThunderfuckSingle from "@/assets/alaskan-thunderfuck-single.jpg";
import strawberryKushSingle from "@/assets/strawberry-kush-single.jpg";
import alienCookiesSingle from "@/assets/alien-cookies-single.jpg";
// Flavor images
import alaskanThunderfuckImage from "@/assets/alaskan-thunderfuck.jpg";
import alienCookiesImage from "@/assets/alien-cookies.jpg";
import strawberryKushImage from "@/assets/strawberry-kush.jpg";

const productImages = [
  alaskanThunderfuckBox, alienCookiesBox, strawberryKushBox,
  alaskanThunderfuckProducts, alienCookiesProducts, strawberryKushProducts,
  alaskanThunderfuckSingle, alienCookiesSingle, strawberryKushSingle
];

const flavors = [
  {
    id: 1,
    name: "Alaskan Thunderfuck",
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

const productInfo = {
  name: "1.5G THCP",
  strainType: "A curated set of three strains: one sativa, one hybrid, and one indica. Each preroll is infused with THCP diamonds and rich terpenes.",
  effects: ["Sativa: Focused and Energizing", "Hybrid: Balanced and Smooth", "Indica: Calming and Relaxing"],
  strainName: "Three signature strains chosen for standout flavor and consistent effects. A simple, premium lineup for customers who want reliable 1.5g THCP prerolls.",
};

const FlavorCard = ({ flavor, index }: { flavor: typeof flavors[0]; index: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <motion.div
      className="glass rounded-3xl p-6 group hover:shadow-2xl transition-all duration-500"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative mb-6 overflow-hidden rounded-2xl">
        <div className="relative h-64 w-full">
          <img
            src={flavor.images[currentImageIndex]}
            alt={`${flavor.name} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${flavor.gradient} opacity-20`} />
        </div>

        {flavor.images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + flavor.images.length) % flavor.images.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % flavor.images.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              {flavor.images.map((_, imgIndex) => (
                <button
                  key={imgIndex}
                  onClick={() => setCurrentImageIndex(imgIndex)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    imgIndex === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="text-center">
        <h3 className="font-druk text-2xl text-foreground mb-2">{flavor.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{flavor.type}</p>

        <button
          onClick={() => window.open(flavor.pdfUrl, "_blank")}
          className={`w-full py-3 px-6 bg-gradient-to-r ${flavor.gradient} text-white font-poppins-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105`}
        >
          View Lab Results
        </button>
      </div>
    </motion.div>
  );
};

const Product15gThcp = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-15g opacity-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-druk text-5xl lg:text-7xl text-foreground mb-4">{productInfo.name}</h1>
            <p className="text-xl text-muted-foreground">THC-P Diamond Infused Pre-Rolls</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Product Images */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src={productImages[activeImageIndex]}
                  alt={productInfo.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-15g opacity-20 rounded-2xl blur-xl -z-10" />
                
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeImageIndex ? "bg-gradient-15g shadow-neon scale-125" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <h3 className="font-druk text-3xl text-foreground mb-4">Strain Type</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{productInfo.strainType}</p>
              </div>

              <div>
                <h3 className="font-druk text-3xl text-foreground mb-4">Effects</h3>
                <div className="flex flex-wrap gap-3">
                  {productInfo.effects.map((effect, index) => (
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
                <h3 className="font-druk text-3xl text-foreground mb-4">Strain Name</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{productInfo.strainName}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-druk text-4xl lg:text-5xl text-foreground mb-2">Available Flavors</h2>
            <p className="text-muted-foreground text-lg">Three signature strains</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {flavors.map((flavor, index) => (
              <FlavorCard key={flavor.id} flavor={flavor} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product15gThcp;
