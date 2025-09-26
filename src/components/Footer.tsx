import { Link } from 'react-router-dom';
import razLogo from '@/assets/logo_raz.png';

const navigationItems = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Lab Testing',
    href: '/lab-testing'
  },
  {
    name: 'Contact Us',
    href: '/contact'
  },
  {
    name: 'Wholesale Portal',
    href: '/wholesale-portal'
  }
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative overflow-hidden">
      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black opacity-90"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Link to="/" className="hover:scale-105 transition-all duration-300 hover:brightness-110">
              <img src={razLogo} alt="RAZ" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm text-center md:text-left">
              Premium Cannabis Products
            </p>
          </div>

          {/* Navigation Menu - Horizontal */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-poppins-bold mb-4 text-lg text-white">Quick Links</h3>
            <div className="flex flex-wrap gap-6">
              {navigationItems.map(item => (
                <Link 
                  key={item.name} 
                  to={item.href} 
                  className="text-gray-400 hover:text-white transition-colors duration-300 font-medium text-sm hover:scale-105 transform"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6">
          <div className="text-center space-y-4">
            <p className="text-sm font-medium text-white">
              © 2025 Raz
            </p>
            
            <div className="max-w-5xl mx-auto">
              <p className="text-xs text-gray-500 leading-relaxed">
                Products on this site contain a value of 0.3% or less Δ9THC (or no more than 0.3% Δ9THC).
              </p>
              <br />
              <p className="text-xs text-gray-500 leading-relaxed">
                <strong className="text-gray-400">FDA Disclosure:</strong> This product is not for use by or sale to persons under the age of 18 or 21 depending on the laws of your governing state or territory. This product should be used only as directed on the label. It should not be used if you are pregnant or nursing. Consult with a physician before use, especially if you have a medical condition or use prescription medications. A doctor's advice should be sought before using any of these products. All trademarks and copyrights are property of their respective owners and are not affiliated with nor do they endorse this product. These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure or prevent any disease. By using this site you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. Void Where Prohibited By Law.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;