import React from 'react';
import { Eye, CheckCircle, Calendar, Shield, Clock, Award, Info } from 'lucide-react';

const EyeExamsPage: React.FC = () => {
  const [showOHIPTooltip, setShowOHIPTooltip] = React.useState(false);
  const [showOCTTooltip, setShowOCTTooltip] = React.useState(false);
  const [showRLSTooltip, setShowRLSTooltip] = React.useState(false);
  const [showGlaucomaTooltip, setShowGlaucomaTooltip] = React.useState(false);
  const [showMacularTooltip, setShowMacularTooltip] = React.useState(false);
  const [showPresbyopiaTooltip, setShowPresbyopiaTooltip] = React.useState(false);

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
      question: "How much is an eye exam in Ontario?",
      answer: "OHIP covers basic eye exams for children under 20 and adults over 65. For adults 20-64, comprehensive eye exams typically range from $80-150. We accept most insurance plans to help cover costs."
    },
    {
      question: "How often should I get my eyes checked in Pickering?",
      answer: "Adults should have comprehensive eye exams every 1-2 years, or annually if you're over 60, have diabetes, wear glasses/contacts, or have family history of eye disease. Children should have their first exam by age 3, then regularly as recommended. Our Pickering optometrists will create a personalized schedule based on your individual risk factors and eye health needs."
    },
    {
      question: "What does a comprehensive eye exam include?",
      answer: "Our comprehensive eye exams include: visual acuity testing, refraction assessment, eye pressure measurement (tonometry), dilated retinal examination, peripheral vision testing (visual field), OCT scanning for detailed retinal imaging, and screening for glaucoma, cataracts, macular degeneration, and diabetic retinopathy. We also assess eye muscle function, color vision, and overall eye health."
    },
    {
      question: "Do you accept walk-ins for eye exams in Oshawa?",
      answer: "While we recommend booking appointments in advance to guarantee your preferred time slot, we do accommodate urgent eye care needs and emergency situations. Call our Pickering location at (905) 555-0123 to check same-day availability. For non-urgent appointments, booking ahead ensures you get the most convenient time for your schedule."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Early Disease Detection",
      description: "Identify glaucoma, cataracts, and macular degeneration before symptoms appear"
    },
    {
      icon: Eye,
      title: "Vision Correction",
      description: "Update prescriptions for glasses and contact lenses with precision testing"
    },
    {
      icon: Award,
      title: "Overall Health Monitoring",
      description: "Eye exams can detect diabetes, high blood pressure, and other systemic conditions"
    },
    {
      icon: Clock,
      title: "Preventive Care",
      description: "Regular monitoring helps maintain optimal eye health throughout your lifetime"
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
            <Eye size={40} className="text-white" />
          </div>
          
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight animate-fade-in">
            Expert Eye Exams in Pickering & Oshawa
          </h1>
          
          <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Comprehensive vision care with advanced technology and certified optometrists protecting your eye health
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
             <button 
              onClick={scrollToContact}
              className="bg-white text-[#083133] px-8 py-4 rounded-lg font-montserrat font-bold text-lg hover:bg-[#77D5D4] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book Your Exam Today
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

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
                Advanced Eye Care Technology in Pickering
              </h2>
              <p className="font-open-sans text-lg text-[#083133] mb-6 leading-relaxed">
                At Alpha Optical, we use state-of-the-art diagnostic equipment to provide the most thorough eye examinations in Pickering and Oshawa. Our comprehensive approach goes beyond basic vision testing to assess your complete eye health.
              </p>
              <p className="font-open-sans text-lg text-[#083133] mb-8 leading-relaxed">
                Our certified optometrists combine years of experience with cutting-edge technology including digital retinal imaging, 
                <span className="relative inline-block">
                  <button
                    onMouseEnter={() => setShowOCTTooltip(true)}
                    onMouseLeave={() => setShowOCTTooltip(false)}
                    className="text-[#46B8B6] hover:text-[#083133] transition-colors underline decoration-dotted"
                    aria-label="OCT scanning information"
                  >
                    OCT scanning
                  </button>
                  
                  {/* OCT Tooltip */}
                  {showOCTTooltip && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 bg-white border-2 border-[#77D5D4] rounded-lg shadow-xl p-4 z-10 animate-fade-in">
                      <div className="text-sm">
                        <h4 className="font-montserrat font-semibold text-[#083133] mb-2">OCT Scanning:</h4>
                        <p className="font-open-sans text-[#083133] mb-2">
                          Optical Coherence Tomography (OCT) is advanced imaging technology that creates detailed cross-sectional images of your retina.
                        </p>
                        <ul className="space-y-1 font-open-sans text-[#083133] text-xs">
                          <li>• Detects glaucoma, macular degeneration early</li>
                          <li>• Non-invasive and painless procedure</li>
                          <li>• Provides detailed retinal layer analysis</li>
                        </ul>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#77D5D4]"></div>
                    </div>
                  )}
                </span>, and automated visual field testing to detect eye conditions in their earliest stages.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <CheckCircle className="w-6 h-6 text-[#46B8B6]" />
                <div className="relative">
                  <div className="flex items-center space-x-2">
                    <span className="font-open-sans text-[#083133]">OHIP accepted for eligible patients</span>
                    <button
                      onMouseEnter={() => setShowOHIPTooltip(true)}
                      onMouseLeave={() => setShowOHIPTooltip(false)}
                      className="text-[#46B8B6] hover:text-[#083133] transition-colors"
                      aria-label="OHIP eligibility information"
                    >
                      <Info size={16} />
                    </button>
                  </div>
                  
                  {/* Tooltip */}
                  {showOHIPTooltip && (
                    <div className="absolute bottom-full left-0 mb-2 w-80 bg-white border-2 border-[#77D5D4] rounded-lg shadow-xl p-4 z-10 animate-fade-in">
                      <div className="text-sm">
                        <h4 className="font-montserrat font-semibold text-[#083133] mb-2">OHIP Coverage Details:</h4>
                        <ul className="space-y-1 font-open-sans text-[#083133]">
                          <li>• Children under 20 years old</li>
                          <li>• Adults 65 years and older</li>
                          <li>• Patients with specific medical conditions</li>
                          <li>• Annual coverage for eligible patients</li>
                        </ul>
                        <p className="mt-2 text-xs text-[#46B8B6] font-medium">
                          Contact us to verify your eligibility
                        </p>
                      </div>
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#77D5D4]"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <CheckCircle className="w-6 h-6 text-[#46B8B6]" />
                <span className="font-open-sans text-[#083133]">Most insurance plans welcome</span>
                
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-[#46B8B6]" />
                <span className="font-open-sans text-[#083133]">Same-day appointments available for urgent eye care</span>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <img
                src="/src/EyetestBig.png"
                alt="Eye exam at Alpha Optical Pickering with advanced technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Benefits of Regular Eye Exams
            </h2>
            <p className="font-open-sans text-xl text-[#083133] max-w-3xl mx-auto">
              Protect your vision and overall health with comprehensive eye examinations from our Pickering optometry team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#77D5D4] hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#46B8B6] to-[#77D5D4] rounded-xl flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                {benefit.title === "Early Disease Detection" ? (
                  <h3 className="font-montserrat font-bold text-xl text-[#083133] mb-4">
                    <span className="relative inline-block">
                      <button
                        onMouseEnter={() => setShowGlaucomaTooltip(true)}
                        onMouseLeave={() => setShowGlaucomaTooltip(false)}
                        className="text-[#083133] hover:text-[#46B8B6] transition-colors"
                        aria-label="Early disease detection information"
                      >
                        {benefit.title}
                      </button>
                      
                      {/* Disease Detection Tooltip */}
                      {showGlaucomaTooltip && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-80 bg-white border-2 border-[#77D5D4] rounded-lg shadow-xl p-4 z-10 animate-fade-in">
                          <div className="text-sm">
                            <h4 className="font-montserrat font-semibold text-[#083133] mb-2">Early Disease Detection:</h4>
                            <ul className="space-y-2 font-open-sans text-[#083133]">
                              <li><strong>Glaucoma:</strong> "Silent thief of sight" - often no symptoms until advanced</li>
                              <li><strong>Macular Degeneration:</strong> Leading cause of vision loss in adults over 50</li>
                              <li><strong>Cataracts:</strong> Clouding of the eye's natural lens</li>
                              <li><strong>Diabetic Retinopathy:</strong> Diabetes-related eye damage</li>
                            </ul>
                            <p className="mt-2 text-xs text-[#46B8B6] font-medium">
                              Early detection can prevent vision loss
                            </p>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#77D5D4]"></div>
                        </div>
                      )}
                    </span>
                  </h3>
                ) : (
                  <h3 className="font-montserrat font-bold text-xl text-[#083133] mb-4">
                    {benefit.title}
                  </h3>
                )}
                <p className="font-open-sans text-[#083133] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl text-[#083133] mb-6">
              Eye Exam Questions & Answers
            </h2>
            <p className="font-open-sans text-xl text-[#083133]">
              Common questions about eye exams in Pickering and Oshawa
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-montserrat font-bold text-xl text-[#083133] mb-4">
                  {faq.question}
                </h3>
                {faq.question.includes("How much is an eye exam") ? (
                  <p className="font-open-sans text-[#083133] leading-relaxed">
                    <span className="relative inline-block">
                      <button
                        onMouseEnter={() => setShowOHIPTooltip(true)}
                        onMouseLeave={() => setShowOHIPTooltip(false)}
                        className="text-[#46B8B6] hover:text-[#083133] transition-colors underline decoration-dotted"
                        aria-label="OHIP coverage details"
                      >
                        OHIP covers
                      </button>
                      
                      {/* OHIP FAQ Tooltip */}
                      {showOHIPTooltip && (
                        <div className="absolute bottom-full left-0 mb-2 w-80 bg-white border-2 border-[#77D5D4] rounded-lg shadow-xl p-4 z-10 animate-fade-in">
                          <div className="text-sm">
                            <h4 className="font-montserrat font-semibold text-[#083133] mb-2">OHIP Coverage Details:</h4>
                            <ul className="space-y-1 font-open-sans text-[#083133]">
                              <li>• Children under 20 years old</li>
                              <li>• Adults 65 years and older</li>
                              <li>• Patients with diabetes or other qualifying conditions</li>
                              <li>• Annual coverage for eligible patients</li>
                            </ul>
                            <p className="mt-2 text-xs text-[#46B8B6] font-medium">
                              Contact us to verify your specific eligibility
                            </p>
                          </div>
                          <div className="absolute top-full left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#77D5D4]"></div>
                        </div>
                      )}
                    </span> basic eye exams for children under 20 and adults over 65. For adults 20-64, comprehensive eye exams typically range from $80-150 in Ontario. We accept most major insurance plans including Blue Cross, Manulife, Sun Life, and Great-West Life to help cover costs. Many extended health plans cover eye exams partially or fully.
                  </p>
                ) : faq.question.includes("comprehensive eye exam include") ? (
                  <p className="font-open-sans text-[#083133] leading-relaxed">
                    Our comprehensive eye exams include: visual acuity testing, refraction assessment, eye pressure measurement (
                    <span className="relative inline-block">
                      <button
                        onMouseEnter={() => setShowRLSTooltip(true)}
                        onMouseLeave={() => setShowRLSTooltip(false)}
                        className="text-[#46B8B6] hover:text-[#083133] transition-colors underline decoration-dotted"
                        aria-label="Tonometry information"
                      >
                        tonometry
                      </button>
                      
                      {/* Tonometry Tooltip */}
                      {showRLSTooltip && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 bg-white border-2 border-[#77D5D4] rounded-lg shadow-xl p-4 z-10 animate-fade-in">
                          <div className="text-sm">
                            <h4 className="font-montserrat font-semibold text-[#083133] mb-2">Tonometry Test:</h4>
                            <p className="font-open-sans text-[#083133] mb-2">
                              Measures the pressure inside your eye (intraocular pressure) to screen for glaucoma.
                            </p>
                            <ul className="space-y-1 font-open-sans text-[#083133] text-xs">
                              <li>• Quick, painless procedure</li>
                              <li>• Uses gentle puff of air or light touch</li>
                              <li>• Critical for glaucoma detection</li>
                            </ul>
                          </div>
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#77D5D4]"></div>
                        </div>
                      )}
                    </span>), dilated retinal examination, peripheral vision testing (visual field), OCT scanning for detailed retinal imaging, and screening for glaucoma, cataracts, macular degeneration, and diabetic retinopathy. We also assess eye muscle function, color vision, and overall eye health.
                  </p>
                ) : (
                  <p className="font-open-sans text-[#083133] leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#083133] to-[#46B8B6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calendar className="w-16 h-16 text-white mx-auto mb-6 animate-float" />
          <h2 className="font-montserrat font-bold text-4xl text-white mb-6">
            Ready to Schedule Your Eye Exam?
          </h2>
          <p className="font-open-sans text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't wait for vision problems to develop. Book your comprehensive eye exam today and take the first step toward lifelong eye health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-[#083133] px-8 py-4 rounded-xl font-montserrat font-bold text-lg hover:bg-[#77D5D4] hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Book Your Appointment
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

export default EyeExamsPage;