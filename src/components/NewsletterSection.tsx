import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import rainbowBackground from '@/assets/rainbow-background.png';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <motion.section 
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${rainbowBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Half - Newsletter Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-druk text-4xl lg:text-5xl text-foreground mb-6">
                Stay Connected
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter and be the first to know about new products, exclusive offers, and RAZ updates.
              </p>
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-lg"
              >
                Subscribe Now
              </button>
            </form>

            {/* Benefits */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Exclusive product launches</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Special member discounts</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Educational content & tips</span>
              </div>
            </div>
          </div>

          {/* Right Half - Video */}
          <div className="relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                preload="metadata"
              >
                <source 
                  src="https://unicoscomotu.com/SEA/wp-content/uploads/2025/09/Video-de-WhatsApp-2025-09-22-a-las-09.22.02_a228bc02.mp4" 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default NewsletterSection;