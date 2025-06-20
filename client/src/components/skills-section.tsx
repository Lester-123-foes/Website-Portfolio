interface SkillCardProps {
  title: string;
  icon: string;
  iconColor: string;
  skills: Array<{ name: string; level: number; color: string }>;
}

function SkillCard({ title, icon, iconColor, skills }: SkillCardProps) {
  return (
    <div className="skill-card bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
      <div className="text-center">
        <div className={`w-16 h-16 ${iconColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <i className={`${icon} text-2xl`}></i>
        </div>
        <h3 className="text-xl font-semibold text-slate-800 mb-4">{title}</h3>
        <div className="space-y-3">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-slate-600">{skill.name}</span>
              <div className="w-24 bg-slate-200 rounded-full h-2">
                <div 
                  className={`${skill.color} h-2 rounded-full`} 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "fas fa-code text-blue-600",
      iconColor: "bg-blue-100",
      skills: [
        { name: "React/Next.js", level: 95, color: "bg-blue-600" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 92, color: "bg-blue-600" }
      ]
    },
    {
      title: "Backend Development",
      icon: "fas fa-server text-green-600",
      iconColor: "bg-green-100",
      skills: [
        { name: "Node.js/Express", level: 88, color: "bg-green-600" },
        { name: "Python/Django", level: 85, color: "bg-green-600" },
        { name: "PostgreSQL", level: 90, color: "bg-green-600" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "fas fa-cloud text-purple-600",
      iconColor: "bg-purple-100",
      skills: [
        { name: "AWS/Vercel", level: 82, color: "bg-purple-600" },
        { name: "Docker", level: 78, color: "bg-purple-600" },
        { name: "Git/GitHub", level: 95, color: "bg-purple-600" }
      ]
    },
    {
      title: "Mobile Development",
      icon: "fas fa-mobile-alt text-orange-600",
      iconColor: "bg-orange-100",
      skills: [
        { name: "React Native", level: 80, color: "bg-orange-600" },
        { name: "Flutter", level: 75, color: "bg-orange-600" },
        { name: "PWA", level: 85, color: "bg-orange-600" }
      ]
    },
    {
      title: "Design & UX",
      icon: "fas fa-palette text-pink-600",
      iconColor: "bg-pink-100",
      skills: [
        { name: "Figma", level: 88, color: "bg-pink-600" },
        { name: "UI/UX Design", level: 85, color: "bg-pink-600" },
        { name: "Prototyping", level: 82, color: "bg-pink-600" }
      ]
    },
    {
      title: "Data & AI",
      icon: "fas fa-brain text-indigo-600",
      iconColor: "bg-indigo-100",
      skills: [
        { name: "Machine Learning", level: 78, color: "bg-indigo-600" },
        { name: "Data Analysis", level: 80, color: "bg-indigo-600" },
        { name: "API Integration", level: 92, color: "bg-indigo-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}
