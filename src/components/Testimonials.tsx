import React from 'react';
import { Play } from 'lucide-react';

const Testimonials: React.FC = () => {
    return (
        <section className="py-20 bg-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-dark">Success & <span className="text-primary">Testimonials</span></h2>
                    <p className="text-gray-600 mt-4">Hear from industry leaders and our registered alumni.</p>
                </div>

                {/* Industry Testimonials */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
                    <div className="order-2 lg:order-1">
                        <h3 className="text-2xl font-bold text-dark mb-4">Industry Testimonials</h3>
                        <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">
                            "The curriculum is spot on. It covers exactly what we look for when hiring revenue managers. A game changer for the industry."
                        </p>
                        <div className="flex items-center gap-4">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-12 h-12 rounded-full ring-2 ring-primary" />
                            <div>
                                <p className="font-bold text-dark">David Pearson</p>
                                <p className="text-sm text-gray-500">GM, Luxury Resorts</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer order-1 lg:order-2">
                        <img 
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Testimonial Video" 
                            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                         <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-all flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                                <Play className="w-8 h-8 text-white fill-current ml-1" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Student Testimonials */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <div className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
                        <img 
                            src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                            alt="Student Video" 
                            className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-all flex items-center justify-center">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-primary transition-all duration-300">
                                <Play className="w-8 h-8 text-white fill-current ml-1" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-dark mb-4">Student Testimonials</h3>
                        <p className="text-gray-600 mb-8 italic text-lg leading-relaxed">
                            "I learned more in 3 weeks here than I did in 3 years of general hospitality studies. Practical, real-world knowledge used daily."
                        </p>
                        <div className="flex items-center gap-4">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-12 h-12 rounded-full ring-2 ring-primary" />
                            <div>
                                <p className="font-bold text-dark">Sarah Jenkins</p>
                                <p className="text-sm text-gray-500">Revenue Analyst</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
