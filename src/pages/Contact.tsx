import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import razHeroImage from '@/assets/banner-razz-labtesting.jpg';
import razHeroMobile from '@/assets/banner-razz-mobile.jpg';
import bannerImage from '@/assets/banner-01.jpg';

// Form validation schema
const contactFormSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(50, 'First name must be less than 50 characters'),
  lastName: z.string().trim().min(1, 'Last name is required').max(50, 'Last name must be less than 50 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().min(10, 'Phone number must be at least 10 digits').max(20, 'Phone number must be less than 20 characters'),
  department: z.string().min(1, 'Please select a department'),
  comments: z.string().trim().max(1000, 'Comments must be less than 1000 characters').optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      comments: '',
    },
  });

  const onSubmit = (data: ContactFormData) => {
    // Here you would typically send the data to your backend
    console.log('Contact form data:', data);
    
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    
    // Reset form after successful submission
    form.reset();
  };
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
          <h1 className="font-druk text-5xl lg:text-7xl text-white text-center drop-shadow-2xl">
            CONTACT US
          </h1>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Left Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have questions? Reach our team by filling out the form below.
              </p>

              {/* Contact Form */}
              <div className="bg-card p-6 rounded-2xl border shadow-lg">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="First name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your@email.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Department Dropdown */}
                    <FormField
                      control={form.control}
                      name="department"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Department</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select a department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-background border shadow-md z-50">
                              <SelectItem value="customer-services">Customer Services</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="media-marketing">Media & Marketing</SelectItem>
                              <SelectItem value="wholesaler">Wholesaler</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Comments */}
                    <FormField
                      control={form.control}
                      name="comments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Comments</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us how we can help you..."
                              className="min-h-[100px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
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