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
  return <footer className="text-white py-6 bg-[#2ab2ff] h-[300px] overflow-hidden">
      <div className="container mx-auto px-4 h-full flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="hover:scale-105 transition-transform duration-300">
              <img src={razLogo} alt="RAZ" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Navigation Menu - Compact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-poppins-bold mb-2 text-base text-white">Navigation</h3>
            <div className="flex flex-col space-y-1">
              {navigationItems.map(item => <Link key={item.name} to={item.href} className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-xs">
                  {item.name}
                </Link>)}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-base font-poppins-bold text-white mb-2">Contact</h3>
            <div className="text-white/80">
              <p className="text-xs">Premium Cannabis Products</p>
              <p className="text-xs">Experience the RAZ difference</p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Disclaimer */}
        <div className="border-t border-white/10 pt-3">
          <div className="text-center space-y-2">
            <p className="text-xs text-white">
              © 2025 Razz Retail, LLC
            </p>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xs text-white/70 leading-tight font-extralight">
                <strong>FDA Disclaimer:</strong> This product has not been evaluated by the Food and Drug Administration. 
                These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, 
                cure or prevent any disease or illness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;