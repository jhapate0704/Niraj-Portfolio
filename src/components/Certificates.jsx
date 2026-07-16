import React, { useState } from 'react';

const certificates = [
  { src: '/certificats/AWS_Training_Certification_possible.jpg', alt: 'AWS Training' },
  { src: '/certificats/AWS_Training_Certification_project.jpg', alt: 'AWS Project' },
  { src: '/certificats/Cadence WorkShop.jpg', alt: 'Cadence WorkShop' },
  { src: '/certificats/Niraj Jhapate.jpg', alt: 'Certificate' },
  { src: '/certificats/Outskill_Certificate.jpg', alt: 'Outskill' },
  { src: '/certificats/Shoe patent.jpeg', alt: 'Shoe patent' },
  { src: '/certificats/javaScript certification.jpg', alt: 'JS' },
  { src: '/certificats/redhat openshift certification.jpg', alt: 'RedHat' },
];

const Certificates = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const openLightbox = (imgSrc) => {
    setLightboxImg(imgSrc);
  };

  const closeLightbox = () => {
    setLightboxImg(null);
  };

  return (
    <section id="certifications" className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-center uppercase tracking-widest text-theme-5 mb-16">
        <span className="text-theme-2">C</span>ertificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
        {certificates.map((cert, index) => (
          <div 
            key={index}
            onClick={() => openLightbox(cert.src)}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(cert.src)}
            tabIndex={0}
            className={`relative group cursor-pointer overflow-hidden rounded-3xl border border-theme-5/10 shadow-lg transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-theme-2/20 ${
              index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <img 
              src={cert.src} 
              alt={cert.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-theme-1/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <span className="text-theme-5 font-bold tracking-widest text-lg border-2 border-theme-5/50 px-6 py-2 rounded-full">
                Click to view
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-[100] bg-theme-1/90 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
          onClick={closeLightbox}
        >
          <span className="absolute top-6 right-8 text-theme-5 text-5xl cursor-pointer hover:text-theme-2 transition-colors">&times;</span>
          <img 
            src={lightboxImg} 
            alt="Expanded Certificate" 
            className="max-w-[95%] max-h-[95vh] object-contain rounded-xl shadow-2xl animate-[zoomIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()} // Keep modal open if clicking the image
          />
        </div>
      )}
    </section>
  );
};

export default Certificates;
