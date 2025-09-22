const features = [
  'Premium THC-P Diamond Infused',
  '1.5G Pre-Roll Perfection',
  '100% Federally Compliant',
  'Florida Cannabinoids Certified',
  'Child-Proof Packaging',
  'Legally Verified & Approved',
  'Three Distinct Strain Profiles',
  'Laboratory Tested Quality',
  'Premium Hemp Flower',
  'Expert Crafted Blends'
];

const InfiniteScroll = () => {
  return (
    <section className="py-16 overflow-hidden border-y border-border bg-raz-black" style={{ backgroundColor: 'hsl(var(--raz-black))' }}>
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
          {[...features.slice().reverse(), ...features.slice().reverse()].map((feature, index) => (
            <div
              key={index}
              className="inline-flex items-center mx-8 flex-shrink-0"
            >
              <div className="w-2 h-2 bg-secondary rounded-full mx-6 flex-shrink-0" />
              <span className="font-poppins-bold text-lg md:text-2xl text-white/70">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteScroll;