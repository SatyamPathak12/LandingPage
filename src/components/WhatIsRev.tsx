import React from 'react';

const WhatIsRev: React.FC = () => {
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Books/Learning
      text: "Hotel schools teach revenue management in a modern, applied way",
    },
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Resort/Hotel
      text: "Hotels strengthen pricing, distribution, and commercial decision-making",
    },
    {
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", // Professional
      text: "Professionals build real-world revenue management skills",
    },
  ];

  return (
    <section className="py-24 bg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-dark mb-10 tracking-tight">
            What is <span className="text-primary relative inline-block">
              REVnexperts
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              REVnexperts is a hospitality-focused ecosystem designed to solve one core industry gap:
            </p>
            
            <div className="relative py-4">
               {/* Quote decoration */}
               <span className="absolute top-0 left-0 transform -translate-x-4 -translate-y-2 text-6xl text-primary/20 font-serif">"</span>
               <p className="text-2xl lg:text-3xl font-bold text-dark italic leading-snug px-6 relative z-10">
                The lack of structured, practical, and industry-ready revenue management capability
               </p>
               <span className="absolute bottom-0 right-0 transform translate-x-4 translate-y-2 text-6xl text-primary/20 font-serif">"</span>
            </div>

            <p className="text-lg text-primary font-bold pt-4 inline-block border-b-2 border-primary/20 pb-1">
              Through education, consulting, and knowledge exchange, REVnexperts helps:
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 group flex flex-col items-center text-center h-full">
              <div className="rounded-2xl overflow-hidden h-56 w-full mb-6 relative">
                <div className="absolute inset-0 bg-dark/10 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img 
                  src={card.image} 
                  alt="" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <p className="text-dark font-semibold text-lg leading-relaxed px-2">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsRev;
