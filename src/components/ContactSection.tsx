import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    location: 'Pickering',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (in production, this would send to your email service)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: 'Pickering',
          service: '',
          message: '',
        });
      }, 3000);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12 animate-fade-in">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h3 className="font-montserrat font-bold text-2xl text-green-800 mb-4">
              Thank You!
            </h3>
            <p className="font-open-sans text-lg text-green-700">
              Your appointment request has been sent. We'll confirm shortly and look forward to seeing you at Alpha Optical!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[#083133] mb-4">
            Schedule Your Appointment
          </h2>
          <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto">
            Ready to experience the Alpha Optical difference? Book your appointment with our expert optometrists in Pickering today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <h3 className="font-montserrat font-bold text-2xl text-[#083133] mb-8">
              Visit Our Pickering Location
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#46B8B6] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-[#083133]">Oshawa Store</h4>
                  <p className="font-open-sans text-[#083133]">
                   


                   600 GrandView St S, Oshawa, 
                   Ontario, L1H 8P4, Canada </p>
                  <h4 className="font-montserrat font-semibold text-[#083133]">Pickering Store</h4>
                  <p className="font-open-sans text-[#083133]">
                  750 Oklahoma Dr, Pickering, 
                  Ontario, L1W 3G9, Canada

                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#46B8B6] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-[#083133]">Oshawa Phone</h4>
                  <a 
                    href="tel:+19057233030"
                    className="font-open-sans text-[#46B8B6] hover:text-[#083133] transition-colors"
                  >
                    (905) 723-3030
                  </a>
                </div>
                 <div>
                  <h4 className="font-montserrat font-semibold text-[#083133]">Pickering Phone</h4>
                  <a 
                    href="tel:+19054206555"
                    className="font-open-sans text-[#46B8B6] hover:text-[#083133] transition-colors"
                  >
                    (905) 420-6555
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#46B8B6] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-[#083133]">Oshawa Timing</h4>
                  <div className="font-open-sans text-[#083133] space-y-1">
                    
                    <p>Mon-Tue: 2:00 PM - 6:00 PM</p>
                    <p>Wed-Fri: 11:00 AM - 6:30 PM</p>
                    <p>Sat: 11:00 AM - 3:30 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-montserrat font-semibold text-[#083133]">Pickering Timing</h4>
                  <div className="font-open-sans text-[#083133] space-y-1">
                    
                    <p>Mon: 9:30 AM - 1:30 PM</p>
                    <p>Tue-Wed: 9:30 AM - 6:00 PM</p>
                    <p>Thu & Fri: 10:30 AM - 7:00 PM</p>
                    <p>Sat: 9:30 AM - 1:30 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#46B8B6] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-montserrat font-semibold text-[#083133]">Email</h4>
                  <a 
                    href="mailto:info@alphaoptical.ca"
                    className="font-open-sans text-[#46B8B6] hover:text-[#083133] transition-colors"
                  >
                    alphaopticalintl@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[#46B8B6] mx-auto mb-4" />
                <p className="font-open-sans text-[#083133]">Interactive Map</p>
                <p className="font-open-sans text-sm text-[#083133]">Click to view directions</p>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-montserrat font-bold text-2xl text-[#083133] mb-6">
                Book Your Appointment
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-montserrat font-semibold text-[#083133] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46B8B6] focus:border-transparent transition-all duration-300 font-open-sans"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block font-montserrat font-semibold text-[#083133] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46B8B6] focus:border-transparent transition-all duration-300 font-open-sans"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block font-montserrat font-semibold text-[#083133] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46B8B6] focus:border-transparent transition-all duration-300 font-open-sans"
                      placeholder="(905) 555-0123"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block font-montserrat font-semibold text-[#083133] mb-2">
                      Location
                    </label>
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46B8B6] focus:border-transparent transition-all duration-300 font-open-sans"
                    >
                      <option value="Pickering">Pickering</option>
                      <option value="Oshawa">Oshawa</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block font-montserrat font-semibold text-[#083133] mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46B8B6] focus:border-transparent transition-all duration-300 font-open-sans"
                  >
                    <option value="">Select a service</option>
                    <option value="eye-exam">Comprehensive Eye Exam</option>
                    <option value="frames">Eyeglasses & Frames</option>
                    <option value="contacts">Contact Lens Fitting</option>
                    <option value="treatment">Eye Condition Treatment</option>
                    <option value="emergency">Emergency Eye Care</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-montserrat font-semibold text-[#083133] mb-2">
                    Message / Appointment Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#46B8B6] focus:border-transparent transition-all duration-300 font-open-sans resize-none"
                    placeholder="Any specific concerns or preferred appointment times..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#46B8B6] hover:bg-[#083133] text-white py-4 px-8 rounded-lg font-montserrat font-bold text-lg hover:shadow-xl hover:shadow-[#46B8B6]/30 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Book My Appointment</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;