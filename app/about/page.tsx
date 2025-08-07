'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Download } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

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

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <Image
                    src="/professional-headshot.png"
                    alt="Profile"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-3xl font-bold mb-6 text-purple-300">Hello, I'm [Your Name]</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Data Science and Information Systems major with a love for uncovering 
              insights from complex datasets. With expertise in statistical analysis, machine learning, 
              and system design, I specialize in building data-driven solutions that solve real-world problems.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              When I'm not analyzing data or building predictive models, you'll find me exploring new 
              statistical methods, contributing to open-source data science projects, or sharing knowledge 
              with the analytics community. I believe in the power of data to drive meaningful decisions 
              and create positive impact.
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-white/10 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-gray-300">Data Projects</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">3+</div>
              <div className="text-gray-300">Years Experience</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
              <div className="text-gray-300">Data Points Analyzed</div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">95%</div>
              <div className="text-gray-300">Model Accuracy</div>
            </CardContent>
          </Card>
        </div>

        {/* What I Love */}
        <div className={`transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold mb-8 text-center">What I Love</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 border-purple-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-purple-400 rounded transform rotate-45" />
                  <div className="absolute inset-2 bg-gray-900 rounded" />
                  <div className="absolute inset-3 bg-purple-400 rounded" />
                </div>
                <h4 className="text-xl font-bold mb-3">Statistical Analysis</h4>
                <p className="text-gray-300">Extracting meaningful patterns and insights from complex datasets using advanced statistical methods.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-purple-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-end justify-center space-x-1">
                  <div className="w-2 h-6 bg-pink-400 rounded" />
                  <div className="w-2 h-8 bg-pink-400 rounded" />
                  <div className="w-2 h-4 bg-pink-400 rounded" />
                  <div className="w-2 h-10 bg-pink-400 rounded" />
                </div>
                <h4 className="text-xl font-bold mb-3">Data Visualization</h4>
                <p className="text-gray-300">Creating compelling visual narratives that make complex data accessible and actionable.</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-purple-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-12 h-12 mx-auto mb-4 relative">
                  <div className="absolute inset-0 border-2 border-blue-400 rounded-full" />
                  <div className="absolute top-2 left-2 w-8 h-8 border-2 border-blue-400 rounded-full" />
                  <div className="absolute top-4 left-4 w-4 h-4 bg-blue-400 rounded-full" />
                </div>
                <h4 className="text-xl font-bold mb-3">Machine Learning</h4>
                <p className="text-gray-300">Building predictive models and intelligent systems that learn and adapt from data.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
