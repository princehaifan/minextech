import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TAGLINE } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-slate-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/50"></div>
        {/* Animated Orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute top-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 15 }}
          className="absolute bottom-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" 
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">{TAGLINE}</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
          >
            Transforming Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">ICT & AI Solutions</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl"
          >
            Solving challenging performance problems with innovative technology and excellent support services. We bring the future of tech to your doorstep today.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-all hover:scale-105"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;