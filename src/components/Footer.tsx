import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#083133] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#46B8B6] to-[#77D5D4] rounded-lg flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-2xl">Α</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-white">Alpha Optical</h3>
                <p className="font-open-sans text-[#77D5D4]">Pickering, Ontario</p>
              </div>
            </div>
            <p className="font-open-sans text-white/80 mb-6 leading-relaxed">
              Your trusted optometry partner in Pickering, providing comprehensive eye care, 
              premium eyewear, and exceptional service to the Durham Region since 2010.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/alphaoptical" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/alphaoptical" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://maps.google.com/alphaoptical" 
                className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                aria-label="Google Maps"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 text-white">Quick Links</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block font-open-sans text-white/70 hover:text-white transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block font-open-sans text-white/70 hover:text-white transition-colors"
              >
                Our Services
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="block font-open-sans text-white/70 hover:text-white transition-colors"
              >
                Eye Care Knowledge
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block font-open-sans text-white/70 hover:text-white transition-colors"
              >
                Contact & Hours
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#46B8B6] flex-shrink-0" />
                <span className="font-open-sans text-white/70">Pickering, ON, Canada</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#46B8B6] flex-shrink-0" />
                <a 
                  href="tel:+19055550123"
                  className="font-open-sans text-white/70 hover:text-white transition-colors"
                >
                  (905) 555-0123
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#46B8B6] flex-shrink-0" />
                <a 
                  href="mailto:info@alphaoptical.ca"
                  className="font-open-sans text-white/70 hover:text-white transition-colors"
                >
                  info@alphaoptical.ca
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#46B8B6]/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-open-sans text-white/60 text-sm">
            © 2025 Alpha Optical. All rights reserved. Licensed optometry practice in Ontario.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="font-open-sans text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-open-sans text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;