import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">
      
      {/* Decorative large text */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none">
          <h1 className="text-[15rem] font-bold whitespace-nowrap leading-none select-none">
              HONEY FAITH
          </h1>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Left Column */}
        <div className="max-w-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together.</h2>
            <p className="text-gray-400 text-lg mb-8">
                Need a reliable partner to handle your administrative tasks? 
                Reach out to me and let's discuss how I can help streamline your business.
            </p>
            <a href="mailto:honey.faith@example.com" className="inline-flex items-center gap-2 text-2xl font-bold border-b-2 border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-colors">
                honey.faith@example.com <ArrowUpRight />
            </a>
        </div>

        {/* Right Column - Navigation & Socials */}
        <div className="flex flex-col gap-8 w-full md:w-auto">
            <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Reviews</a>
            </div>

            <div className="flex gap-4 mt-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                        <Icon className="w-4 h-4" />
                    </a>
                ))}
            </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Honey Faith. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;