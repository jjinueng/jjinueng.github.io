import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Mail, Linkedin, Twitter } from 'lucide-react'

const personalProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and inventory management.",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/alexjohnson/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/task-management-dashboard.png",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/alexjohnson/task-manager",
    demo: "https://taskmanager-demo.netlify.app"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.",
    image: "/preview/project4.png",
    tags: ["Vue.js", "API Integration", "Chart.js", "CSS3"],
    github: "https://github.com/alexjohnson/weather-dashboard",
    demo: "https://weather-app-demo.surge.sh"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing creative work with smooth animations, optimized performance, and modern design.",
    image: "/creative-portfolio-website.png",
    tags: ["Gatsby", "GSAP", "Contentful", "Netlify"],
    github: "https://github.com/alexjohnson/portfolio-v2",
    demo: "https://alexjohnson-portfolio.com"
  }
]

const companyProjects = [
  {
    id: 1,
    title: "Enterprise CRM System",
    description: "Led the development of a comprehensive customer relationship management system serving over 10,000 users. Implemented advanced analytics, automated workflows, and integrated with multiple third-party services to streamline business operations.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    id: 2,
    title: "Financial Trading Platform",
    description: "Built a high-performance trading platform handling millions of transactions daily. Developed real-time data processing, risk management algorithms, and compliance reporting features for institutional clients.",
    tags: ["Python", "Django", "Redis", "WebSocket"]
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description: "Architected a HIPAA-compliant healthcare management platform connecting patients, providers, and insurance companies. Implemented secure data handling, appointment scheduling, and telemedicine capabilities.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Docker"]
  },
  {
    id: 4,
    title: "E-Learning Platform",
    description: "Developed a scalable learning management system supporting interactive courses, progress tracking, and certification programs. Served over 50,000 students with 99.9% uptime and optimized performance.",
    tags: ["Vue.js", "Laravel", "MySQL", "Kubernetes"]
  }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Kim Jiyoon
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image and Introduction */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <Image
                src="https://avatars.githubusercontent.com/u/115696442?v=4"
                alt="Kim Jiyoon"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-6 border-4 border-gray-100"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Kim Jiyoon
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Full-stack developer passionate about creating scalable web applications and solving complex technical challenges.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Work Experience
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Full-Stack Developer</h3>
                  <p className="text-gray-600">Heliosen</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
                    2024 - Present
                  </span>
                </div>
              </div>
              
              {/* <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Full-Stack Developer</h3>
                  <p className="text-gray-600">InnovateLab Inc.</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
                    2020 - 2022
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Frontend Developer</h3>
                  <p className="text-gray-600">StartupHub</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
                    2019 - 2020
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Junior Web Developer</h3>
                  <p className="text-gray-600">Digital Agency Pro</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-sm font-medium text-gray-500 bg-white px-3 py-1 rounded-full">
                    2018 - 2019
                  </span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Project Highlights */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Project Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise CRM Platform</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built a comprehensive customer management system serving 10,000+ users with advanced analytics and automation.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Trading Dashboard</h3>
                <p className="text-gray-600 leading-relaxed">
                  Developed a high-performance financial platform processing millions of transactions with real-time data visualization.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Healthcare Management System</h3>
                <p className="text-gray-600 leading-relaxed">
                  Architected a HIPAA-compliant platform connecting patients and providers with secure telemedicine capabilities.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">E-Learning Platform</h3>
                <p className="text-gray-600 leading-relaxed">
                  Created a scalable LMS supporting 50,000+ students with interactive courses and certification programs.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Analytics Tool</h3>
                <p className="text-gray-600 leading-relaxed">
                  Integrated machine learning algorithms to provide predictive insights and automated reporting for business intelligence.
                </p>
              </div>
              
              <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile-First E-Commerce App</h3>
                <p className="text-gray-600 leading-relaxed">
                  Launched a progressive web app with seamless payment integration and inventory management for retail clients.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Featured Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A showcase of personal projects and professional contributions that demonstrate 
              my expertise in modern web development.
            </p>
          </div>

          {/* Personal Projects */}
          <div className="mb-20">
            <div className="flex items-center mb-12">
              <div className="flex-grow h-px bg-gray-200"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 px-8 tracking-tight">
                Personal Projects
              </h3>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {personalProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-2xl transition-all duration-500 bg-white rounded-2xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex space-x-3">
                        <Button size="sm" className="bg-white/90 text-gray-900 hover:bg-white backdrop-blur-sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-sm px-3 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Projects */}
          <div>
            <div className="flex items-center mb-12">
              <div className="flex-grow h-px bg-gray-200"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 px-8 tracking-tight">
                Company Projects
              </h3>
              <div className="flex-grow h-px bg-gray-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyProjects.map((project) => (
                <Card key={project.id} className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl overflow-hidden">
                  <CardContent className="p-8 h-full">
                    <div className="flex flex-col h-full">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg mb-6 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-sm px-3 py-1 border-gray-300 text-gray-600 hover:border-gray-400 transition-colors">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {"Let's Work Together"}
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {"I'm always interested in new opportunities and exciting projects. "} 
            {"Let's discuss how we can bring your ideas to life."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 jjinueng. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
