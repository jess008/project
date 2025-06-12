import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8" style={{ color: '#C7E8CA' }} />,
      title: "Feito com Amor",
      description: "Cada doce é preparado com carinho e dedicação, usando receitas tradicionais da família."
    },
    {
      icon: <Award className="w-8 h-8" style={{ color: '#C7E8CA' }} />,
      title: "Ingredientes Premium",
      description: "Utilizamos apenas ingredientes selecionados e de alta qualidade para garantir o melhor sabor."
    },
    {
      icon: <Users className="w-8 h-8" style={{ color: '#C7E8CA' }} />,
      title: "Atendimento Personalizado",
      description: "Nossa equipe está sempre pronta para criar doces únicos para suas ocasiões especiais."
    },
    {
      icon: <Clock className="w-8 h-8" style={{ color: '#C7E8CA' }} />,
      title: "Tradição e Inovação",
      description: "Combinamos técnicas tradicionais com criatividade moderna para surpreender sempre."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="/pastry chef-pana.png"
              alt="Confeiteira preparando doces"
              className="w-full h-96 lg:h-[500px] object-contain"
            />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-2xl font-bold" style={{ color: '#C7E8CA' }}>Maria Silva</div>
              <div className="text-gray-600">Confeiteira Master</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#C7E8CA' }}>
                Sobre Nós
              </h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                Uma História de Doçura e Tradição
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Há mais de uma década, a Doçura Encantada nasceu do sonho de Maria Silva em compartilhar 
                o sabor autêntico dos doces caseiros. O que começou como uma pequena confeitaria familiar 
                se transformou em referência de qualidade e sabor em nossa cidade.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cada receita carrega a tradição passada de geração em geração, combinada com técnicas 
                modernas e ingredientes cuidadosamente selecionados. Nosso compromisso é transformar 
                momentos especiais em memórias inesquecíveis através do sabor.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-4 rounded-xl transition-colors duration-200 cursor-pointer"
                  style={{
                    '&:hover': { backgroundColor: 'rgba(199, 232, 202, 0.1)' }
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(199, 232, 202, 0.1)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  <div className="flex items-start space-x-3">
                    <div 
                      className="flex-shrink-0 p-2 rounded-lg transition-colors duration-200"
                      style={{ 
                        backgroundColor: 'rgba(199, 232, 202, 0.2)',
                        '&:hover': { backgroundColor: 'rgba(199, 232, 202, 0.3)' }
                      }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;