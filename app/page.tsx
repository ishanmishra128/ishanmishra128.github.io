'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail, MousePointer2 } from 'lucide-react'

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className={`text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Portfolio
          </div>
          <div className={`hidden md:flex space-x-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <Link href="/about" className="hover:text-purple-400 transition-colors">About</Link>
            <Link href="/experience" className="hover:text-purple-400 transition-colors">Experience</Link>
            <Link href="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
            <Link href="/skills" className="hover:text-purple-400 transition-colors">Skills</Link>
            <Link href="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Creative
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transforming data into insights and building intelligent systems that drive innovation
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/projects">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg group">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 text-lg">
                Get In Touch
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 mt-12 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col items-center text-gray-400">
          <MousePointer2 className="h-6 w-6 animate-bounce" />
          <span className="text-sm mt-2">Explore</span>
        </div>
      </div>

      {/* Enhanced Floating Data Science Elements */}
      <div className="absolute top-20 left-10 opacity-60">
        <div className="relative animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-8 h-8 border-2 border-purple-400 rounded rotate-45 animate-pulse" />
          <div className="absolute inset-2 bg-purple-400 rounded-sm" />
        </div>
      </div>
      <div className="absolute top-40 right-20 opacity-70">
        <div className="flex space-x-1 animate-float" style={{ animationDelay: '0.5s' }}>
          <div className="w-2 h-6 bg-pink-400 rounded animate-bounce" style={{ animationDelay: '0s' }} />
          <div className="w-2 h-8 bg-pink-400 rounded animate-bounce" style={{ animationDelay: '0.1s' }} />
          <div className="w-2 h-4 bg-pink-400 rounded animate-bounce" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-7 bg-pink-400 rounded animate-bounce" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-60">
        <div className="relative w-10 h-10 animate-float" style={{ animationDelay: '1s' }}>
          <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-spin-slow" />
          <div className="absolute top-2 left-2 w-6 h-6 border-2 border-blue-400 rounded-full" />
          <div className="absolute top-3 left-3 w-4 h-4 bg-blue-400 rounded-full animate-ping" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-70">
        <div className="grid grid-cols-3 gap-1 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-2 h-2 bg-teal-400 rounded animate-pulse" />
          <div className="w-2 h-2 bg-teal-400 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-2 bg-teal-400 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
          <div className="w-2 h-2 bg-teal-400 rounded animate-pulse" style={{ animationDelay: '0.6s' }} />
          <div className="w-2 h-2 bg-teal-400 rounded animate-pulse" style={{ animationDelay: '0.8s' }} />
          <div className="w-2 h-2 bg-teal-400 rounded animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
      <div className="absolute top-60 left-1/4 opacity-50">
        <div className="relative animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded animate-pulse" />
          <div className="w-8 h-1 bg-gradient-to-r from-pink-400 to-transparent rounded mt-1 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-10 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded mt-1 animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>
      </div>
      <div className="absolute top-80 right-1/3 opacity-60">
        <div className="relative w-8 h-8 animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="absolute inset-0 border border-teal-400 transform rotate-45 animate-spin-slow" />
          <div className="absolute top-1 left-1 w-6 h-6 border border-teal-400 transform rotate-45" />
          <div className="absolute top-3 left-3 w-2 h-2 bg-teal-400 animate-spin" />
        </div>
      </div>
      {/* New Creative Elements */}
      <div className="absolute top-32 right-1/4 opacity-50">
        <div className="relative animate-float" style={{ animationDelay: '3s' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" className="text-cyan-400">
            <path fill="currentColor" d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm4.64-1.96l3.54 3.54 7.07-7.07 1.41 1.41-8.48 8.48-4.95-4.95 1.41-1.41z" className="animate-pulse"/>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-60 right-20 opacity-40">
        <div className="flex items-center space-x-2 animate-float" style={{ animationDelay: '3.5s' }}>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
          <div className="w-1 h-8 bg-gradient-to-t from-yellow-400 to-transparent rounded" />
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  )
}
