import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', hasDropdown: true },
    { name: 'About', href: '#', hasDropdown: true },
    { name: 'REVacademy', href: '#', hasDropdown: true },
    { name: 'REVguide', href: '#', hasDropdown: true },
    { name: 'REVunity', href: '#', hasDropdown: true },
    { name: 'Contact', href: '#', hasDropdown: true },
  ];

  return (
    <nav className="absolute top-0 w-full z-50 shadow-sm/50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer ml-4 lg:ml-8">
            <img 
              src="/logo.png" 
              alt="REVnexperts Logo" 
              className="h-20 w-20 rounded-full object-cover shadow-md hover:shadow-lg transition-all duration-300"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center text-gray-600 hover:text-primary font-medium transition-colors"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} className="ml-1 text-gray-400 group-hover:text-primary transition-colors" />}
              </a>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex space-x-4 items-center">
            <button className="px-6 py-2.5 rounded-lg bg-primary text-white font-bold shadow-sm hover:bg-primary-dark transition-all">
              Signup
            </button>
            <button className="px-6 py-2.5 rounded-lg bg-gray-300 text-dark font-bold hover:bg-gray-400 transition-all">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
             <button className="p-2 rounded-md hover:bg-gray-100 mr-2">
                <span className="sr-only">Login</span>
                Login
             </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50">
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 mb-1"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-6 mt-4 border-t border-gray-100 flex flex-col space-y-3">
              <button className="w-full px-6 py-3 rounded-lg bg-primary text-white font-bold shadow-md">
                Signup
              </button>
               <button className="w-full px-6 py-3 rounded-lg bg-gray-200 text-dark font-bold">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
