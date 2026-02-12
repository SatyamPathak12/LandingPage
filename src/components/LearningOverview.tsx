import React from 'react';
import { Download, Youtube, FileText } from 'lucide-react';

const LearningOverview: React.FC = () => {
    return (
        <section className="py-20 bg-light">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-dark">Learning Content <span className="text-primary">Overview</span></h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brochure */}
                    <a href="#" className="group block h-full">
                        <div className="bg-[#EAD1B7] rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                             <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                            <Download size={48} className="text-[#8B5E3C] mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-[#8B5E3C] mb-2">Detailed Brochure</h3>
                            <p className="text-[#8B5E3C]/80 font-medium">Download our full course catalog</p>
                        </div>
                    </a>

                    {/* YouTube */}
                    <a href="#" className="group block h-full">
                        <div className="bg-black rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                             <div className="absolute top-0 left-0 p-32 bg-red-600/20 rounded-full -ml-16 -mt-16 blur-2xl"></div>
                            <Youtube size={48} className="text-red-600 mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-white mb-2">Our YouTube Channel</h3>
                            <p className="text-gray-400 font-medium">Watch free tutorials & insights</p>
                        </div>
                    </a>

                    {/* Policy */}
                    <a href="#" className="group block h-full">
                        <div className="bg-white border-2 border-gray-100 rounded-3xl p-8 h-full flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden">
                            <FileText size={48} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="text-2xl font-bold text-dark mb-2">Policy & Guide</h3>
                            <p className="text-gray-500 font-medium">Read our student guidelines</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default LearningOverview;
