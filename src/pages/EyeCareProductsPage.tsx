import React from 'react';
import { ShoppingBag, Droplets, BookOpen, Shield, Sparkles, Package } from 'lucide-react';

const EyeCareProductsPage: React.FC = () => {
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
      question: "Do you sell blue light glasses in Oshawa?",
      answer: "Yes! We carry a wide selection of blue light blocking glasses, both prescription and non-prescription. These help reduce digital eye strain from computers, phones, and tablets."
    },
    {
      question: "What eye drops do you recommend for dry eyes?",
      answer: "We stock premium artificial tears and lubricating drops from leading brands. Our optometrists can recommend the best option based on your specific dry eye symptoms and severity."
    },
    {
      question: "Do you carry reading glasses without a prescription?",
      answer: "Absolutely! We have a variety of over-the-counter reading glasses in different strengths and styles, perfect for presbyopia and close-up tasks."
    },
    {
      question: "What contact lens solutions do you recommend?",
      answer: "We carry all major contact lens solution brands including multipurpose solutions, daily cleaners, and specialty products for sensitive eyes. Our staff can help you choose the right solution for your lens type."
    }
  ];

  const productCategories = [
    {
      icon: Droplets,
      title: "Eye Drops & Artificial Tears",
      description: "Premium lubricating drops and treatments for dry eyes, allergies, and daily comfort",
      products: ["Artificial tears", "Allergy relief drops", "Dry eye treatments", "Preservative-free options"]
    },
    {
      icon: Sparkles,
      title: "Contact Lens Solutions",
      description: "Complete care systems for all types of contact lenses with cleaning and disinfecting solutions",
      products: ["Multipurpose solutions", "Daily cleaners", "Protein removers", "Saline solutions"]
    },
    {
      icon: BookOpen,
      title: "Reading Glasses & Magnifiers",
      description: "Over-the-counter reading glasses and magnification tools for close-up tasks and hobbies",
      products: ["Reading glasses", "Computer glasses", "Magnifying glasses", "Bifocal readers"]
    },
    {
      icon: Shield,
      title: "Protective Accessories",
      description: "Safety eyewear, sports protection, and accessories to keep your eyes safe and comfortable",
      products: ["Safety glasses", "Sports eyewear", "Lens cleaning cloths", "Protective cases"]
    }
  ];

  const featuredProducts = [
    {
      category: "Cleaning Solutions",
      title: "Premium Lens Cleaners",
      description: "Professional-grade cleaning solutions that remove smudges, oils, and debris without damaging lens coatings.",
      benefits: ["Anti-static formula", "Safe for all coatings", "Streak-free cleaning", "Convenient spray bottles"]
    },
    {
      category: "Eye Comfort",
      title: "Artificial Tear Drops",
      description: "Long-lasting relief for dry, irritated eyes with preservative-free formulations for sensitive eyes.",
      benefits: ["Immediate relief", "Long-lasting comfort", "Preservative-free options", "Compatible with contacts"]
    },
    {
      category: "Vision Aids",
      title: "Reading Glasses Collection",
      description: "Stylish over-the-counter reading glasses in various strengths and fashionable frame styles.",
      benefits: ["Multiple strengths", "Designer styles", "Lightweight materials", "Affordable pricing"]
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
            <ShoppingBag size={40} className="text-white" />
          </div>
          
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in">
            Premium Eye Care Products for Every Need
          </h1>
          
          <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Quality eye drops, cleaning solutions, reading glasses, and accessories for optimal eye health and comfort
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#083133] px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-[#77D5D4] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Visit Alpha Optical Today
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

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Complete Eye Care Product Selection
            </h2>
            <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto">
              From daily maintenance to specialized treatments, we carry everything you need for healthy, comfortable vision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#77D5D4] hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#46B8B6] to-[#77D5D4] rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-xl text-[#083133] mb-4">
                  {category.title}
                </h3>
                <p className="font-open-sans text-[#083133] mb-6 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.products.map((product, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-[#46B8B6] rounded-full mr-3"></div>
                      <span className="font-open-sans text-[#083133]">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Featured Eye Care Products
            </h2>
            <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto">
              Discover our most popular and effective eye care solutions trusted by thousands of customers in Pickering and Oshawa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.title}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-[#77D5D4]/20 text-[#083133] px-4 py-2 rounded-full text-sm font-montserrat font-semibold mb-6 inline-block">
                  {product.category}
                </div>
                <h3 className="font-montserrat font-bold text-2xl text-[#083133] mb-4">
                  {product.title}
                </h3>
                <p className="font-open-sans text-[#083133] mb-6 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <Package className="w-5 h-5 text-[#46B8B6] mr-3 flex-shrink-0" />
                      <span className="font-open-sans text-[#083133]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
                Why Choose Alpha Optical for Eye Care Products?
              </h2>
              <p className="font-open-sans text-lg text-[#083133] mb-6 leading-relaxed">
                We carefully select only the highest quality eye care products from trusted manufacturers. Our knowledgeable staff can help you choose the right products for your specific needs and provide guidance on proper usage.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#46B8B6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-[#083133] mb-2">Quality Guaranteed</h4>
                    <p className="font-open-sans text-[#083133]">All products are sourced from reputable manufacturers and meet strict quality standards</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#46B8B6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-[#083133] mb-2">Expert Recommendations</h4>
                    <p className="font-open-sans text-[#083133]">Our optometrists and staff provide personalized product recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#46B8B6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-[#083133] mb-2">Convenient Shopping</h4>
                    <p className="font-open-sans text-[#083133]">Shop in-store during your appointment or visit us anytime for refills</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img
                src="/src/Untitled (67).svg"
                alt="Eye care products at Alpha Optical Pickering"
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
              Eye Care Product Questions & Answers
            </h2>
            <p className="font-open-sans text-xl text-[#083133]">
              Common questions about eye care products in Pickering and Oshawa
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
          <ShoppingBag className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
          <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
            Shop Eye Care Products Today
          </h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Visit our Pickering location to browse our complete selection of eye care products and get expert recommendations from our knowledgeable staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#083133] px-8 py-4 rounded-xl font-montserrat font-bold text-lg hover:bg-[#77D5D4] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Visit Our Store
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

export default EyeCareProductsPage;