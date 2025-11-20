import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Mail, Phone } from 'lucide-react';
import { NAV_LINKS, SPECIALTIES, COMPANY_NAME, ADDRESS, WEBSITE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-white text-xl font-bold">{COMPANY_NAME}</h3>
            <p className="text-sm leading-relaxed">
              A culture-driven technology house committed to excellence. Transforming businesses through ICT & AI Solutions.
            </p>
            <div className="flex items-center space-x-2 pt-2">
               <Globe size={16} className="text-primary-500" />
               <a href={`https://${WEBSITE}`} target="_blank" rel="noreferrer" className="text-sm hover:text-white transition-colors">
                 {WEBSITE}
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors duration-200 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-white font-semibold mb-4">Specialties</h4>
            <ul className="space-y-2">
              {SPECIALTIES.map((item) => (
                <li key={item} className="text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{ADDRESS}</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary-500 flex-shrink-0" />
                <p className="text-sm">contact@minextech.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
             {/* Social icons placeholders */}
             <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer text-xs">IN</div>
             <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer text-xs">TW</div>
             <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer text-xs">FB</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;