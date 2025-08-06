import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, Mail, Linkedin, Twitter, Earth } from 'lucide-react'

const personalProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "-",
    image: "/modern-ecommerce-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/jjinueng/modern-ecommerce-interface",
    demo: "https://ecommerce-demo.vercel.app"
  },
]

const companyProjects = [
  {
    id: 1,
    title: "DiTAP JS",
    description: "-",
    tags: ["Javascript"]
  },
  {
    id: 2,
    title: "DiTAP Builder",
    description: "-",
    tags: ["Spring", "Thymeleaf", "PostgreSQL"]
  },
  {
    id: 3,
    title: "포항 AI 인파 플랫폼",
    description: "-",
    tags: ["Spring", "Next.js", "TypeScript", "PostgreSQL"]
  },

]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              JJINUENG.DEV
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
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/jjinueng" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/jjinueng" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://jjinueng.tistory.com/" target="_blank" rel="noopener noreferrer">
                  <Earth className="h-5 w-5" />
                </a>
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
              나다.
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
            </div>
          </div>

          {/* Project Highlights */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Project Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise CRM Platform</h3>
                <p className="text-gray-600 leading-relaxed">
                  Built a comprehensive customer management system serving 10,000+ users with advanced analytics and automation.
                </p>
              </div>
               */}
              {/* <div className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200">
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
              </div> */}
            </div>
          </div>

          {/* Call to Action */}
          {/* <div className="text-center">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
          </div> */}
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

          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">

          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

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
              <a href="https://github.com/jjinueng" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/jjinueng" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://jjinueng.tistory.com/" className="text-gray-400 hover:text-white transition-colors">
                <Earth className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
