import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 mb-0 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-0">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#46B8B6] to-[#77D5D4] rounded-lg flex items-center justify-center">
              <span className="text-white font-montserrat font-bold text-xl">Α</span>
            </div>
            <div>
              <h1 className="font-montserrat font-bold text-xl text-[#083133]">
                Alpha Optical
              </h1>
              <p className="text-xs text-[#083133] font-open-sans">Pickering, ON</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="font-open-sans text-[#083133] hover:text-[#46B8B6] transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-open-sans text-[#083133] hover:text-[#46B8B6] transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('blog')}
              className="font-open-sans text-[#083133] hover:text-[#46B8B6] transition-colors"
            >
              Knowledge
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-open-sans text-[#083133] hover:text-[#46B8B6] transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+19055550123"
              className="flex items-center space-x-2 text-[#46B8B6] hover:text-[#083133] transition-colors"
            >
              <Phone size={18} />
              <span className="font-open-sans font-medium">(905) 555-0123</span>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#46B8B6] hover:bg-[#083133] text-white px-6 py-2 rounded-lg font-montserrat font-semibold hover:shadow-lg hover:shadow-[#46B8B6]/25 transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#083133]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left font-open-sans text-[#083133] hover:text-[#46B8B6] transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left font-open-sans text-[#083133] hover:text-[#46B8B6] transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('blog')}
                className="block w-full text-left font-open-sans text-[#083133] hover:text-[#46B8B6] transition-colors"
              >
                Knowledge
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left font-open-sans text-[#083133] hover:text-[#46B8B6] transition-colors"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a 
                  href="tel:+19055550123"
                  className="flex items-center space-x-2 text-[#46B8B6]"
                >
                  <Phone size={18} />
                  <span className="font-open-sans font-medium">(905) 555-0123</span>
                </a>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#46B8B6] hover:bg-[#083133] text-white px-6 py-3 rounded-lg font-montserrat font-semibold transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;