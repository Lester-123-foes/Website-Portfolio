import { useTyping } from '@/hooks/use-typing';
import { useScroll } from '@/hooks/use-scroll';

export default function HeroSection() {
  const phrases = ['Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'];
  const typingText = useTyping(phrases);
  const { scrollToSection } = useScroll();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Hi, I'm <span className="text-blue-600">Alex Chen</span>
          </h1>
          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-600 mb-8 h-12 flex items-center justify-center">
            <span className="typing-cursor pr-1">{typingText}</span>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer creating modern, user-friendly web applications with clean code and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="mt-16 animate-slide-up">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-slate-500 hover:text-blue-600 text-2xl transition-colors duration-300 hover:transform hover:scale-110">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-600 text-2xl transition-colors duration-300 hover:transform hover:scale-110">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-600 text-2xl transition-colors duration-300 hover:transform hover:scale-110">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-600 text-2xl transition-colors duration-300 hover:transform hover:scale-110">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
