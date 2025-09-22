import { Link } from 'react-router-dom';
import razLogo from '@/assets/raz-logo.png';
const navigationItems = [{
  name: 'Home',
  href: '/'
}, {
  name: 'Lab Test',
  href: '/lab-test'
}, {
  name: 'Contact',
  href: '/contact'
}, {
  name: 'FAQs',
  href: '/faqs'
}, {
  name: 'Learn',
  href: '/learn'
}];
const Footer = () => {
  return <footer className="text-white py-16 bg-[#2ab2ff]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link to="/" className="hover:scale-105 transition-transform duration-300">
              <img src={razLogo} alt="RAZ" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Navigation Menu - Vertical */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="font-poppins-bold mb-2 text-xl text-gray-50">Navigation</h3>
            <div className="flex flex-col space-y-3">
              {navigationItems.map(item => <Link key={item.name} to={item.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
                  {item.name}
                </Link>)}
            </div>
          </div>

          {/* Contact Info or Additional Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-poppins-bold text-primary mb-2">Contact</h3>
            <div className="text-muted-foreground space-y-2">
              <p>Premium Cannabis Products</p>
              <p>Experience the RAZ difference</p>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="text-center space-y-4">
            <p className="text-sm text-slate-50">
              © 2025 Razz Retail, LLC
            </p>
            
            <div className="max-w-4xl mx-auto text-xs text-muted-foreground leading-relaxed">
              <p className="mb-2 text-slate-50 font-extralight">
                <strong>FDA Disclaimer:</strong> This product has not been evaluated by the Food and Drug Administration. 
                These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, 
                cure or prevent any disease or illness. Kratom information is available on the FDA website. 
                Read the FDA's advisories and comments on product concerns here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;