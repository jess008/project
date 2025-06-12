import React, { useState } from "react";
import { Menu, X, ShoppingBag, Phone, CakeSlice } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Produtos", href: "#products" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#C7E8CA] to-[#a8d4ac] rounded-full flex items-center justify-center">
              <CakeSlice className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                Doçura Encantada
              </h1>
              <p className="text-xs font-medium" style={{ color: "#C7E8CA" }}>
                Confeitaria Artesanal
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 font-medium transition-colors duration-200 relative group"
                style={{
                  "&:hover": { color: "#C7E8CA" },
                }}
                onMouseEnter={(e) => (e.target.style.color = "#C7E8CA")}
                onMouseLeave={(e) => (e.target.style.color = "#374151")}
              >
                {item.name}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full"
                  style={{ backgroundColor: "#C7E8CA" }}
                ></span>
              </a>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+5511999999999"
              className="hidden sm:flex items-center space-x-2 text-white px-4 py-2 rounded-full transition-colors duration-200"
              style={{
                backgroundColor: "#C7E8CA",
                "&:hover": { backgroundColor: "#a8d4ac" },
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#a8d4ac")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#C7E8CA")}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Ligar Agora</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 font-medium transition-colors duration-200 px-4 py-2 rounded-lg"
                  style={{
                    "&:hover": {
                      backgroundColor: "rgba(199, 232, 202, 0.1)",
                      color: "#C7E8CA",
                    },
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "rgba(199, 232, 202, 0.1)";
                    e.target.style.color = "#C7E8CA";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#374151";
                  }}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="tel:+5511999999999"
                className="mx-4 flex items-center justify-center space-x-2 text-white px-4 py-3 rounded-full transition-colors duration-200"
                style={{
                  backgroundColor: "#C7E8CA",
                  "&:hover": { backgroundColor: "#a8d4ac" },
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#a8d4ac")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#C7E8CA")
                }
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Ligar Agora</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
