'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ExternalLink, Github, Eye } from 'lucide-react'
import Image from 'next/image'

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
  {
    title: "Customer Churn Prediction Model",
    description: "Machine learning model to predict customer churn with 94% accuracy using ensemble methods and feature engineering.",
    image: "/churn-prediction-dashboard.png",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Plotly"],
    category: "ml",
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Sales Forecasting Dashboard",
    description: "Interactive dashboard for sales forecasting using time series analysis and statistical modeling.",
    image: "/sales-forecasting-dashboard.png",
    technologies: ["R", "Shiny", "Prophet", "ggplot2", "dplyr"],
    category: "analytics",
    github: "#",
    live: "#",
    featured: true
  },
  {
    title: "Social Media Sentiment Analysis",
    description: "NLP pipeline for real-time sentiment analysis of social media posts with automated reporting.",
    image: "/sentiment-analysis-dashboard.png",
    technologies: ["Python", "NLTK", "Transformers", "Streamlit", "MongoDB"],
    category: "nlp",
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Financial Risk Assessment Tool",
    description: "Statistical model for assessing financial risk using logistic regression and decision trees.",
    image: "/risk-assessment-dashboard.png",
    technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Flask"],
    category: "ml",
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Supply Chain Optimization",
    description: "Data-driven optimization model for supply chain efficiency using linear programming.",
    image: "/supply-chain-dashboard.png",
    technologies: ["Python", "PuLP", "NetworkX", "Matplotlib", "Jupyter"],
    category: "optimization",
    github: "#",
    live: "#",
    featured: false
  },
  {
    title: "Healthcare Data Analytics Platform",
    description: "Comprehensive analytics platform for healthcare data with predictive modeling capabilities.",
    image: "/healthcare-analytics-dashboard.png",
    technologies: ["R", "Shiny", "PostgreSQL", "Plotly", "caret"],
    category: "analytics",
    github: "#",
    live: "#",
    featured: true
  }
]

  const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'analytics', label: 'Data Analytics' },
  { id: 'nlp', label: 'NLP' },
  { id: 'optimization', label: 'Optimization' }
]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-purple-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            A showcase of my work spanning web development, AI/ML, and full-stack applications. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex flex-wrap gap-4 mb-12 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={filter === category.id ? "default" : "outline"}
              onClick={() => setFilter(category.id)}
              className={filter === category.id 
                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" 
                : "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Featured Projects */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-8 text-purple-300">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="bg-white/10 border-purple-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-purple-500/80 text-white">Featured</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="bg-gray-500/20 text-gray-300 text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold mb-8 text-pink-300">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-white/10 border-pink-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-pink-300">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-3 text-sm line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-pink-500/20 text-pink-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="text-pink-400 hover:text-pink-300 p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-pink-400 hover:text-pink-300 p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-pink-400 hover:text-pink-300 p-2">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
