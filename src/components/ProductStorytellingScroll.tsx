import { Scale, Users, CheckCircle } from 'lucide-react';

const productFeatures = [
  {
    id: 1,
    value: "1.5G",
    label: "Premium Weight",
    description: "Perfect pre-roll size for an optimal experience",
    icon: Scale,
    color: "from-blue-400 to-cyan-600",
  },
  {
    id: 2,
    value: "3",
    label: "Unique Strains",
    description: "Hybrid, Indica, and Sativa profiles available",
    icon: Users,
    color: "from-purple-400 to-pink-600",
  },
  {
    id: 3,
    value: "100%",
    label: "Federally Compliant",
    description: "Legal and certified for your peace of mind",
    icon: CheckCircle,
    color: "from-green-400 to-emerald-600",
  }
];

const ProductStorytellingScroll = () => {
  return (
    <section className="py-20 overflow-hidden bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground mb-4">
            RAZ delivers an unparalleled smoking experience with precision-crafted pre-rolls that blend innovation with tradition.
          </p>
        </div>

        {/* Interactive Product Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {productFeatures.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group relative cursor-pointer"
              >
                {/* Main Feature Card */}
                <div className="glass rounded-3xl p-8 text-center relative overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-neon">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-700`} />
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:shadow-neon transition-all duration-500`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>

                  {/* Feature Value */}
                  <div className="mb-4">
                    <span className="font-druk text-6xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.value}
                    </span>
                  </div>

                  {/* Feature Label */}
                  <h3 className="font-poppins-bold text-xl text-foreground mb-3">
                    {feature.label}
                  </h3>
                  
                  {/* Feature Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(2)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-1000`}
                        style={{
                          left: `${30 + i * 40}%`,
                          top: `${20 + i * 30}%`,
                          animationDelay: `${i * 0.3}s`,
                          animation: 'float 3s ease-in-out infinite'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins-bold text-lg rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105">
            Shop RAZ Pre-Rolls
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductStorytellingScroll;