import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    eventType: 'aniversario'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      eventType: 'aniversario'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" style={{ color: '#C7E8CA' }} />,
      label: "Telefone",
      value: "(11) 9 9999-9999",
      action: "tel:+5511999999999"
    },
    {
      icon: <Mail className="w-6 h-6" style={{ color: '#C7E8CA' }} />,
      label: "E-mail",
      value: "contato@docuraencantada.com.br",
      action: "mailto:contato@docuraencantada.com.br"
    },
    {
      icon: <MapPin className="w-6 h-6" style={{ color: '#C7E8CA' }} />,
      label: "Endereço",
      value: "Rua das Flores, 123 - Centro, São Paulo - SP",
      action: "#"
    },
    {
      icon: <Clock className="w-6 h-6" style={{ color: '#C7E8CA' }} />,
      label: "Horário",
      value: "Seg a Sáb: 8h às 18h | Dom: 9h às 15h",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#C7E8CA' }}>
            Contato
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Vamos Conversar sobre Seu Evento
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Entre em contato conosco para criar doces especiais para sua ocasião. 
            Estamos aqui para tornar seus momentos ainda mais doces!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="rounded-3xl p-8" style={{ background: 'linear-gradient(135deg, rgba(199, 232, 202, 0.1) 0%, rgba(255, 237, 213, 0.1) 100%)' }}>
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Faça seu Pedido</h4>
              <p className="text-gray-600">Preencha o formulário e entraremos em contato rapidamente</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 transition-all duration-200"
                    style={{
                      '&:focus': {
                        outline: 'none',
                        borderColor: '#C7E8CA',
                        boxShadow: '0 0 0 2px rgba(199, 232, 202, 0.2)'
                      }
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#C7E8CA';
                      e.target.style.boxShadow = '0 0 0 2px rgba(199, 232, 202, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 transition-all duration-200"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#C7E8CA';
                      e.target.style.boxShadow = '0 0 0 2px rgba(199, 232, 202, 0.2)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#d1d5db';
                      e.target.style.boxShadow = 'none';
                    }}
                    placeholder="(11) 9 9999-9999"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 transition-all duration-200"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#C7E8CA';
                    e.target.style.boxShadow = '0 0 0 2px rgba(199, 232, 202, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Evento
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 transition-all duration-200"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#C7E8CA';
                    e.target.style.boxShadow = '0 0 0 2px rgba(199, 232, 202, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  <option value="aniversario">Aniversário</option>
                  <option value="casamento">Casamento</option>
                  <option value="batizado">Batizado</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="formatura">Formatura</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 transition-all duration-200 resize-none"
                  onFocus={(e) => {
                    e.target.style.borderColor = '#C7E8CA';
                    e.target.style.boxShadow = '0 0 0 2px rgba(199, 232, 202, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#d1d5db';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Conte-nos mais sobre seu evento e o que você gostaria..."
                />
              </div>

              <button
                type="submit"
                className="w-full text-white py-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
                style={{ 
                  backgroundColor: '#C7E8CA',
                  '&:hover': { backgroundColor: '#a8d4ac' }
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#a8d4ac'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#C7E8CA'}
              >
                <Send className="w-5 h-5" />
                <span>Enviar Mensagem</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h4>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    className="flex items-start space-x-4 p-4 rounded-lg transition-colors duration-200 group"
                    style={{
                      '&:hover': { backgroundColor: 'rgba(199, 232, 202, 0.1)' }
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(199, 232, 202, 0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    <div 
                      className="flex-shrink-0 p-3 rounded-lg transition-colors duration-200"
                      style={{ 
                        backgroundColor: 'rgba(199, 232, 202, 0.2)',
                        '&:hover': { backgroundColor: 'rgba(199, 232, 202, 0.3)' }
                      }}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-1">{info.label}</div>
                      <div className="text-gray-600">{info.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-green-500 rounded-full">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-800">WhatsApp</h5>
                  <p className="text-sm text-gray-600">Resposta mais rápida</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Fale conosco pelo WhatsApp para um atendimento mais rápido e personalizado!
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="font-medium">Localização</p>
                <p className="text-sm">Rua das Flores, 123 - Centro</p>
                <p className="text-sm">São Paulo - SP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;