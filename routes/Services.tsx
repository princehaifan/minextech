import React from 'react';
import { SERVICES } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { motion } from 'framer-motion';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">Our Services</h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-400">
             Comprehensive IT solutions tailored to drive your business forward in the digital age.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
        </div>
      </div>

      {/* Process / How we work section */}
      <div className="bg-white py-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900">Why Choose Us?</h2>
               <p className="mt-4 text-slate-600">We combine technical expertise with business acumen.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                 { title: "Innovation", desc: "We stay ahead of the curve with the latest AI and Cloud technologies.", delay: 0 },
                 { title: "Excellence", desc: "We are committed to delivering high-quality, robust software solutions.", delay: 0.1 },
                 { title: "Support", desc: "Our dedicated team ensures your operations never skip a beat.", delay: 0.2 }
               ].map((item, i) => (
                 <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay }}
                    className="text-center p-6 border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                 >
                    <div className="w-12 h-1 bg-primary-500 mx-auto mb-4 rounded-full"></div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </div>
    </div>
  );
};

export default ServicesPage;