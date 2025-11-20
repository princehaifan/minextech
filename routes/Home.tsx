import React from 'react';
import Hero from '../components/Hero';
import { SERVICES, CORE_VALUES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* Service Highlight */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive IT solutions tailored to drive your business forward</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/services" className="text-primary-600 font-semibold hover:text-primary-800 inline-flex items-center">
               View All Services &rarr;
             </Link>
          </div>
        </div>
      </section>

      {/* Mini About / Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">A culture-driven technology house committed to excellence</h2>
                <p className="text-lg text-slate-600 mb-8">
                  Our mission is to solve challenging performance problems of businesses and organizations using information and communications technology.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                   {CORE_VALUES.map((val, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                        <span className="font-medium text-slate-800">{val.title}</span>
                      </div>
                   ))}
                </div>
                <div className="mt-8">
                  <Link to="/about" className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
                    About Us
                  </Link>
                </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-2xl opacity-20 blur-lg"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                  alt="Team collaboration" 
                  className="relative rounded-2xl shadow-2xl w-full object-cover h-[400px]"
                />
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
         <div className="max-w-5xl mx-auto px-4 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your business?</h2>
            <p className="text-primary-100 text-lg mb-8">Let's start a conversation about how our technology can assist you.</p>
            <Link to="/contact" className="bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-transform hover:scale-105 shadow-xl">
               Get In Touch
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;