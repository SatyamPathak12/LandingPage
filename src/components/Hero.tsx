import React from 'react';
import { ArrowRight, Mail, Package } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-light pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative background elements (Restored from original design) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-dark tracking-tight leading-tight mb-6">
              At <span className="text-primary relative inline-block">
                REVnexperts
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>, <br />
              we are building <br />
              structured, practical <br />
              <span className="whitespace-nowrap">revenue management</span> <br />
              solutions.
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
               REVnexperts brings together education, consulting, and community to help hotels, hotel schools, and hospitality professionals build real commercial capability.
            </p>
            
            {/* Buttons - Optimized for UX Hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Primary Action */}
              <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-primary hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 whitespace-nowrap">
                Book a Call
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              
              {/* Secondary Action */}
              <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-dark bg-white border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-all shadow-sm whitespace-nowrap">
                <Package className="mr-2 w-5 h-5 text-primary" />
                Explore Products
              </button>

               {/* Tertiary Action */}
              <button className="flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-gray-600 bg-transparent hover:bg-gray-100 transition-all whitespace-nowrap">
                <Mail className="mr-2 w-5 h-5" />
                Join Newsletter
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60">
               <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  Trusted by industry leaders
               </p>
            </div>
          </div>

          {/* Right Image Grid (Restored from original design) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-white p-2 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Team collaboration" 
                    className="rounded-xl w-full h-48 object-cover" 
                  />
                </div>
                <div className="bg-white p-2 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Discussion" 
                    className="rounded-xl w-full h-64 object-cover" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-2 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Mentorship" 
                    className="rounded-xl w-full h-64 object-cover" 
                  />
                </div>
                <div className="bg-white p-2 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Strategic planning" 
                    className="rounded-xl w-full h-48 object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
