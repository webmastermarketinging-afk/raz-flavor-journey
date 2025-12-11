import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Product images
import thca2gSingle from "@/assets/2g-thca-single.jpg";
import thca2gProducts from "@/assets/2g-thca-products.jpg";
import thca2gBox from "@/assets/2g-thca-box.jpg";
// Flavor images
import thca2gEmeraldCity from "@/assets/thca-2g-emerald-city.png";
import thca2gRubySlippers from "@/assets/thca-2g-ruby-slippers.png";
import thca2gNorthernLights from "@/assets/thca-2g-northern-lights.png";
import thca2gBlueDream from "@/assets/thca-2g-blue-dream.png";

const productImages = [thca2gSingle, thca2gProducts, thca2gBox];

const flavors = [
  { id: 1, name: "Emerald City", type: "Sativa", image: thca2gEmeraldCity, gradient: "from-emerald-500 to-green-600", pdfUrl: "#" },
  { id: 2, name: "Ruby Slippers", type: "Sativa", image: thca2gRubySlippers, gradient: "from-red-500 to-rose-600", pdfUrl: "#" },
  { id: 3, name: "Northern Lights", type: "Indica", image: thca2gNorthernLights, gradient: "from-pink-500 to-purple-600", pdfUrl: "#" },
  { id: 4, name: "Blue Dream", type: "Indica", image: thca2gBlueDream, gradient: "from-blue-500 to-indigo-600", pdfUrl: "#" },
];

const productInfo = {
  name: "2G THCA",
  strainType: "Offered in four strain varieties, including uplifting sativas and relaxing indicas. Infused with THCA diamonds for a clean, powerful effect.",
  effects: ["Clear", "Strong", "Aromatic", "Balanced Body and Mind"],
  strainName: "Four strains available, each with unique terpene notes and effects. Ideal for customers who want flavor, purity, and a potent THCA preroll.",
};

const Product2gThca = () => {
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
        <div className="absolute inset-0 bg-gradient-thca opacity-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-druk text-5xl lg:text-7xl text-foreground mb-4">{productInfo.name}</h1>
            <p className="text-xl text-muted-foreground">THC-A Diamond Infused Pre-Rolls</p>
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
                <div className="absolute -inset-4 bg-gradient-thca opacity-20 rounded-2xl blur-xl -z-10" />
                
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

              <div className="flex justify-center gap-2 mt-4">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeImageIndex ? "bg-gradient-thca shadow-neon scale-125" : "bg-muted"
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
            <p className="text-muted-foreground text-lg">Four unique strains to choose from</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {flavors.map((flavor, index) => (
              <motion.div
                key={flavor.id}
                className="glass rounded-3xl p-6 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="relative h-64 w-full">
                    <img
                      src={flavor.image}
                      alt={flavor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${flavor.gradient} opacity-20`} />
                  </div>
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product2gThca;
