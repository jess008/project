import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('bolos');

  const categories = [
    { id: 'bolos', name: 'Bolos', emoji: '🎂' },
    { id: 'doces', name: 'Doces', emoji: '🍭' },
    { id: 'tortas', name: 'Tortas', emoji: '🥧' },
    { id: 'cupcakes', name: 'Cupcakes', emoji: '🧁' }
  ];

  const products = {
    bolos: [
      {
        id: 1,
        name: "Bolo de Chocolate Supremo",
        price: "R$ 89,90",
        description: "Bolo de chocolate com recheio de ganache e cobertura cremosa",
        image: "/ice cream cake-amico.png",
        rating: 4.9,
        popular: true
      },
      {
        id: 2,
        name: "Bolo Red Velvet",
        price: "R$ 79,90",
        description: "Clássico bolo americano com cobertura de cream cheese",
        image: "/ice cream cake-amico.png",
        rating: 4.8
      },
      {
        id: 3,
        name: "Bolo de Cenoura Gourmet",
        price: "R$ 69,90",
        description: "Bolo de cenoura tradicional com calda de chocolate especial",
        image: "/ice cream cake-amico.png",
        rating: 4.7
      }
    ],
    doces: [
      {
        id: 4,
        name: "Brigadeiros Gourmet",
        price: "R$ 3,50",
        description: "Brigadeiros artesanais com chocolate belga",
        image: "/Eating donuts-amico.png",
        rating: 5.0,
        popular: true
      },
      {
        id: 5,
        name: "Beijinhos Premium",
        price: "R$ 3,50",
        description: "Beijinhos com coco fresco e toque de baunilha",
        image: "/Eating donuts-amico.png",
        rating: 4.9
      },
      {
        id: 6,
        name: "Truffles Variados",
        price: "R$ 5,90",
        description: "Seleção de truffles com sabores únicos",
        image: "/Eating donuts-amico.png",
        rating: 4.8
      }
    ],
    tortas: [
      {
        id: 7,
        name: "Torta de Limão",
        price: "R$ 95,90",
        description: "Torta refrescante com creme de limão e merengue",
        image: "/ice cream cake-amico.png",
        rating: 4.8,
        popular: true
      },
      {
        id: 8,
        name: "Torta de Morango",
        price: "R$ 105,90",
        description: "Torta cremosa com morangos frescos da estação",
        image: "/ice cream cake-amico.png",
        rating: 4.9
      }
    ],
    cupcakes: [
      {
        id: 9,
        name: "Cupcakes de Baunilha",
        price: "R$ 8,90",
        description: "Cupcakes macios com buttercream de baunilha",
        image: "/Eating donuts-amico.png",
        rating: 4.7
      },
      {
        id: 10,
        name: "Cupcakes de Chocolate",
        price: "R$ 9,90",
        description: "Cupcakes de chocolate com cobertura cremosa",
        image: "/Eating donuts-amico.png",
        rating: 4.8,
        popular: true
      }
    ]
  };

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#C7E8CA' }}>
            Nossos Produtos
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Sabores que Conquistam
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nossa seleção cuidadosamente criada de doces artesanais, cada um preparado 
            com ingredientes premium e muito amor.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600'
              }`}
              style={{
                backgroundColor: activeCategory === category.id ? '#C7E8CA' : 'white',
                '&:hover': {
                  backgroundColor: activeCategory === category.id ? '#a8d4ac' : 'rgba(199, 232, 202, 0.1)',
                  color: activeCategory === category.id ? 'white' : '#C7E8CA'
                }
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== category.id) {
                  e.target.style.backgroundColor = 'rgba(199, 232, 202, 0.1)';
                  e.target.style.color = '#C7E8CA';
                } else {
                  e.target.style.backgroundColor = '#a8d4ac';
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== category.id) {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.color = '#6b7280';
                } else {
                  e.target.style.backgroundColor = '#C7E8CA';
                }
              }}
            >
              <span className="text-lg">{category.emoji}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products[activeCategory as keyof typeof products].map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden p-6" style={{ background: 'linear-gradient(135deg, rgba(199, 232, 202, 0.1) 0%, rgba(255, 237, 213, 0.1) 100%)' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-contain group-hover:scale-110 transition-transform duration-500"
                />
                {product.popular && (
                  <div className="absolute top-4 left-4 text-white px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#C7E8CA' }}>
                    Popular
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold" style={{ color: '#C7E8CA' }}>{product.price}</div>
                  <button 
                    className="text-white p-3 rounded-full transition-colors duration-200 group transform hover:scale-110"
                    style={{ 
                      backgroundColor: '#C7E8CA',
                      '&:hover': { backgroundColor: '#a8d4ac' }
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#a8d4ac'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#C7E8CA'}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            className="text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
            style={{ 
              backgroundColor: '#C7E8CA',
              '&:hover': { backgroundColor: '#a8d4ac' }
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#a8d4ac'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#C7E8CA'}
          >
            Ver Cardápio Completo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;