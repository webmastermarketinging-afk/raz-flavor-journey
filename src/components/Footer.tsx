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
  return <footer className="text-white py-8 bg-[#2ab2ff]" style={{ maxHeight: '300px' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="hover:scale-105 transition-transform duration-300">
              <img src={razLogo} alt="RAZ" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Navigation Menu - Vertical */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="font-poppins-bold mb-2 text-lg text-white">Navigation</h3>
            <div className="flex flex-col space-y-2">
              {navigationItems.map(item => <Link key={item.name} to={item.href} className="text-white/80 hover:text-white transition-colors duration-300 font-medium text-sm">
                  {item.name}
                </Link>)}
            </div>
          </div>

          {/* Contact Info or Additional Links */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <h3 className="text-lg font-poppins-bold text-white mb-2">Contact</h3>
            <div className="text-white/80 space-y-1">
              <p className="text-sm">Premium Cannabis Products</p>
              <p className="text-sm">Experience the RAZ difference</p>
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <div className="text-center space-y-2">
            <p className="text-xs text-white">
              © 2025 Razz Retail, LLC
            </p>
            
            <div className="max-w-4xl mx-auto text-xs text-white/70 leading-relaxed">
              <p className="font-extralight">
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