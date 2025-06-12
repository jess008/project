import React from 'react';
import { ShoppingBag, Instagram, Facebook, Twitter, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Produtos", href: "#products" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contato", href: "#contact" }
  ];

  const categories = [
    { name: "Bolos Personalizados", href: "#" },
    { name: "Doces Finos", href: "#" },
    { name: "Tortas Artesanais", href: "#" },
    { name: "Cupcakes Gourmet", href: "#" },
    { name: "Eventos Especiais", href: "#" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C7E8CA 0%, #a8d4ac 100%)' }}>
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Doçura Encantada</h3>
                <p className="text-sm" style={{ color: '#C7E8CA' }}>Confeitaria Artesanal</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Criando momentos especiais com doces artesanais feitos com amor e ingredientes 
              selecionados há mais de 10 anos.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 bg-gray-800 rounded-lg transition-colors duration-200 group"
                  style={{
                    '&:hover': { backgroundColor: '#C7E8CA' }
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#C7E8CA'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1f2937'}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-200">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 transition-colors duration-200 flex items-center group"
                    style={{
                      '&:hover': { color: '#C7E8CA' }
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#C7E8CA'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                  >
                    <span className="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: '#C7E8CA' }}></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Especialidades</h4>
            <ul className="space-y-3">
              {categories.map((category, index) => (
                <li key={index}>
                  <a
                    href={category.href}
                    className="text-gray-400 transition-colors duration-200 flex items-center group"
                    onMouseEnter={(e) => e.target.style.color = '#C7E8CA'}
                    onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                  >
                    <span className="w-2 h-2 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ backgroundColor: '#C7E8CA' }}></span>
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#C7E8CA' }} />
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Rua das Flores, 123<br />
                    Centro, São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0" style={{ color: '#C7E8CA' }} />
                <a 
                  href="tel:+5511999999999" 
                  className="text-gray-400 transition-colors duration-200"
                  onMouseEnter={(e) => e.target.style.color = '#C7E8CA'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  (11) 9 9999-9999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0" style={{ color: '#C7E8CA' }} />
                <a 
                  href="mailto:contato@docuraencantada.com.br" 
                  className="text-gray-400 transition-colors duration-200"
                  onMouseEnter={(e) => e.target.style.color = '#C7E8CA'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  contato@docuraencantada.com.br
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <h5 className="font-semibold mb-2" style={{ color: '#C7E8CA' }}>Horários</h5>
              <div className="text-sm text-gray-400 space-y-1">
                <p>Seg - Sáb: 8h às 18h</p>
                <p>Domingo: 9h às 15h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Doçura Encantada. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="w-4 h-4 fill-current" style={{ color: '#C7E8CA' }} />
              <span>para você</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-gray-400 transition-colors duration-200"
                onMouseEnter={(e) => e.target.style.color = '#C7E8CA'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                Política de Privacidade
              </a>
              <a 
                href="#" 
                className="text-gray-400 transition-colors duration-200"
                onMouseEnter={(e) => e.target.style.color = '#C7E8CA'}
                onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;