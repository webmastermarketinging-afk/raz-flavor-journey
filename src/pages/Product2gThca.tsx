import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import thca2gSingle from "@/assets/2g-thca-single.jpg";
import thca2gProducts from "@/assets/2g-thca-products.jpg";
import thca2gBox from "@/assets/2g-thca-box.jpg";

const category = {
  id: "2g-thca",
  name: "2G THCA",
  gradient: "bg-gradient-thca",
  strainType:
    "Offered in six strain varieties, including uplifting sativas, balanced hybrids, and relaxing indicas. Infused with THCA diamonds for a clean, powerful effect.",
  effects: ["Clear", "Strong", "Aromatic", "Balanced Body and Mind"],
  strainName:
    "Six strains available, each with unique terpene notes and effects. Ideal for customers who want flavor, purity, and a potent THCA preroll.",
  images: [thca2gSingle, thca2gProducts, thca2gBox],
};

const Product2gThca = () => {
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const hasImages = category.images.length > 0;

  const nextImage = () => {
    if (!hasImages) return;
    setActiveImageIndex((prev) => (prev + 1) % category.images.length);
  };

  const prevImage = () => {
    if (!hasImages) return;
    setActiveImageIndex(
      (prev) => (prev - 1 + category.images.length) % category.images.length
    );
  };

  return (
    <main className="min-h-screen bg-background">
      <section className="relative py-20 overflow-hidden">
        <div className={`absolute inset-0 ${category.gradient} opacity-10`} />

        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h1 className="font-druk text-4xl md:text-6xl text-foreground mb-4">
              {category.name}
            </h1>
            <p className="font-poppins text-lg md:text-xl text-muted-foreground">
              THCA Diamond Infused Pre-Rolls
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Visual */}
            <div className="relative">
              <div className="product-card p-8 text-center">
                {hasImages ? (
                  <div className="relative mb-6">
                    <img
                      src={category.images[activeImageIndex]}
                      alt={category.name}
                      className="w-full max-w-sm mx-auto rounded-xl"
                    />
                    <div
                      className={`absolute -inset-4 ${category.gradient} opacity-20 rounded-xl blur-xl`}
                    />

                    {category.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass border border-white/10 text-foreground"
                        >
                          <ChevronLeft className="w-4 h-4 mx-auto" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full glass border border-white/10 text-foreground"
                        >
                          <ChevronRight className="w-4 h-4 mx-auto" />
                        </button>
                      </>
                    )}
                  </div>
                ) : null}

                <div
                  className={`inline-block px-4 py-2 ${category.gradient} text-white rounded-full font-poppins-bold text-sm mb-4`}
                >
                  {category.name}
                </div>

                <h3 className="font-druk text-3xl text-foreground mb-2">
                  6 Different Strains
                </h3>

                <p className="text-lg font-poppins-bold text-foreground">
                  THC-A Diamond Infused Preroll
                </p>
              </div>
            </div>

            {/* Detalles */}
            <div className="space-y-8">
              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Strain Type
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {category.strainType}
                </p>
              </div>

              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Effects
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.effects.map((effect, i) => (
                    <span
                      key={i}
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
                  {category.strainName}
                </p>
              </div>

              <button
                className={`px-8 py-4 ${category.gradient} text-white font-poppins-bold text-lg rounded-2xl`}
                onClick={() => navigate("/faqs")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product2gThca;
