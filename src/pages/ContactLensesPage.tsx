import React from 'react';
import { Contact, Users, Droplets, Calendar, CheckCircle, Heart } from 'lucide-react';

const ContactLensesPage: React.FC = () => {
  const scrollToContact = () => {
    if (window.location.pathname === '/') {
      // If already on homepage, just scroll to contact
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on different page, navigate to homepage with contact hash
      window.location.href = '/#contact';
    }
  };

  const faqs = [
    {
      question: "What contact lenses are best for dry eyes?",
      answer: "Daily disposable lenses are often best for dry eyes as they provide a fresh, clean lens each day. We also recommend silicone hydrogel materials and specialty lenses designed for dry eye sufferers."
    },
    {
      question: "How much do contact lenses cost in Pickering?",
      answer: "Contact lens costs vary by type and brand. Daily lenses typically range from $25-60 per month, while monthly lenses range from $15-40 per month. We accept most insurance plans to help with costs."
    },
    {
      question: "Do you fit specialty contact lenses for astigmatism?",
      answer: "Yes! We fit toric lenses for astigmatism, multifocal lenses for presbyopia, and specialty lenses for keratoconus and other irregular corneal conditions."
    },
    {
      question: "How long does a contact lens fitting take?",
      answer: "Initial fittings typically take 45-60 minutes, including measurements, trial lens fitting, and instruction on proper insertion, removal, and care techniques."
    }
  ];

  const lensTypes = [
    {
      icon: Calendar,
      title: "Daily Disposables",
      description: "Fresh, sterile lenses every day for maximum comfort and convenience",
      benefits: ["No cleaning required", "Reduced infection risk", "Perfect for occasional wear", "Great for allergies"]
    },
    {
      icon: Droplets,
      title: "Monthly Lenses",
      description: "Cost-effective option with advanced materials for extended wear comfort",
      benefits: ["Economical choice", "Durable materials", "Consistent vision", "Wide parameter range"]
    },
    {
      icon: Heart,
      title: "Specialty Lenses",
      description: "Custom solutions for astigmatism, presbyopia, and irregular corneas",
      benefits: ["Toric for astigmatism", "Multifocal options", "Keratoconus fitting", "Custom parameters"]
    }
  ];

  const fittingProcess = [
    {
      step: "1",
      title: "Comprehensive Eye Exam",
      description: "Complete vision and eye health assessment to determine candidacy for contact lenses"
    },
    {
      step: "2",
      title: "Corneal Measurements",
      description: "Precise measurements of corneal curvature and diameter for optimal lens selection"
    },
    {
      step: "3",
      title: "Trial Lens Fitting",
      description: "Try different lens types and brands to find the most comfortable and effective option"
    },
    {
      step: "4",
      title: "Training & Education",
      description: "Learn proper insertion, removal, and care techniques for safe and comfortable wear"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#083133] to-[#46B8B6] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#77D5D4] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-float">
            <Contact size={40} className="text-white" />
          </div>
          
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in">
            Contact Lenses That Fit Comfortably
          </h1>
          
          <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Professional contact lens fittings with daily, monthly, and specialty options for clear, comfortable vision
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#083133] px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-[#77D5D4] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book a Lens Fitting Today
            </button>
            <a 
              href="tel:+19055550123"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-[#083133] transition-all duration-300 hover:scale-105"
            >
              Call (905) 555-0123
            </a>
          </div>
        </div>
      </section>

      {/* Consultation & Fitting Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Professional Contact Lens Fitting Process
            </h2>
            <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto">
              Our comprehensive fitting process ensures you get the most comfortable and effective contact lenses for your unique eyes and lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {fittingProcess.map((process, index) => (
              <div
                key={process.step}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#46B8B6] to-[#77D5D4] rounded-full flex items-center justify-center mx-auto mb-6 text-white font-montserrat font-bold text-2xl">
                  {process.step}
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#083133] mb-4">
                  {process.title}
                </h3>
                <p className="font-open-sans text-[#083133] leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lens Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Contact Lens Options in Pickering & Oshawa
            </h2>
            <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto">
              Choose from our comprehensive selection of contact lenses designed for every lifestyle and vision need.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {lensTypes.map((type, index) => (
              <div
                key={type.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#77D5D4] hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#46B8B6] to-[#77D5D4] rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-[#083133] mb-4">
                  {type.title}
                </h3>
                <p className="font-open-sans text-[#083133] mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-3">
                  {type.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#46B8B6] mr-3 flex-shrink-0" />
                      <span className="font-open-sans text-[#083133]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care & Maintenance Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
                Contact Lens Care & Maintenance
              </h2>
              <p className="font-open-sans text-lg text-[#083133] mb-6 leading-relaxed">
                Proper care and maintenance are essential for comfortable, safe contact lens wear. Our team provides comprehensive training and ongoing support to ensure your success with contact lenses.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#46B8B6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-montserrat font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-[#083133] mb-2">Daily Cleaning Routine</h4>
                    <p className="font-open-sans text-[#083133]">Clean and disinfect reusable lenses daily with recommended solutions</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#46B8B6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-montserrat font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-[#083133] mb-2">Proper Storage</h4>
                    <p className="font-open-sans text-[#083133]">Store lenses in fresh solution and replace cases every 3 months</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#46B8B6] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-montserrat font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-[#083133] mb-2">Regular Check-ups</h4>
                    <p className="font-open-sans text-[#083133]">Schedule annual eye exams to monitor eye health and lens fit</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img
                src="/src/Pic-001.jpg"
                alt="Contact lens care and maintenance at Alpha Optical Pickering"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Contact Lens Questions & Answers
            </h2>
            <p className="font-open-sans text-xl text-[#083133]">
              Common questions about contact lenses in Pickering and Oshawa
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-montserrat font-bold text-xl text-[#083133] mb-4">
                  {faq.question}
                </h3>
                <p className="font-open-sans text-[#083133] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#083133] to-[#46B8B6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
          <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
            Ready to Try Contact Lenses?
          </h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the freedom and convenience of contact lenses with our professional fitting service and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#083133] px-8 py-4 rounded-xl font-montserrat font-bold text-lg hover:bg-[#77D5D4] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Schedule Your Fitting
            </button>
            <a 
              href="tel:+19055550123"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-montserrat font-semibold text-lg hover:bg-white hover:text-[#083133] transition-all duration-300 hover:scale-105"
            >
              Call Now: (905) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactLensesPage;