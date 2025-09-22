import { motion } from 'framer-motion';
import { Shield, Award, Leaf, FileCheck } from 'lucide-react';

const certifications = [
  {
    icon: Leaf,
    title: 'Florida Cannabinoids',
    description: 'Sourced from premium Florida-grown hemp farms with sustainable practices',
    color: 'text-green-400'
  },
  {
    icon: Shield,
    title: 'Child-Proof Packaging',
    description: 'Industry-leading safety standards with secure, child-resistant packaging',
    color: 'text-blue-400'
  },
  {
    icon: FileCheck,
    title: 'Legally Verified & Approved',
    description: 'Fully compliant with federal regulations and state-approved for distribution',
    color: 'text-yellow-400'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Third-party lab tested for potency, purity, and safety standards',
    color: 'text-purple-400'
  }
];

const ComplianceSection = () => {
  return (
    <motion.section 
      className="py-20 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-druk text-5xl md:text-7xl text-foreground neon-text mb-6">
            TRUSTED QUALITY
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every RAZ product meets the highest standards of quality, safety, and legal compliance. 
            Experience confidence with every puff.
          </p>
        </div>

        {/* Compliance grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="product-card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full glass mb-4 ${cert.color}`}>
                <cert.icon size={32} />
              </div>
              
              <h3 className="font-poppins-bold text-lg text-foreground mb-3">
                {cert.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Federal compliance banner */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 glass px-8 py-6 rounded-2xl">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              <span className="font-druk text-2xl text-foreground">
                100% FEDERALLY COMPLIANT
              </span>
            </div>
            <div className="h-8 w-px bg-border" />
            <div className="text-left">
              <p className="font-poppins-bold text-foreground text-lg">
                Hemp Flower with Total THC Concentration
              </p>
              <p className="text-muted-foreground">
                Less than 0.3% as required by federal law
              </p>
            </div>
          </div>
        </div>

        {/* Website and contact */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Learn more about our compliance standards and certifications
          </p>
          <a
            href="https://www.razbrand.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins-bold text-2xl text-foreground hover:text-primary transition-colors duration-300 neon-text"
          >
            www.razbrand.com
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ComplianceSection;