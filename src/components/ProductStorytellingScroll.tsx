import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import bannerImage from '@/assets/banner-01.jpg';
import alaskanTitle from '@/assets/alaskan-title.png';
import alienCookiesLogo from '@/assets/alien-cookies-logo.png';
import strawberryKushLogo from '@/assets/strawberry-kush-logo.png';
const strainFeatures = [{
  id: 1,
  name: "Alazkan Thunderf*ck",
  logo: alaskanTitle,
  color: "from-blue-400 to-cyan-600",
  hoverColor: "group-hover:text-blue-400",
  underlineColor: "bg-blue-400"
}, {
  id: 2,
  name: "Alien Cookies",
  logo: alienCookiesLogo,
  color: "from-green-400 to-emerald-600",
  hoverColor: "group-hover:text-green-400",
  underlineColor: "bg-green-400"
}, {
  id: 3,
  name: "Strawberry Kush",
  logo: strawberryKushLogo,
  color: "from-red-400 to-rose-600",
  hoverColor: "group-hover:text-red-400",
  underlineColor: "bg-red-400"
}];
const ProductStorytellingScroll = () => {
  const navigate = useNavigate();
  return <motion.section className="py-20 overflow-hidden bg-background relative" initial={{
    opacity: 0,
    y: 50
  }} whileInView={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.8
  }} viewport={{
    once: true
  }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Half - Content */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="font-druk text-4xl lg:text-5xl text-foreground mb-6">
                Lab Reports
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                RAZ delivers an unparalleled smoking experience with precision-crafted pre-rolls that blend innovation with tradition.
              </p>
            </div>

            {/* Interactive Strain Features Grid */}
            <div className="grid grid-cols-1 gap-6">
              {strainFeatures.map(strain => {
                return <div key={strain.id} className="relative">
                  {/* Main Feature Card */}
                  <div 
                    className="glass rounded-2xl p-6 relative overflow-hidden cursor-pointer group hover:scale-[1.02] transition-all duration-300 hover:shadow-lg border border-white/10 hover:border-white/20"
                    onClick={() => window.open('/lab-reports.pdf', '_blank')}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${strain.color} opacity-10 group-hover:opacity-15 transition-opacity duration-300`} />
                    
                    <div className="flex items-center gap-6 relative z-10">
                      {/* Logo */}
                      <div className="w-20 h-20 flex items-center justify-center">
                        <img 
                          src={strain.logo} 
                          alt={strain.name} 
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        {/* Strain Name */}
                        <h3 className={`font-druk text-2xl text-foreground mb-2 ${strain.hoverColor} transition-colors duration-300`}>
                          {strain.name}
                        </h3>
                        
                        {/* View Lab Reports Text with Underline */}
                        <p className="text-muted-foreground text-base group-hover:text-foreground transition-colors duration-300 font-medium relative">
                          <span className="relative inline-block">
                            View Lab Reports
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${strain.underlineColor} transition-all duration-300 group-hover:w-full`}></span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>;
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center lg:text-left mt-8">
              <button onClick={() => navigate('/lab-testing')} className="px-8 py-4 bg-gradient-holographic font-poppins-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-neon text-slate-950">
                View Lab Testing
              </button>
            </div>
          </div>

          {/* Right Half - Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img src={bannerImage} alt="RAZ Pre-roll Products" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>;
};
export default ProductStorytellingScroll;