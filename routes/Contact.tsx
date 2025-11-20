import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ADDRESS, PHONE, EMAIL } from '../constants';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-20 min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-slate-400">Ready to transform your business? Let's start a conversation.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Column */}
          <div>
             <h2 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h2>
             <div className="space-y-8">
                <div className="flex items-start">
                   <div className="flex-shrink-0 bg-primary-100 p-3 rounded-lg text-primary-600">
                      <MapPin size={24} />
                   </div>
                   <div className="ml-4">
                      <h3 className="text-lg font-medium text-slate-900">Location</h3>
                      <p className="text-slate-600 mt-1">{ADDRESS}</p>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0 bg-primary-100 p-3 rounded-lg text-primary-600">
                      <Mail size={24} />
                   </div>
                   <div className="ml-4">
                      <h3 className="text-lg font-medium text-slate-900">Email</h3>
                      <p className="text-slate-600 mt-1">{EMAIL}</p>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0 bg-primary-100 p-3 rounded-lg text-primary-600">
                      <Phone size={24} />
                   </div>
                   <div className="ml-4">
                      <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                      <p className="text-slate-600 mt-1">{PHONE}</p>
                   </div>
                </div>
             </div>

             <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h3 className="text-lg font-bold text-blue-900 mb-2">Have a project in mind?</h3>
                <p className="text-blue-800">Let's discuss how we can help transform your business with innovative technology solutions.</p>
             </div>
          </div>

          {/* Form Column */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
             {submitted ? (
               <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 border border-green-200">
                 Thank you! Your message has been sent. We will get back to you shortly.
               </div>
             ) : null}
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                   <input 
                     required
                     type="text" 
                     className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow"
                     placeholder="John Doe"
                     value={formState.name}
                     onChange={(e) => setFormState({...formState, name: e.target.value})}
                   />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                   <input 
                     required
                     type="email" 
                     className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow"
                     placeholder="john@example.com"
                     value={formState.email}
                     onChange={(e) => setFormState({...formState, email: e.target.value})}
                   />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number (Optional)</label>
                   <input 
                     type="tel" 
                     className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow"
                     placeholder="+234 XXX XXX XXXX"
                     value={formState.phone}
                     onChange={(e) => setFormState({...formState, phone: e.target.value})}
                   />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                   <textarea 
                     required
                     rows={4}
                     className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-shadow resize-none"
                     placeholder="Tell us about your project or inquiry..."
                     value={formState.message}
                     onChange={(e) => setFormState({...formState, message: e.target.value})}
                   ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary-600 text-white py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;