import React from 'react';
import { CORE_VALUES } from '../constants';
import { Target, Eye, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Header */}
      <div className="relative bg-slate-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Minex Technology</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A culture-driven technology house committed to excellence.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-8 rounded-2xl border-l-4 border-primary-500"
          >
            <div className="flex items-center mb-4">
              <Target className="text-primary-600 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              To solve challenging performance problems of businesses and organizations using information and communications technology.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-50 p-8 rounded-2xl border-l-4 border-cyan-500"
          >
            <div className="flex items-center mb-4">
              <Eye className="text-cyan-600 mr-3" size={32} />
              <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
              To bring our clients into the 21st century through innovation, modern technology, and excellent support services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <span className="inline-block p-3 rounded-full bg-slate-800 mb-4">
                 <Heart className="text-red-500" size={24} />
              </span>
              <h2 className="text-3xl font-bold">Core Values</h2>
              <p className="mt-4 text-slate-400">The principles that guide our culture and work.</p>
           </div>

           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {CORE_VALUES.map((value, index) => (
                 <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors"
                 >
                    <h3 className="text-xl font-bold text-primary-400 mb-3">{value.title}</h3>
                    <p className="text-slate-300">{value.description}</p>
                 </motion.div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;