import { motion } from "framer-motion";

interface ProductFeatureProps {
  image: string;
  type: string;
  title: string;
  strainType: string;
  effects: string[];
  description: string;
  badge?: string;
  gradient?: string;
}

const ProductFeature = ({
  image,
  type,
  title,
  strainType,
  effects,
  description,
  badge,
  gradient = "from-green-400 to-emerald-600"
}: ProductFeatureProps) => {
  return (
    <motion.section
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* IMAGE BLOCK */}
        <div className="bg-white/50 shadow-xl rounded-3xl p-6 backdrop-blur border border-white/30">
          <img src={image} className="w-full rounded-2xl object-contain" />
        </div>

        {/* TEXT BLOCK */}
        <div>
          {badge && (
            <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-black/10">
              {badge}
            </span>
          )}

          <h2 className="font-druk text-4xl mb-4">{title}</h2>

          <p className="text-lg text-foreground mb-6">{strainType}</p>

          {/* Effects */}
          <div className="flex flex-wrap gap-3 mb-6">
            {effects.map((e, i) => (
              <span
                key={i}
                className="bg-black/5 px-4 py-2 rounded-full text-sm font-medium"
              >
                {e}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            {description}
          </p>

          <button className="px-8 py-4 bg-black/90 text-white rounded-xl font-poppins-bold hover:bg-black transition-all">
            Learn More
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default ProductFeature;
