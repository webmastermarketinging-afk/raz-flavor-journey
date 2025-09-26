import { Link } from 'react-router-dom';
import razLogo from '@/assets/logo_raz.png';

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
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="hover:scale-105 transition-all duration-300 hover:brightness-110">
              <img src={razLogo} alt="RAZ" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Premium Cannabis Products
            </p>
          </div>

          {/* Navigation Menu */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-poppins-bold mb-4 text-lg text-white">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {navigationItems.map(item => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm hover:translate-x-1 transform"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-poppins-bold text-white mb-4">Experience</h3>
            <div className="text-gray-400 space-y-2 text-center md:text-left">
              <p className="text-sm">Premium Quality</p>
              <p className="text-sm">Lab Tested</p>
              <p className="text-sm">Trusted Experience</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="text-center space-y-4">
            <p className="text-sm font-medium text-white">
              © 2025 Raz
            </p>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">FDA Disclaimer:</strong> This product has not been evaluated by the Food and Drug Administration. 
                These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, 
                cure or prevent any disease or illness.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;