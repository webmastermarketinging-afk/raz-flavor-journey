// src/components/Navigation.tsx
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

const productLinks = [
  { name: "2G THCP", href: "/products/2g-thcp" },
  { name: "2G THCA", href: "/products/2g-thca" },
  { name: "1.5G THCP", href: "/products/1-5g-thcp" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // menú mobile
  const [isProductsOpen, setIsProductsOpen] = useState(false); // dropdown desktop
  const [isProductsMobileOpen, setIsProductsMobileOpen] = useState(false); // dropdown mobile
  const location = useLocation();

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
    setIsProductsMobileOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop / main nav */}
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

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems
                .filter((item) => item.name !== "Wholesale Portal") // lo metemos al final
                .map((item) => {
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

              {/* Dropdown PRODUCTS (desktop) */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                    location.pathname.startsWith("/products")
                      ? "bg-gradient-holographic-dark text-black shadow-neon"
                      : "text-black hover:text-primary hover:shadow-glass"
                  }`}
                >
                  Products
                </button>

                {isProductsOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-raz-black/95 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl py-2 z-40">
                    {productLinks.map((prod) => (
                      <Link
                        key={prod.name}
                        to={prod.href}
                        className="block px-4 py-2 text-sm text-raz-black dark:text-foreground hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                      >
                        {prod.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Wholesale Portal al final */}
              {navigationItems
                .filter((item) => item.name === "Wholesale Portal")
                .map((item) => {
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
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
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

      {/* Mobile overlay */}
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
          <div className="space-y-3">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "bg-gradient-holographic-dark text-black shadow-neon"
                      : "text-foreground hover:bg-white/5 hover:shadow-glass"
                  }`}
                >
                  <span className="font-poppins-bold text-lg">{item.name}</span>
                </Link>
              );
            })}

            {/* Dropdown Products (mobile) */}
            <div className="border-t border-white/10 pt-4 mt-4">
              <button
                onClick={() =>
                  setIsProductsMobileOpen((prev) => !prev)
                }
                className="w-full flex justify-between items-center p-3 rounded-xl text-foreground hover:bg-white/5 transition-all duration-300"
              >
                <span className="font-poppins-bold text-lg">Products</span>
                <span className="text-sm">
                  {isProductsMobileOpen ? "▲" : "▼"}
                </span>
              </button>

              {isProductsMobileOpen && (
                <div className="mt-2 space-y-2 pl-4">
                  {productLinks.map((prod) => (
                    <Link
                      key={prod.name}
                      to={prod.href}
                      className="block px-3 py-2 rounded-lg text-sm text-foreground hover:bg-white/5 transition-colors"
                    >
                      {prod.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
