import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jordin",
    location: "Pickering, ON",
    rating: 5,
    text: "Fantastic business for all your vision and glasses needs, and impeccable customer service from George.",
    service: "Eye Exam & Frames",
  },
  {
    id: 2,
    name: "Richard Zachariah",
    location: "Oshawa, ON",
    rating: 5,
    text: "What impressed me the most was the urgency with which my glasses were made—within just three days—ensuring I didn’t have to struggle at work without them.",
    service: "Progressive Lenses",
  },
  {
    id: 3,
    name: "Leddy",
    location: "Oshawa, ON",
    rating: 5,
    text: "Alpha Optical has been looking after my eye care needs for almost 5 years now. I can’t recommend them highly enough.",
    service: "Dry Eye Treatment",
  },
  {
    id: 4,
    name: "Brianna",
    location: "Oshawa, ON",
    rating: 5,
    text: "Highly recommend!! I had an emergency eye issue and they got me in right away and was able to help.",
    service: "Family Eye Care",
  },
  {
    id: 5,
    name: "Dhamayanti",
    location: "Pickering, ON",
    rating: 5,
    text: "The staff members were incredibly helpful and patient with me. They have a wide selection of styles, and the best part is that their glasses and sunglasses range from affordable to high-end, so there's something for every budget.",
    service: "Family Eye Care",
  },
  {
    id: 6,
    name: "Shyam",
    location: "Pickering, ON",
    rating: 5,
    text: "Lovely place lots of good selection. Wonderful staff. Had a great experience getting my glasses.",
    service: "Family Eye Care",
  },
  {
    id: 7,
    name: "Susan",
    location: "Oshawa, ON",
    rating: 5,
    text: "A new shop in my neighbourhood! Customer service impeccable",
    service: "Family Eye Care",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#083133] to-[#46B8B6] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#77D5D4] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-white mb-4">
            What Our Patients Say
          </h2>
          <p className="font-open-sans text-xl text-white/80 max-w-3xl mx-auto">
            Real reviews from satisfied patients across Pickering and the Durham Region.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 animate-fade-in">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-[#77D5D4] mb-6 mx-auto" />

            {/* Testimonial Content */}
            <div className="text-center">
              <p className="font-open-sans text-lg md:text-xl text-white mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="text-center">
                <h4 className="font-montserrat font-bold text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="font-open-sans text-[#77D5D4]">
                  {testimonials[currentTestimonial].location}
                </p>
                <p className="font-open-sans text-white/70 text-sm mt-1">
                  {testimonials[currentTestimonial].service}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;