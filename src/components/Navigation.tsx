import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import razLogo from '@/assets/logo_raz.png';
const navigationItems = [{
  name: 'Home',
  href: '/'
}, {
  name: 'Lab Testing',
  href: '/lab-testing'
}, {
  name: 'Contact Us',
  href: '/contact'
}, {
  name: 'Wholesale Portal',
  href: '/faqs'
}];
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  return <>
      {/* Desktop Navigation */}
      <nav className="glass backdrop-blur-xl shadow-glass sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="hover:scale-105 transition-transform duration-300">
              <img src={razLogo} alt="RAZ" className="h-8 md:h-10 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map(item => {
              const isActive = location.pathname === item.href;
              return <Link key={item.name} to={item.href} className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${isActive ? 'bg-gradient-holographic-dark text-black shadow-neon' : 'text-black hover:text-primary hover:shadow-glass'}`}>
                    {item.name}
                  </Link>;
            })}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg glass hover:shadow-neon transition-all duration-300">
              {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-raz-black/90 backdrop-blur-xl" />
        
        <div className={`absolute top-20 left-4 right-4 glass rounded-2xl p-6 transition-all duration-300 ${isOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-4 opacity-0'}`}>
          <div className="space-y-4">
            {navigationItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return <Link key={item.name} to={item.href} className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${isActive ? 'bg-gradient-holographic-dark text-black shadow-neon' : 'text-foreground hover:bg-white/5 hover:shadow-glass'}`} style={{
              animationDelay: `${index * 0.1}s`,
              animation: isOpen ? 'slide-in-left 0.5s ease-out forwards' : 'none'
            }}>
                  <span className="font-poppins-bold text-lg">{item.name}</span>
                </Link>;
          })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 pt-6 border-t border-white/10">
            
          </div>
        </div>
      </div>
    </>;
};
export default Navigation;