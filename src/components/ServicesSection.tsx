import React from 'react';
import { Eye, Glasses, Contact, ShoppingBag } from 'lucide-react';

const services = [
  {
    icon: Eye,
    title: "Comprehensive Eye Exams",
    description: "Professional eye exams in Pickering & Oshawa with advanced technology to detect vision issues and keep your eyes healthy.",
    keywords: "eye exam Pickering",
  },
  {
    icon: Glasses,
    title: "Eyewear & Lenses",
    description: "Designer frames, specialty lenses, sunglasses, sports, and safety eyewear tailored to your lifestyle.",
    keywords: "eyeglasses Pickering",
  },
  {
    icon: Contact,
    title: "Contact Lenses",
    description: "Complete lens fittings, disposables, and specialty options with expert guidance and care.",
    keywords: "contact lenses Pickering",
  },
  {
    icon: ShoppingBag,
    title: "Eye Care Products",
    description: "Premium eye drops, cleaning solutions, reading glasses, and accessories for clear, comfortable vision.",
    keywords: "eye care products Pickering",
  },
];

const ServicesSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#083133] mb-6">
            Our Services
          </h2>
          <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto leading-relaxed">
            Comprehensive optometry services in Pickering, Ontario, designed to keep your vision clear 
            and your eyes healthy for life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#77D5D4] hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#46B8B6] to-[#77D5D4] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-[#46B8B6]/25">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-montserrat font-bold text-xl text-[#083133] mb-4 group-hover:text-[#46B8B6] transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="font-open-sans text-[#083133] mb-6 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Learn More Button */}
              <button 
                className="w-full bg-[#46B8B6] hover:bg-[#083133] text-white py-3 px-6 rounded-lg font-montserrat font-semibold text-sm hover:shadow-lg hover:shadow-[#46B8B6]/25 transition-all duration-300 group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#46B8B6] focus:ring-opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                  const urls = [
                    '/eye-exams-pickering-oshawa',
                    '/eyeglasses-frames-pickering-oshawa', 
                    '/contact-lenses-pickering-oshawa',
                    '/eye-care-products-pickering-oshawa'
                  ];
                  window.history.pushState({}, '', urls[index]);
                  window.location.reload();
                }}
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#083133] to-[#46B8B6] rounded-2xl p-12 shadow-xl">
          <h3 className="font-montserrat font-bold text-3xl text-white mb-4">
            Ready to Experience Better Vision?
          </h3>
          <p className="font-open-sans text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your comprehensive eye exam today and discover why thousands of families in Pickering trust Alpha Optical for their vision care needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#083133] px-8 py-4 rounded-xl font-montserrat font-bold text-lg hover:bg-[#77D5D4] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Schedule Your Appointment
            </button>
            <a 
              href="tel:+19055550123"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-montserrat font-semibold text-lg hover:bg-white hover:text-[#083133] transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              Call (905) 555-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;