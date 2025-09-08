import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Eye, Glasses } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Expert Eye Exams in Pickering",
    subtitle: "Comprehensive vision care from licensed optometrists",
    description: "State-of-the-art equipment and thorough examinations to protect your eye health",
    cta: "Book Eye Exam",
    ctaSecondary: "Learn More",
    image: "/src/EyetestBig.png",
    icon: Eye,
  },
  {
    id: 2,
    title: "Stylish Eyewear for Every Lifestyle",
    subtitle: "Designer frames and premium lenses in Pickering",
    description: "From classic elegance to modern trends, find the perfect frames that match your style",
    cta: "Book Store Visit",
    ctaSecondary: "View Collection",
    image: "/src/EyewearpicBIG.png",
    icon: Glasses,
  },
  {
    id: 3,
    title: "Contact Lenses That Fit Comfortably",
    subtitle: "Professional fitting and premium contact lenses",
    description: "Daily, weekly, and monthly options with expert fitting services for optimal comfort",
    cta: "Book Appointment",
    ctaSecondary: "Book Fitting",
    image: "/src/ContactBig.png",
    icon: Calendar,
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden mt-0 pt-0">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`${slide.title} - Alpha Optical Pickering`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#083133]/70 to-[#46B8B6]/50"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 animate-float">
            {React.createElement(slides[currentSlide].icon, {
              size: 40,
              className: "text-white"
            })}
          </div>

          {/* Main Headline */}
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4 leading-tight">
            {slides[currentSlide].title}
          </h1>

          {/* Subheadline */}
          <h2 className="font-montserrat font-semibold text-xl md:text-2xl lg:text-3xl text-white/90 mb-4">
            Your Vision, Our Priority
          </h2>

          {/* Description */}
          <p className="font-open-sans text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            {slides[currentSlide].description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-[#46B8B6] hover:bg-[#083133] text-white px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:shadow-xl hover:shadow-[#46B8B6]/30 transition-all duration-300"
            >
              {slides[currentSlide].cta}
            </button>
            <button 
              onClick={scrollToContact}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-[#083133] transition-all duration-300"
            >
              Call Now
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-8">
            <p className="font-open-sans text-white/70 text-sm">
              Trusted by over 5,000+ families in Pickering & Durham Region
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;