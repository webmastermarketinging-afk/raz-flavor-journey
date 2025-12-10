import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import thca2gSingle from "@/assets/2g-thca-single.jpg";
import thca2gProducts from "@/assets/2g-thca-products.jpg";
import thca2gBox from "@/assets/2g-thca-box.jpg";

const images = [thca2gSingle, thca2gProducts, thca2gBox];

const Product2gThca = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % images.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-6xl">
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
            2G THCA
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Offered in six strain varieties, including uplifting sativas,
            balanced hybrids, and relaxing indicas. Infused with THCA diamonds
            for a clean, powerful effect.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-black/5 p-4">
              <img
                src={images[active]}
                alt={`2G THCA view ${active + 1}`}
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
                Six strains available with uplifting, balanced or deeply
                relaxing profiles. Designed for clean combustion and a strong
                yet smooth THCA experience.
              </p>
            </div>

            <div>
              <h2 className="font-druk text-3xl text-foreground mb-3">
                Effects
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Clear",
                  "Strong",
                  "Aromatic",
                  "Balanced body and mind",
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
