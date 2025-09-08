import React from 'react';
import { Glasses, Sparkles, Sun, Shield, Zap, Palette } from 'lucide-react';

const EyewearPage: React.FC = () => {
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
      question: "Do you carry prescription sunglasses in Pickering?",
      answer: "Yes! We offer a wide selection of prescription sunglasses from designer brands. Our opticians can fit any frame with your prescription lenses, including polarized and transition options."
    },
    {
      question: "What designer frame brands do you carry in Oshawa?",
      answer: "We carry premium brands including Ray-Ban, Oakley, Gucci, Prada, and many others. Our collection features both luxury and affordable options to suit every style and budget."
    },
    {
      question: "Do you offer blue light blocking glasses?",
      answer: "Absolutely! We provide advanced blue light filtering lenses that reduce eye strain from digital devices. Perfect for professionals and students spending long hours on computers."
    },
    {
      question: "Can you fit progressive lenses in any frame?",
      answer: "Most frames can accommodate progressive lenses, but some work better than others. Our experienced opticians will help you choose frames that optimize your progressive lens performance."
    }
  ];

  const eyewearTypes = [
    {
      icon: Glasses,
      title: "Designer Frames",
      description: "Premium eyewear from top international brands with styles ranging from classic to contemporary",
      features: ["Luxury materials", "Lifetime adjustments", "Style consultation"]
    },
    {
      icon: Sparkles,
      title: "Specialty Lenses",
      description: "Advanced lens technologies including progressives, anti-reflective coatings, and blue light protection",
      features: ["Progressive lenses", "AR coatings", "Blue light filtering"]
    },
    {
      icon: Sun,
      title: "Prescription Sunglasses",
      description: "Stylish sun protection with your exact prescription in polarized and transition options",
      features: ["Polarized lenses", "UV protection", "Transition technology"]
    },
    {
      icon: Shield,
      title: "Safety & Sports Eyewear",
      description: "Protective eyewear for work environments and athletic activities with impact-resistant materials",
      features: ["Impact resistant", "Sports specific", "Safety certified"]
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
            <Glasses size={40} className="text-white" />
          </div>
          
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in">
            Frames & Lenses for Every Lifestyle
          </h1>
          
          <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Designer eyewear, specialty lenses, and premium sunglasses tailored to your unique style and vision needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#083133] px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-[#77D5D4] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Shop Frames & Lenses
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

      {/* Designer Frames Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
                Designer Frames Collection in Pickering
              </h2>
              <p className="font-open-sans text-lg text-[#083133] mb-6 leading-relaxed">
                Discover our curated collection of premium eyewear featuring the latest styles from world-renowned designers. From timeless classics to cutting-edge contemporary designs, we have frames that complement every face shape and personal style.
              </p>
              <p className="font-open-sans text-lg text-[#083133] mb-8 leading-relaxed">
                Our expert opticians provide personalized frame fitting and style consultations to ensure you find eyewear that not only looks great but feels comfortable for all-day wear.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Palette className="w-8 h-8 text-[#46B8B6] mx-auto mb-2" />
                  <h4 className="font-montserrat font-semibold text-[#083133]">500+ Styles</h4>
                  <p className="font-open-sans text-sm text-[#083133]">Extensive collection</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Zap className="w-8 h-8 text-[#46B8B6] mx-auto mb-2" />
                  <h4 className="font-montserrat font-semibold text-[#083133]">Same Day Service</h4>
                  <p className="font-open-sans text-sm text-[#083133]">Quick turnaround</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img
                src="/src/Frames&lenstri.png"
                alt="Designer eyewear collection at Alpha Optical Pickering"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Eyewear Types Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Complete Eyewear Solutions
            </h2>
            <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto">
              From everyday glasses to specialized eyewear, we provide comprehensive solutions for all your vision needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eyewearTypes.map((type, index) => (
              <div
                key={type.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#77D5D4] hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#46B8B6] to-[#77D5D4] rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#083133] mb-4">
                  {type.title}
                </h3>
                <p className="font-open-sans text-[#083133] mb-6 leading-relaxed">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></div>
                      <span className="font-open-sans text-[#083133]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Lenses Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Advanced Lens Technologies
            </h2>
            <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto">
              Experience the latest in lens innovation with our premium specialty options designed for modern lifestyles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
              <h3 className="font-montserrat font-bold text-2xl text-[#083133] mb-4">Progressive Lenses</h3>
              <p className="font-open-sans text-[#083133] mb-4">Seamless vision correction for near, intermediate, and distance viewing without visible lines.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></span>Natural vision transition</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></span>Wide viewing zones</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></span>Cosmetically appealing</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-montserrat font-bold text-2xl text-[#083133] mb-4">Anti-Reflective Coatings</h3>
              <p className="font-open-sans text-[#083133] mb-4">Reduce glare, improve clarity, and enhance the appearance of your lenses.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></span>Eliminates reflections</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></span>Easier to clean</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></span>Better night vision</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-montserrat font-bold text-2xl text-[#083133] mb-4">Blue Light Protection</h3>
              <p className="font-open-sans text-[#083133] mb-4">Filter harmful blue light from digital devices to reduce eye strain and improve comfort.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center"><span className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></span>Reduces digital eye strain</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></span>Improves sleep quality</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></span>Clear lens appearance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Eyewear Questions & Answers
            </h2>
            <p className="font-open-sans text-xl text-[#083133]">
              Common questions about eyewear and lenses in Pickering and Oshawa
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
          <Glasses className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
          <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
            Find Your Perfect Frames Today
          </h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Visit our Pickering showroom to try on hundreds of designer frames and discover the perfect eyewear for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#083133] px-8 py-4 rounded-xl font-montserrat font-bold text-lg hover:bg-[#77D5D4] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Schedule a Fitting
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

export default EyewearPage;