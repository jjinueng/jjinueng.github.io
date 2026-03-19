"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Github, ExternalLink, Linkedin, Earth } from 'lucide-react'

type ProjectItem = {
  role: string
  description: string
  image?: string
}

type ProjectDetailSection = {
  title: string
  problem: string
  solutions: string[]
  result: string
}

type CompanyProject = {
  id: number
  title: string
  description: string
  tags: string[]
  thumbnail?: string
  detailImages?: string[]
  overview?: string
  keywords?: string[]
  detailSections?: ProjectDetailSection[]
  items?: ProjectItem[]
}

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

const companyProjects: CompanyProject[] = [
  {
    id: 1,
    title: "DiTAP JS",
    description: "-",
    tags: ["Javascript"],
    items: [
      {
        role: "역할 예시",
        description: "이 프로젝트에서 수행한 역할과 작업 내용을 설명하세요.",
        image: "/placeholder.jpg"
      },
      {
        role: "추가 역할",
        description: "다른 작업이나 기능에 대한 설명을 추가할 수 있습니다.",
        image: "/placeholder.jpg"
      }
    ]
  },
  {
    id: 2,
    title: "DiTAP Builder",
    description: "-",
    tags: ["Spring", "Thymeleaf", "PostgreSQL"],
    items: [
      {
        role: "역할 예시",
        description: "이 프로젝트에서 수행한 역할과 작업 내용을 설명하세요.",
        image: "/placeholder.jpg"
      }
    ]
  },
  {
    id: 3,
    title: "포항 AI 인파 플랫폼",
    description: "지도 기반 모니터링 기능부터 운영/분석 기능, 테스트 및 문서화까지 전반을 담당했습니다.",
    tags: ["Spring", "Next.js", "TypeScript", "PostgreSQL"],
    thumbnail: "/projects/pohang-ai-crowd/thumbnail.png",
    detailImages: [
      "/projects/pohang-ai-crowd/detail-01.png",
      "/projects/pohang-ai-crowd/detail-02.png",
      "/projects/pohang-ai-crowd/detail-03.png",
      "/projects/pohang-ai-crowd/detail-04.png",
    ],
    overview:
      "포항 인파 분석 플랫폼에서 관제/관리자 업무를 지원하는 지도 기반 모니터링 웹 기능을 개발했습니다. 주요 범위는 레이어 패널 및 시설물(센서/CCTV) 관리, CCTV 영상 표출, 장소 검색(상가/행정망 주소), 사각지대 분석, 공지사항/게시판, 테스트/문서화까지 포함했습니다.",
    keywords: [
      "지도 기반 모니터링 UI",
      "레이어/시설물 패널",
      "장소검색(상가/주소)",
      "CCTV/센서 관리 및 영상 표출",
      "사각지대 분석",
      "테스트 데이터/이슈 대응/문서화",
    ],
    detailSections: [
      {
        title: "담당 업무 1) 지도 기반 모니터링 UI(레이어 패널) 개발",
        problem:
          "운영자가 다양한 관제 정보를 보기 위해서는 지도 위 레이어를 빠르게 켜고 끄고, 상황에 맞는 정보(레이어/시설물)를 일관된 방식으로 탐색할 수 있어야 했습니다.",
        solutions: [
          "레이어 패널(레이어) 기능을 개발해 지도에서 레이어를 체계적으로 관리할 수 있게 했습니다.",
          "레이어 패널(시설물) 기능을 개발해 시설물(센서/CCTV)과 연동되는 구성으로 확장했습니다.",
        ],
        result:
          "운영자가 지도 화면에서 필요한 정보를 패널 중심으로 빠르게 탐색할 수 있는 사용 흐름을 확보했습니다.",
      },
      {
        title: "담당 업무 2) 장소검색 기능(상가/행정망 주소) 구현",
        problem:
          "관제/운영 환경에서는 대상 위치를 신속히 찾아야 하며, 상가 검색과 행정망 주소 검색 등 다양한 요구가 존재했습니다.",
        solutions: [
          "상가 검색 기능을 구현해 운영자가 관심 지점을 빠르게 찾을 수 있게 했습니다.",
          "행정망 주소 검색 기능을 구현해 주소 기반 탐색을 지원했습니다.",
        ],
        result:
          "운영자가 텍스트 입력만으로 지도를 원하는 위치로 이동시키는 업무 효율적인 탐색 기능을 제공했습니다.",
      },
      {
        title: "담당 업무 3) 시설물 관리(센서/CCTV) 및 CCTV 영상 표출",
        problem:
          "현장 운영에서는 시설물 정보 관리와 함께, 관제 화면에서 CCTV 영상을 확인하는 기능이 필수였습니다.",
        solutions: [
          "CCTV 관리 기능을 개발해 시설물 운영 정보를 체계적으로 관리할 수 있게 했습니다.",
          "센서 관리 기능을 개발해 센서 자산과 운영 정보를 관리할 수 있게 했습니다.",
          "CCTV 영상 표출 기능을 개발해 관제 화면에서 영상 확인이 가능하도록 구성했습니다.",
        ],
        result:
          "시설물 데이터 관리부터 영상 확인까지 이어지는 운영자 중심의 관제 흐름을 구현했습니다.",
      },
      {
        title: "담당 업무 4) 분석 기능(사각지대 분석) 개발",
        problem:
          "플랫폼 관점에서 인파/관제 데이터를 보여주는 것에서 그치지 않고, 운영 의사결정을 돕는 분석 기능이 필요했습니다.",
        solutions: ["사각지대 분석 기능을 개발해 운영자가 취약 지점을 파악할 수 있게 했습니다."],
        result: "단순 조회가 아닌 분석 기반의 운영 지원 기능을 제공했습니다.",
      },
      {
        title: "담당 업무 5) 운영 기능(공지사항/게시판) 개발",
        problem:
          "운영자 조직 내 공지 전달과 커뮤니케이션을 위해 기본적인 콘텐츠 관리 기능이 필요했습니다.",
        solutions: ["공지사항 기능을 개발했습니다.", "게시판 기능을 개발했습니다."],
        result:
          "플랫폼 내에서 운영 공지와 커뮤니케이션이 가능한 기본 운영 체계를 구성했습니다.",
      },
      {
        title: "품질/산출물) 테스트 데이터, 이슈 수정, 문서화",
        problem:
          "기능 개발 이후 안정적인 배포와 인수를 위해 테스트, 데이터 준비, 문서화가 함께 필요했습니다.",
        solutions: [
          "개발 및 검증을 위한 더미 데이터 생성을 수행했습니다.",
          "이슈 수정 및 테스트를 통해 기능 안정화를 진행했습니다.",
          "메뉴얼 및 테스트 문서, 추가 문서를 작성해 인수/운영 관점의 산출물을 정리했습니다.",
          "필요 데이터 기반 마련을 위해 도로 데이터 추출 작업을 수행했습니다.",
        ],
        result:
          "개발뿐 아니라 테스트/문서화까지 포함해 배포 및 인수에 필요한 준비 작업을 함께 마무리했습니다.",
      },
    ],
  },

]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<CompanyProject | null>(null)

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
                      className="w-full h-64 object-cover object-center"
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
                <Card 
                  key={project.id} 
                  className="group border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.thumbnail && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={`${project.title} 썸네일`}
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  )}
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
            
            {/* Project Detail Dialog */}
            {selectedProject && (
              <Dialog open={true} onOpenChange={(open) => !open && setSelectedProject(null)}>
                <DialogContent className="!max-w-[66.67vw] w-full max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-gray-900 mb-2">
                      {selectedProject.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-8">
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-sm px-3 py-1 bg-gray-100 text-gray-700">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {selectedProject.overview && (
                      <section className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">프로젝트 개요</h3>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {selectedProject.overview}
                        </p>
                      </section>
                    )}

                    {selectedProject.detailImages && selectedProject.detailImages.length > 0 && (
                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">예시 화면</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.detailImages.slice(0, 4).map((imagePath, index) => (
                            <div key={imagePath} className="relative aspect-video overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                              <Image
                                src={imagePath}
                                alt={`${selectedProject.title} 예시 화면 ${index + 1}`}
                                fill
                                className="object-cover object-center"
                                loading="lazy"
                              />
                            </div>
                          ))}
                        </div>
                      </section>
                    )}

                    {selectedProject.keywords && selectedProject.keywords.length > 0 && (
                      <section>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">핵심 키워드</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.keywords.map((keyword) => (
                            <Badge key={keyword} variant="outline" className="text-sm px-3 py-1">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </section>
                    )}

                    {selectedProject.detailSections && selectedProject.detailSections.length > 0 && (
                      <section className="space-y-5">
                        {selectedProject.detailSections.map((section) => (
                          <article key={section.title} className="rounded-xl border border-gray-200 p-5">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="rounded-lg border border-rose-100 bg-rose-50/70 p-4">
                                <p className="text-sm font-semibold text-rose-700 mb-2">문제</p>
                                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                                  {section.problem}
                                </p>
                              </div>
                              <div className="rounded-lg border border-blue-100 bg-blue-50/70 p-4">
                                <p className="text-sm font-semibold text-blue-700 mb-2">해결</p>
                                <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700 leading-relaxed">
                                  {section.solutions.map((solution) => (
                                    <li key={solution}>{solution}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="rounded-lg border border-emerald-100 bg-emerald-50/70 p-4">
                                <p className="text-sm font-semibold text-emerald-700 mb-2">성과</p>
                                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                                  {section.result}
                                </p>
                              </div>
                            </div>
                          </article>
                        ))}
                      </section>
                    )}

                    {selectedProject.items && selectedProject.items.length > 0 && (
                      <section className="space-y-4">
                        {selectedProject.items.map((item, index) => (
                          <div key={index} className="pb-6 border-b last:border-b-0 last:pb-0">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.role}</h3>
                            <div className="flex flex-col md:flex-row gap-4">
                              {item.image && (
                                <div className="relative w-full md:w-64 lg:w-80 aspect-video flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                                  <Image
                                    src={item.image}
                                    alt={item.role}
                                    fill
                                    className="object-cover object-center"
                                    loading="lazy"
                                  />
                                </div>
                              )}
                              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line flex-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </section>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            )}
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
