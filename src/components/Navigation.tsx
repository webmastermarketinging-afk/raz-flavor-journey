import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import razLogo from "@/assets/logo_raz.png";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Lab Testing", href: "/lab-testing" },
  { name: "Contact Us", href: "/contact" },
  { name: "Wholesale Portal", href: "/wholesale-portal" }, // Updated for Vercel deployment
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // menú móvil
  const [isProductsOpen, setIsProductsOpen] = useState(false); // dropdown Products (desktop)
  const location = useLocation();

  useEffect(() => {
    // Cierra menús al cambiar de ruta
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="glass backdrop-blur-xl shadow-glass sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img src={razLogo} alt="RAZ" className="h-8 md:h-10 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home */}
              <Link
                to="/"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                  isActive("/")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-black hover:text-primary hover:shadow-glass"
                }`}
              >
                Home
              </Link>

              {/* Products dropdown (desktop) */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsProductsOpen((prev) => !prev)}
                  className="px-4 py-2 rounded-full font-poppins-bold text-sm text-black hover:text-primary hover:shadow-glass transition-all duration-300 flex items-center gap-1"
                >
                  Products
                  <span className="text-xs">▾</span>
                </button>

                <div
                  className={`absolute left-0 mt-2 w-56 rounded-2xl bg-white shadow-lg border border-black/5 transition-opacity duration-200 z-50 ${
                    isProductsOpen
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Link
                    to="/lab-testing#thcp-15g"
                    className="block px-4 py-3 text-sm rounded-t-2xl hover:bg-black/5 transition-colors"
                  >
                    <div className="font-poppins-bold">THCP 1.5g</div>
                    <p className="text-xs text-slate-500">
                      Diamond infused pre-rolls 1.5g.
                    </p>
                  </Link>
                  <Link
                    to="/lab-testing#thcp-2g"
                    className="block px-4 py-3 text-sm hover:bg-black/5 transition-colors"
                  >
                    <div className="font-poppins-bold">THCP 2g</div>
                    <p className="text-xs text-slate-500">
                      High potency 2g THCP pre-rolls.
                    </p>
                  </Link>
                  <Link
                    to="/lab-testing#thca-2g"
                    className="block px-4 py-3 text-sm rounded-b-2xl hover:bg-black/5 transition-colors"
                  >
                    <div className="font-poppins-bold">THCA 2g</div>
                    <p className="text-xs text-slate-500">
                      THCA diamond infused pre-rolls.
                    </p>
                  </Link>
                </div>
              </div>

              {/* Lab Testing */}
              <Link
                to="/lab-testing"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                  isActive("/lab-testing")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-black hover:text-primary hover:shadow-glass"
                }`}
              >
                Lab Testing
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                  isActive("/contact")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-black hover:text-primary hover:shadow-glass"
                }`}
              >
                Contact Us
              </Link>

              {/* Wholesale Portal */}
              <Link
                to="/wholesale-portal"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                  isActive("/wholesale-portal")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-black hover:text-primary hover:shadow-glass"
                }`}
              >
                Wholesale Portal
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg glass hover:shadow-neon transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-raz-black/90 backdrop-blur-xl" />

        <div
          className={`absolute top-20 left-4 right-4 glass rounded-2xl p-6 transition-all duration-300 ${
            isOpen ? "transform translate-y-0 opacity-100" : "transform -translate-y-4 opacity-0"
          }`}
        >
          <div className="space-y-4">
            {/* Bloque Products en mobile */}
            <div className="mb-4">
              <p className="font-poppins-bold text-lg text-foreground mb-2">
                Products
              </p>
              <div className="space-y-2">
                <Link
                  to="/lab-testing#thcp-15g"
                  className="flex items-center p-3 rounded-xl text-sm text-foreground hover:bg-white/5 hover:shadow-glass transition-all duration-300"
                >
                  THCP 1.5g
                </Link>
                <Link
                  to="/lab-testing#thcp-2g"
                  className="flex items-center p-3 rounded-xl text-sm text-foreground hover:bg-white/5 hover:shadow-glass transition-all duration-300"
                >
                  THCP 2g
                </Link>
                <Link
                  to="/lab-testing#thca-2g"
                  className="flex items-center p-3 rounded-xl text-sm text-foreground hover:bg-white/5 hover:shadow-glass transition-all duration-300"
                >
                  THCA 2g
                </Link>
              </div>
            </div>

            {/* Resto de links (Home, Lab Testing, Contact, Wholesale) */}
            {navigationItems.map((item, index) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    active
                      ? "bg-gradient-holographic-dark text-black shadow-neon"
                      : "text-foreground hover:bg-white/5 hover:shadow-glass"
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: isOpen ? "slide-in-left 0.5s ease-out forwards" : "none",
                  }}
                >
                  <span className="font-poppins-bold text-lg">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10" />
        </div>
      </div>
    </>
  );
};

export default Navigation;
