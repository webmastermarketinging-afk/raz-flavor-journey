import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import alaskanThunderfuckBox from "@/assets/alaskan-thunderfuck-box.png";
import strawberryKushBox from "@/assets/strawberry-kush-box.png";
import alienCookiesBox from "@/assets/alien-cookies-box.png";

const images = [alaskanThunderfuckBox, alienCookiesBox, strawberryKushBox];

const Product15gThcp = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((p) => (p + 1) % images.length);
  const prev = () => setActive((p) => (p - 1 + images.length) % images.length);

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-poppins text-sm uppercase tracking-[0.35em] text-muted-foreground mb-2">
            Product
          </p>
          <h1 className="font-druk text-4xl md:text-6xl text-foreground">
            1.5G THCP
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated set of three strains: one sativa, one hybrid, and one indica.
            Each preroll is infused with THCP diamonds and rich terpenes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen / slider simple */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-black/5 p-4">
              <img
                src={images[active]}
                alt={`1.5G THCP view ${active + 1}`}
                className="w-full h-auto object-contain rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass border border-white/20 flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass border border-white/20 flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      i === active ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Texto / ficha */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h2 className="font-druk text-3xl text-foreground mb-3">
                Strain Type
              </h2>
              <p className="text-lg text-muted-foreground">
                Three carefully selected strains: an uplifting sativa, a balanced
                hybrid and a soothing indica. Each one tuned for a premium 1.5G
                preroll experience.
              </p>
            </div>

            <div>
              <h2 className="font-druk text-3xl text-foreground mb-3">
                Effects
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Sativa: Focused and energizing",
                  "Hybrid: Balanced and smooth",
                  "Indica: Calming and relaxing",
                ].map((effect) => (
                  <span
                    key={effect}
                    className="px-4 py-2 rounded-full bg-white/20 border border-white/30 text-sm font-poppins-bold text-foreground"
                  >
                    {effect}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-druk text-3xl text-foreground mb-3">
                Strain Name
              </h2>
              <p className="text-lg text-muted-foreground">
                Three signature strains chosen for standout flavor and consistent
                effects. Built for customers who want a reliable, diamond-infused
                1.5G THCP preroll every time.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Product15gThcp;
