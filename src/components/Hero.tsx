import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center"
      style={{
        background:
          "linear-gradient(135deg, rgba(199, 232, 202, 0.1) 0%, #ffffff 50%, rgba(255, 237, 213, 0.1) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2"></div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Doçuras que
              <span
                className="text-transparent bg-clip-text"
                style={{
                  background:
                    "linear-gradient(135deg, #C7E8CA 0%, #8bc190 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}
                Encantam
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Criamos momentos especiais com doces artesanais feitos com amor e
              ingredientes selecionados. Cada produto é uma obra de arte que
              desperta sorrisos e cria memórias inesquecíveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
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
                <span>Ver Cardápio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                className="border-2 px-8 py-4 rounded-full font-semibold transition-all duration-200"
                style={{
                  borderColor: "#C7E8CA",
                  color: "#C7E8CA",
                  "&:hover": {
                    backgroundColor: "#C7E8CA",
                    color: "white",
                  },
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#C7E8CA";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#C7E8CA";
                }}
              >
                Fazer Pedido
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "#C7E8CA" }}
                >
                  500+
                </div>
                <div className="text-sm text-gray-600">Clientes Felizes</div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "#C7E8CA" }}
                >
                  10+
                </div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "#C7E8CA" }}
                >
                  50+
                </div>
                <div className="text-sm text-gray-600">Tipos de Doces</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/ice cream cake-amico.png"
                alt="Bolo artesanal com sorvete"
                className="w-full h-96 lg:h-[500px] object-contain"
              />
            </div>
            {/* Background Decoration */}
            <div
              className="absolute inset-0 rounded-3xl transform rotate-6 scale-105 opacity-20"
              style={{
                background: "linear-gradient(135deg, #C7E8CA 0%, #8bc190 100%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
