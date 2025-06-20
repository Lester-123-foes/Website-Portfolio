export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
              alt="Alex Chen - Professional headshot" 
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto lg:max-w-none transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800">Full Stack Developer & Creative Problem Solver</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating robust, scalable applications using modern technologies. My journey began with a computer science degree and has evolved through diverse projects ranging from e-commerce platforms to data visualization tools.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm passionate about clean code, user experience, and staying current with emerging technologies. When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, or exploring new frameworks.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Experience</h4>
                <p className="text-blue-600 font-medium">5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Projects Completed</h4>
                <p className="text-blue-600 font-medium">50+</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Happy Clients</h4>
                <p className="text-blue-600 font-medium">30+</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Code Quality</h4>
                <p className="text-blue-600 font-medium">AAA+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
