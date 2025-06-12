import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ana Clara Santos",
      role: "Cliente Especial",
      content: "A Doçura Encantada transformou o aniversário da minha filha em um momento mágico! O bolo estava perfeito, tanto na aparência quanto no sabor. A equipe é extremamente atenciosa e profissional.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      id: 2,
      name: "Roberto Oliveira",
      role: "Evento Corporativo",
      content: "Contratamos a confeitaria para um evento da empresa e superou todas as expectativas. Os doces eram uma obra de arte e o atendimento foi impecável. Recomendo de olhos fechados!",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
    },
    {
      id: 3,
      name: "Marina Costa",
      role: "Casamento dos Sonhos",
      content: "Meu bolo de casamento foi simplesmente perfeito! A Maria e sua equipe captaram exatamente o que eu queria. Todos os convidados elogiaram muito. Obrigada por tornarem nosso dia ainda mais especial!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
    },
    {
      id: 4,
      name: "Carlos Eduardo",
      role: "Cliente Fiel",
      content: "Sou cliente há mais de 5 anos e posso afirmar que a qualidade é sempre excepcional. Os brigadeiros gourmet são os melhores da cidade! A tradição familiar faz toda a diferença no sabor.",
      rating: 5,
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
    }
  ];

  return (
    <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(199, 232, 202, 0.1) 0%, rgba(255, 237, 213, 0.1) 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#C7E8CA' }}>
            Depoimentos
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            O Que Dizem Nossos Clientes
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. Veja o que eles têm a dizer 
            sobre suas experiências conosco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 p-3 rounded-full" style={{ backgroundColor: '#C7E8CA' }}>
                <Quote className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div className="pt-4">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2"
                    style={{ borderColor: 'rgba(199, 232, 202, 0.3)' }}
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm" style={{ color: '#C7E8CA' }}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t" style={{ borderColor: 'rgba(199, 232, 202, 0.3)' }}>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#C7E8CA' }}>98%</div>
            <div className="text-gray-600">Satisfação dos Clientes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#C7E8CA' }}>500+</div>
            <div className="text-gray-600">Eventos Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#C7E8CA' }}>5.0</div>
            <div className="text-gray-600">Avaliação Média</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2" style={{ color: '#C7E8CA' }}>24h</div>
            <div className="text-gray-600">Atendimento Rápido</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;