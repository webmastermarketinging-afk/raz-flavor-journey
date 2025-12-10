import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import razLogo from "@/assets/logo_raz.png";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Lab Testing", href: "/lab-testing" },
  { name: "Contact Us", href: "/contact" },
  { name: "Wholesale Portal", href: "/wholesale-portal" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false); // dropdown desktop
  const location = useLocation();

  // cerrar menús cuando cambia de ruta
  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [location]);

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
            <div className="hidden md:flex items-center space-x-6">
              {/* Items normales */}
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? "bg-gradient-holographic-dark text-black shadow-neon"
                        : "text-black hover:text-primary hover:shadow-glass"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Dropdown PRODUCTS */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsProductsOpen((prev) => !prev)}
                  className="px-4 py-2 rounded-full font-poppins-bold text-sm text-black hover:text-primary hover:shadow-glass transition-all duration-300 flex items-center gap-1"
                >
                  Products
                  <span className="text-xs">▾</span>
                </button>

                {/* Menú desplegable */}
                <div
                  className={`absolute left-0 mt-2 w-64 rounded-2xl bg-white shadow-lg border border-black/5 transition-opacity duration-200 z-50 ${
                    isProductsOpen
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  {/* 🔴 IMPORTANTE: ahora usamos las rutas nuevas, NO /lab-testing#... */}
                  <Link
                    to="/products/2g-thcp"
                    className="block px-4 py-3 text-sm rounded-t-2xl hover:bg-black/5 transition-colors"
                  >
                    <div className="font-poppins-bold">2G THCP</div>
                    <p className="text-xs text-slate-500">
                      Diamond infused 2G prerolls.
                    </p>
                  </Link>

                  <Link
                    to="/products/2g-thca"
                    className="block px-4 py-3 text-sm hover:bg-black/5 transition-colors"
                  >
                    <div className="font-poppins-bold">2G THCA</div>
                    <p className="text-xs text-slate-500">
                      THCA prerolls 2G lineup.
                    </p>
                  </Link>

                  <Link
                    to="/products/1-5g-thcp"
                    className="block px-4 py-3 text-sm rounded-b-2xl hover:bg-black/5 transition-colors"
                  >
                    <div className="font-poppins-bold">1.5G THCP</div>
                    <p className="text-xs text-slate-500">
                      Diamond infused 1.5G prerolls.
                    </p>
                  </Link>
                </div>
              </div>
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
            isOpen
              ? "transform translate-y-0 opacity-100"
              : "transform -translate-y-4 opacity-0"
          }`}
        >
          <div className="space-y-4">
            {/* Links normales */}
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "bg-gradient-holographic-dark text-black shadow-neon"
                      : "text-foreground hover:bg-white/5 hover:shadow-glass"
                  }`}
                >
                  <span className="font-poppins-bold text-lg">
                    {item.name}
                  </span>
                </Link>
              );
            })}

            {/* Sección PRODUCTS en móvil */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="font-poppins-bold text-lg text-foreground mb-2">
                Products
              </p>
              <div className="space-y-2">
                <Link
                  to="/products/2g-thcp"
                  className="flex items-center p-3 rounded-xl text-sm text-foreground hover:bg-white/5 hover:shadow-glass transition-all duration-300"
                >
                  2G THCP
                </Link>
                <Link
                  to="/products/2g-thca"
                  className="flex items-center p-3 rounded-xl text-sm text-foreground hover:bg-white/5 hover:shadow-glass transition-all duration-300"
                >
                  2G THCA
                </Link>
                <Link
                  to="/products/1-5g-thcp"
                  className="flex items-center p-3 rounded-xl text-sm text-foreground hover:bg-white/5 hover:shadow-glass transition-all duration-300"
                >
                  1.5G THCP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
