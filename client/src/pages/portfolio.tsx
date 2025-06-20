import { useState, useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import { useScroll } from '@/hooks/use-scroll';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY, scrollToTop } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentSection = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-inter text-slate-700 bg-slate-50">
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ${
          scrollY > 300 ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </div>
  );
}
