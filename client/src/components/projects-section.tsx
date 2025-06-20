interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Array<{ name: string; color: string }>;
  liveUrl?: string;
  githubUrl?: string;
}

function ProjectCard({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) {
  return (
    <div className="project-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2">
      <img 
        src={image} 
        alt={`${title} interface`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className={`px-3 py-1 ${tech.color} text-sm rounded-full`}>
              {tech.name}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {liveUrl && (
            <a href={liveUrl} className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              <i className="fas fa-external-link-alt mr-2"></i>
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} className="text-slate-500 hover:text-slate-700">
              <i className="fab fa-github text-xl"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with admin dashboard, payment integration, and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "React", color: "bg-blue-100 text-blue-600" },
        { name: "Node.js", color: "bg-green-100 text-green-600" },
        { name: "PostgreSQL", color: "bg-purple-100 text-purple-600" },
        { name: "Stripe", color: "bg-orange-100 text-orange-600" }
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "Next.js", color: "bg-blue-100 text-blue-600" },
        { name: "TypeScript", color: "bg-indigo-100 text-indigo-600" },
        { name: "Socket.io", color: "bg-green-100 text-green-600" },
        { name: "Redis", color: "bg-red-100 text-red-600" }
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization platform with real-time metrics, custom reports, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "React", color: "bg-blue-100 text-blue-600" },
        { name: "D3.js", color: "bg-yellow-100 text-yellow-600" },
        { name: "Python", color: "bg-green-100 text-green-600" },
        { name: "FastAPI", color: "bg-purple-100 text-purple-600" }
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking application with real-time messaging, content sharing, and community features.",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "React Native", color: "bg-blue-100 text-blue-600" },
        { name: "Express", color: "bg-green-100 text-green-600" },
        { name: "MongoDB", color: "bg-purple-100 text-purple-600" },
        { name: "AWS", color: "bg-orange-100 text-orange-600" }
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool with natural language processing and automated workflow optimization.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "Next.js", color: "bg-blue-100 text-blue-600" },
        { name: "OpenAI", color: "bg-green-100 text-green-600" },
        { name: "Prisma", color: "bg-purple-100 text-purple-600" },
        { name: "Vercel", color: "bg-indigo-100 text-indigo-600" }
      ],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive health and fitness tracking application with wearable integration and personalized insights.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: [
        { name: "Flutter", color: "bg-blue-100 text-blue-600" },
        { name: "Firebase", color: "bg-green-100 text-green-600" },
        { name: "ML Kit", color: "bg-purple-100 text-purple-600" },
        { name: "Apple Health", color: "bg-orange-100 text-orange-600" }
      ],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to solve real-world problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105">
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
