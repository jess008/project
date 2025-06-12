import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/ice cream cake-amico.png",
      alt: "Bolo de chocolate artesanal",
      category: "Bolos"
    },
    {
      src: "/pastry chef-pana.png",
      alt: "Confeiteira preparando doces",
      category: "Processo"
    },
    {
      src: "/pastry chef-bro.png",
      alt: "Chef confeiteiro decorando bolo",
      category: "Processo"
    },
    {
      src: "/Eating donuts-amico.png",
      alt: "Doces variados",
      category: "Docinhos"
    },
    {
      src: "/ice cream cake-amico.png",
      alt: "Torta especial",
      category: "Tortas"
    },
    {
      src: "/Eating donuts-amico.png",
      alt: "Cupcakes decorados",
      category: "Cupcakes"
    },
    {
      src: "/pastry chef-pana.png",
      alt: "Arte da confeitaria",
      category: "Processo"
    },
    {
      src: "/ice cream cake-amico.png",
      alt: "Bolo personalizado",
      category: "Bolos"
    },
    {
      src: "/Eating donuts-amico.png",
      alt: "Doces gourmet",
      category: "Docinhos"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#C7E8CA' }}>
            Nossa Galeria
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Arte Doce em Cada Criação
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça algumas de nossas criações mais especiais. Cada doce é uma obra de arte 
            feita com carinho e dedicação.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              style={{ background: 'linear-gradient(135deg, rgba(199, 232, 202, 0.1) 0%, rgba(255, 237, 213, 0.1) 100%)' }}
              onClick={() => openModal(index)}
            >
              <div className="p-6">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm px-3 py-1 rounded-full mb-2 inline-block" style={{ backgroundColor: '#C7E8CA' }}>
                    {image.category}
                  </div>
                  <div className="font-medium">{image.alt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white transition-colors duration-200 z-10"
                style={{
                  '&:hover': { color: '#C7E8CA' }
                }}
                onMouseEnter={(e) => e.target.style.color = '#C7E8CA'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-200 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="rounded-lg p-8" style={{ background: 'linear-gradient(135deg, rgba(199, 232, 202, 0.1) 0%, rgba(255, 237, 213, 0.1) 100%)' }}>
                <img
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-sm text-white px-3 py-1 rounded-full mb-2 inline-block" style={{ backgroundColor: '#C7E8CA' }}>
                  {images[selectedImage].category}
                </div>
                <div className="font-medium text-gray-800">{images[selectedImage].alt}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;