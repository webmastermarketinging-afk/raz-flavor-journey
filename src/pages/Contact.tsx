import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import razHeroImage from '@/assets/raz-hero-products.jpg';
import bannerImage from '@/assets/banner-01.jpg';

const Contact = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] bg-raz-black flex items-center justify-center overflow-hidden">
        <motion.img
          src={razHeroImage}
          alt="RAZ THC-P Diamond Infused Pre-Rolls"
          className="w-full h-auto object-contain opacity-70"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="font-druk text-5xl lg:text-7xl text-white text-center drop-shadow-2xl">
            CONTACT US
          </h1>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have questions about our products or need more information? Get in touch with our team and we'll be happy to help.
              </p>

              {/* Contact Cards */}
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins-bold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">info@razprerolls.com</p>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins-bold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">1-800-RAZ-ROLL</p>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins-bold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">Mon-Fri: 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-poppins-bold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">California, USA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img 
                  src={bannerImage} 
                  alt="RAZ Contact" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-druk text-3xl lg:text-4xl text-foreground mb-4">
              Ready to Experience RAZ?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find authorized retailers near you to purchase our premium pre-roll products.
            </p>
            <button 
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
              onClick={() => window.location.href = 'mailto:info@razprerolls.com'}
            >
              Find Retailers
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;