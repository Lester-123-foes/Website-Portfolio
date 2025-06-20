export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Alex Chen</h3>
          <p className="text-slate-300 mb-8 max-w-md mx-auto">
            Full Stack Developer passionate about creating amazing digital experiences
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-slate-300 hover:text-white text-xl transition-colors duration-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-white text-xl transition-colors duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-white text-xl transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-white text-xl transition-colors duration-300">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2024 Alex Chen. All rights reserved. | Built with ❤️ using modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
