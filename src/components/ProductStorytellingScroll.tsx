import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scale, Users, CheckCircle } from 'lucide-react';
import bannerImage from '@/assets/banner-01.jpg';

const productFeatures = [{
  id: 1,
  value: "1.5G",
  label: "Premium Weight",
  description: "Perfect pre-roll size for an optimal experience",
  icon: Scale,
  color: "from-blue-400 to-cyan-600"
}, {
  id: 2,
  value: "3",
  label: "Unique Strains",
  description: "Hybrid, Indica, and Sativa profiles available",
  icon: Users,
  color: "from-purple-400 to-pink-600"
}, {
  id: 3,
  value: "100%",
  label: "Federally Compliant",
  description: "Legal and certified for your peace of mind",
  icon: CheckCircle,
  color: "from-green-400 to-emerald-600"
}];

const ProductStorytellingScroll = () => {
  return <motion.section 
    className="py-20 overflow-hidden bg-background relative"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Half - Content */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="font-druk text-4xl lg:text-5xl text-foreground mb-6">
                Lab Tested
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                RAZ delivers an unparalleled smoking experience with precision-crafted pre-rolls that blend innovation with tradition.
              </p>
            </div>

            {/* Interactive Product Features Grid */}
            <div className="grid grid-cols-1 gap-6">
              {productFeatures.map(feature => {
                const IconComponent = feature.icon;
                return <div key={feature.id} className="relative">
                  {/* Main Feature Card */}
                  <div className="glass rounded-2xl p-6 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10`} />
                    
                    <div className="flex items-center gap-4 relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex-1">
                        {/* Feature Value and Label */}
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className="font-druk text-3xl text-foreground">
                            {feature.value}
                          </span>
                          <span className="font-poppins-bold text-lg text-foreground">
                            {feature.label}
                          </span>
                        </div>
                        
                        {/* Feature Description */}
                        <p className="text-muted-foreground text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>;
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center lg:text-left mt-8">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins-bold text-lg rounded-2xl transition-all duration-300">
                View All Products
              </button>
            </div>
          </div>

          {/* Right Half - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img 
                src={bannerImage} 
                alt="RAZ Pre-roll Products" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>;
};
export default ProductStorytellingScroll;