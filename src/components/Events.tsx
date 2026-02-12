import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Events: React.FC = () => {
    const events = [
        {
            title: "Revenue Management Workshop",
            date: "March 15, 2026",
            location: "Online / Zoom",
            image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Workshop"
        },
        {
            title: "Hospitality Leaders Summit",
            date: "April 02, 2026",
            location: "New York, NY",
            image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Conference"
        },
        {
            title: "Advanced Pricing Strategies",
            date: "April 20, 2026",
            location: "London, UK",
            image: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Training"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-dark">Upcoming <span className="text-primary">Events</span></h2>
                        <p className="text-gray-600 mt-2">Join our latest sessions and masterclasses.</p>
                    </div>
                    <a href="#" className="hidden sm:inline-block text-primary font-semibold hover:underline">View all events &rarr;</a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                            <div className="relative h-48 overflow-hidden">
                                <img 
                                    src={event.image} 
                                    alt={event.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                                    {event.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                                    <span className="flex items-center"><Calendar size={14} className="mr-1.5" /> {event.date}</span>
                                    <span className="flex items-center"><MapPin size={14} className="mr-1.5" /> {event.location}</span>
                                </div>
                                <h3 className="text-xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                                <button className="w-full py-2.5 rounded-lg border border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="mt-8 text-center sm:hidden">
                    <a href="#" className="text-primary font-semibold hover:underline">View all events &rarr;</a>
                </div>
            </div>
        </section>
    );
};

export default Events;
