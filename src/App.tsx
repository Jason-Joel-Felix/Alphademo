import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BlogSection from './components/BlogSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  React.useEffect(() => {
    // Handle hash navigation on page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white m-0 p-0">
      <Header />
      <main className="m-0 p-0">
        <HeroCarousel />
        <AboutSection />
        <ServicesSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;