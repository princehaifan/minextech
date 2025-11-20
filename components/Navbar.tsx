import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/" className="flex items-center gap-2">
               <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-blue-500/50 shadow-lg">
                 M
               </div>
               <span className={`font-bold text-xl tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                 {COMPANY_NAME.split(' ')[0]}<span className="text-primary-500">Tech</span>
               </span>
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-primary-500'
                    : scrolled ? 'text-slate-600 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all transform hover:scale-105 ${
                scrolled 
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg' 
                  : 'bg-white text-primary-700 hover:bg-gray-100'
              }`}
            >
              Get Started
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white border-b border-gray-200 shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
             to="/contact"
             onClick={() => setIsOpen(false)}
             className="mt-4 w-full text-center bg-primary-600 text-white px-4 py-3 rounded-md font-medium hover:bg-primary-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;