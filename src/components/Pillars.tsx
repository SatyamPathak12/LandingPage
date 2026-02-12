import React from 'react';
import { Award, Book, Briefcase } from 'lucide-react';

const Pillars: React.FC = () => {
    return (
        <section className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-dark">Three Pillars of <span className="text-primary">REVnexperts</span></h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Pillar 1: Green */}
                    <div className="bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex flex-col">
                        <div className="w-full relative">
                           <img src="/1.png" alt="REVacademy" className="w-full h-auto object-contain" />
                        </div>
                        <div className="p-8 pt-4 flex flex-col flex-grow">
                             <p className="text-gray-600 mb-8 flex-grow">
                                The education and training arm of REVnexperts. REVacademy focuses on building revenue management capability.
                            </p>
                            <button className="w-full py-3 rounded-xl bg-[#28a745] text-white font-bold hover:bg-opacity-90 transition-all shadow-md">
                                Explore REVacademy
                            </button>
                        </div>
                    </div>

                    {/* Pillar 2: Purple */}
                    <div className="bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex flex-col">
                        <div className="w-full relative">
                           <img src="/2.png" alt="REVguide" className="w-full h-auto object-contain" />
                        </div>
                        <div className="p-8 pt-4 flex flex-col flex-grow">
                             <p className="text-gray-600 mb-8 flex-grow">
                                The consulting and practical solutions arm of REVnexperts. REVguide supports hotels
                            </p>
                            <button className="w-full py-3 rounded-xl bg-[#6f42c1] text-white font-bold hover:bg-opacity-90 transition-all shadow-md">
                                Explore REVguide
                            </button>
                        </div>
                    </div>

                    {/* Pillar 3: Blue/Teal */}
                    <div className="bg-white rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group flex flex-col">
                         <div className="w-full relative">
                           <img src="/3.png" alt="REVnexperts" className="w-full h-auto object-contain" />
                        </div>
                        <div className="p-8 pt-4 flex flex-col flex-grow">
                             <p className="text-gray-600 mb-8 flex-grow">
                                The community and knowledge exchange arm of REVnexperts. REVunity brings together
                            </p>
                            <button className="w-full py-3 rounded-xl bg-[#036c7a] text-white font-bold hover:bg-opacity-90 transition-all shadow-md">
                                Explore REVunity
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pillars;
