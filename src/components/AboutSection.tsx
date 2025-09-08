import React from 'react';
import { Award, Shield, MapPin } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#083133] mb-6">
              About Alpha Optical
            </h2>
            <p className="font-open-sans text-lg text-[#083133] mb-6 leading-relaxed">
              Alpha Optical has proudly served Pickering and the Durham Region with comprehensive eye care, 
              premium eyewear, and advanced optometry services. From routine exams to luxury frames, 
              we focus on your eye health and style.
            </p>
            <p className="font-open-sans text-lg text-[#083133] mb-8 leading-relaxed">
              Our team of licensed optometrists combines cutting-edge technology with personalized care 
              to ensure you receive the best possible vision solutions for your lifestyle.
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Award className="w-8 h-8 text-[#46B8B6] mb-3" />
                <h3 className="font-montserrat font-semibold text-[#083133] mb-1">Licensed Optometrists</h3>
                <p className="font-open-sans text-sm text-[#083133]">Certified professionals with years of experience</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Shield className="w-8 h-8 text-[#46B8B6] mb-3" />
                <h3 className="font-montserrat font-semibold text-[#083133] mb-1">Insurance Accepted</h3>
                <p className="font-open-sans text-sm text-[#083133]">Most major insurance plans welcome</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <MapPin className="w-8 h-8 text-[#46B8B6] mb-3" />
                <h3 className="font-montserrat font-semibold text-[#083133] mb-1">Local Canadian</h3>
                <p className="font-open-sans text-sm text-[#083133]">Proudly serving the Pickering community</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/src/Pic-01.jpg"
                alt="Alpha Optical optometrist examining patient in Pickering ON"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#083133]/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-bold text-[#083133]">5000+</div>
                <div className="text-sm font-open-sans text-[#083133]">Happy Patients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;