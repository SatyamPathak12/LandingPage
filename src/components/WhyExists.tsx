import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyExists: React.FC = () => {
    const reasons = [
        "Revenue management education is poorly structured in most hotel schools",
        "Independent hotels lack access to practical commercial guidance",
        "Technology and distribution have become complex",
        "Skilled revenue talent is limited",
        "Professionals need continuous upskilling, not one-time courses"
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">Why REVnexperts Exists</h2>
                    <p className="text-gray-600">REVnexperts exists to address these challenges through a connected system of education, consulting, and community</p>
                </div>

                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    {/* Background Image */}
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                        alt="Team meeting" 
                        className="w-full h-[600px] object-cover"
                    />
                    
                    {/* Dark Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent flex items-center">
                        <div className="max-w-2xl px-8 lg:px-16 py-12">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">
                                The hospitality industry faces several challenges today:
                            </h3>
                            <ul className="space-y-6">
                                {reasons.map((reason, idx) => (
                                    <li key={idx} className="flex items-start text-white/90">
                                        <CheckCircle className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-0.5" />
                                        <span className="text-lg font-medium leading-snug">{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyExists;
