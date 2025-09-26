import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import razHeroImage from '@/assets/banner-razz-labtesting.jpg';
import razHeroMobile from '@/assets/banner-razz-mobile.jpg';

const faqs = [
  {
    id: "item-1",
    question: "What is THC-P and how is it different from regular THC?",
    answer: "THC-P (Tetrahydrocannabiphorol) is a naturally occurring cannabinoid that is significantly more potent than Delta-9 THC. It binds more effectively to CB1 receptors, potentially offering stronger and longer-lasting effects. Our products are infused with premium THC-P diamonds for an enhanced experience."
  },
  {
    id: "item-2",
    question: "Are RAZ Pre-Rolls legal and federally compliant?",
    answer: "Yes, all RAZ Pre-Roll products are 100% federally compliant and made with USA indoor-grown cannabis. We ensure all products meet legal requirements and undergo independent lab testing for quality and safety verification."
  },
  {
    id: "item-3",
    question: "How much THC-P is in each pre-roll?",
    answer: "Each RAZ Pre-Roll contains 1.5 grams of premium cannabis infused with THC-P diamonds. The exact THC-P concentration varies by strain and batch. Please refer to the lab results for your specific product and batch number for detailed cannabinoid profiles."
  },
  {
    id: "item-4",
    question: "What strains are available?",
    answer: "RAZ offers three distinct strain profiles: Alaskan Thunderfuck (Sativa), Alien Cookies (Hybrid), and Strawberry Kush (Indica). Each strain provides unique flavor profiles and effects to suit different preferences and experiences."
  },
  {
    id: "item-5",
    question: "How should I store my RAZ Pre-Rolls?",
    answer: "Store your RAZ Pre-Rolls in a cool, dry place away from direct sunlight and heat. Keep them in their original packaging or an airtight container to maintain freshness and potency. Proper storage will preserve the quality and flavor of your pre-rolls."
  },
  {
    id: "item-6",
    question: "Are the products lab tested?",
    answer: "Absolutely! All RAZ Pre-Roll products undergo rigorous independent lab testing for potency, pesticides, heavy metals, residual solvents, and microbials. Lab results are available for each batch and can be accessed using the batch number on your product packaging."
  },
  {
    id: "item-7",
    question: "What makes RAZ Pre-Rolls different from other brands?",
    answer: "RAZ Pre-Rolls are crafted with 100% USA indoor-grown cannabis and infused with premium THC-P diamonds for enhanced potency and experience. Our precision manufacturing, quality control, and commitment to using only the finest ingredients set us apart in the market."
  },
  {
    id: "item-8",
    question: "Can I purchase RAZ products online?",
    answer: "This website is for informational purposes only. RAZ does not sell products directly online. Please visit authorized retailers in your area to purchase our premium pre-roll products. Use our retailer locator to find the nearest authorized dispensary."
  }
];

const FAQs = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] bg-raz-black flex items-center justify-center overflow-hidden">
        {/* Desktop Image */}
        <motion.img
          src={razHeroImage}
          alt="RAZ THC-P Diamond Infused Pre-Rolls"
          className="hidden lg:block w-full h-auto object-contain opacity-70"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {/* Mobile/Tablet Image */}
        <motion.img
          src={razHeroMobile}
          alt="RAZ THC-P Diamond Infused Pre-Rolls"
          className="block lg:hidden w-full h-full object-cover opacity-70"
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
          <h1 className="font-druk text-4xl lg:text-6xl text-white text-center drop-shadow-2xl">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Find answers to common questions about RAZ Pre-Roll products, ingredients, usage, and more. If you can't find what you're looking for, don't hesitate to contact our team.
            </p>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 mb-12 border border-primary/20"
          >
            <p className="text-center text-muted-foreground">
              <strong className="text-foreground">Important Notice:</strong> This website is for informational purposes only. 
              RAZ does not handle online sales of products. Please visit authorized retailers to purchase our premium pre-roll products.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="glass rounded-2xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-poppins-bold text-foreground hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h3 className="font-druk text-2xl text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-8">
              Our team is here to help with any additional questions you may have.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-poppins-bold text-lg rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default FAQs;