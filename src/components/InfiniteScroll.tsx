const features = [
  'Florida Cannabinoids',
  'Child Proof Packaging',
  'Legally verified & approved',
];

const complianceText = '100% federally complaint hemp flower with total THC concentration less than 0.3%';

import { motion } from 'framer-motion';

const InfiniteScroll = () => {
  return (
    <motion.section 
      className="py-16 overflow-hidden border-y border-border bg-raz-black" 
      style={{ backgroundColor: 'hsl(var(--raz-black))' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="relative">
        {/* Primary scroll track */}
        <div className="flex whitespace-nowrap animate-scroll-x">
          {[...features, ...features].map((feature, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8 flex-shrink-0"
            >
              <span className="font-druk text-2xl md:text-4xl text-white">
                {feature}
              </span>
              <div className="w-3 h-3 bg-primary rounded-full mx-8 flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Secondary reverse scroll track */}
        <div className="flex whitespace-nowrap animate-scroll-x mt-8" style={{ animationDirection: 'reverse', animationDuration: '25s' }}>
          {Array(6).fill(complianceText).map((text, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8 flex-shrink-0"
            >
              <div className="w-2 h-2 bg-secondary rounded-full mx-6 flex-shrink-0" />
              <span className="font-poppins-bold text-lg md:text-2xl text-white/70">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default InfiniteScroll;