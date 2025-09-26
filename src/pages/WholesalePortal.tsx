import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import razHeroImage from '@/assets/banner-razz-labtesting.jpg';
import razHeroMobile from '@/assets/banner-razz-mobile.jpg';

// Validation schema
const wholesaleFormSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(50, 'First name must be less than 50 characters'),
  lastName: z.string().trim().min(1, 'Last name is required').max(50, 'Last name must be less than 50 characters'),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  companyName: z.string().trim().min(1, 'Company name is required').max(100, 'Company name must be less than 100 characters'),
  phone: z.string().trim().min(10, 'Phone number must be at least 10 digits').max(20, 'Phone number must be less than 20 characters'),
  message: z.string().trim().max(500, 'Message must be less than 500 characters').optional(),
  shippingAddress: z.string().trim().min(1, 'Shipping address is required').max(200, 'Address must be less than 200 characters'),
  businessLicense: z.any().optional(),
  vapeLicense: z.any().optional(),
  einDocument: z.any().optional(),
});

type WholesaleFormData = z.infer<typeof wholesaleFormSchema>;

const WholesalePortal = () => {
  const { toast } = useToast();
  
  const form = useForm<WholesaleFormData>({
    resolver: zodResolver(wholesaleFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      phone: '',
      message: '',
      shippingAddress: '',
    },
  });

  const onSubmit = (data: WholesaleFormData) => {
    // Here you would typically send the data to your backend
    console.log('Wholesale form data:', data);
    
    toast({
      title: "Application Submitted",
      description: "Thank you for your wholesale application. We'll review it and get back to you soon.",
    });
    
    // Reset form after successful submission
    form.reset();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative w-full min-h-[40vh] bg-raz-black flex items-center justify-center overflow-hidden">
        {/* Desktop Image */}
        <motion.img
          src={razHeroImage}
          alt="RAZ Wholesale Portal"
          className="hidden lg:block w-full h-auto object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {/* Mobile/Tablet Image */}
        <motion.img
          src={razHeroMobile}
          alt="RAZ Wholesale Portal"
          className="block lg:hidden w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            WHOLESALE PORTAL
          </motion.h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Register Now
            </h2>
            <p className="text-muted-foreground text-lg">
              Join our wholesale program and become a RAZ retailer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-lg shadow-lg border"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your first name" {...field} />
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
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your company name" {...field} />
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
                        <FormLabel>Phone/Mobile *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Additional Information</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us more about your business..."
                          className="min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Shipping Address */}
                <FormField
                  control={form.control}
                  name="shippingAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shipping Address *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your complete shipping address"
                          className="min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* File Uploads */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="businessLicense">Business License Image</Label>
                    <Input 
                      id="businessLicense"
                      type="file" 
                      accept="image/*,.pdf"
                      className="mt-2"
                      {...form.register('businessLicense')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="vapeLicense">OTP/Vape/Tobacco License</Label>
                    <Input 
                      id="vapeLicense"
                      type="file" 
                      accept="image/*,.pdf"
                      className="mt-2"
                      {...form.register('vapeLicense')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="einDocument">Federal EIN Document (FEIN)</Label>
                    <Input 
                      id="einDocument"
                      type="file" 
                      accept="image/*,.pdf"
                      className="mt-2"
                      {...form.register('einDocument')}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WholesalePortal;