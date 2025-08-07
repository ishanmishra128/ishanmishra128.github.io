'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, MapPin, Calendar, Building } from 'lucide-react'

export default function ExperiencePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const timelineEvents = [
  {
    id: 1,
    title: "Data Science Intern",
    company: "Tech Analytics Corp",
    location: "San Francisco, CA",
    period: "Summer 2023",
    startDate: "2023-06",
    endDate: "2023-08",
    type: "work",
    description: "Developed predictive models for customer behavior analysis, improving marketing campaign effectiveness by 35%. Built automated data pipelines and created interactive dashboards using Python and cloud technologies.",
    technologies: ["Python", "Scikit-learn", "Tableau", "SQL", "AWS"],
    achievements: [
      "Improved marketing ROI by 35%",
      "Built 3 automated data pipelines",
      "Created 5+ interactive dashboards"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Research Assistant",
    company: "University Data Lab",
    location: "Your University",
    period: "2022 - Present",
    startDate: "2022-09",
    endDate: "present",
    type: "research",
    description: "Conducted statistical analysis on large healthcare datasets for academic research. Implemented machine learning algorithms for patient outcome prediction and published findings in peer-reviewed journals.",
    technologies: ["R", "Python", "SPSS", "LaTeX", "Git"],
    achievements: [
      "Published 2 research papers",
      "Analyzed 100K+ patient records",
      "Developed novel ML algorithms"
    ],
    publications: ["ML Models for Patient Risk Assessment", "Healthcare Data Mining Techniques"],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Business Intelligence Intern",
    company: "Retail Analytics Inc.",
    location: "New York, NY",
    period: "Summer 2022",
    startDate: "2022-06",
    endDate: "2022-08",
    type: "work",
    description: "Created comprehensive business intelligence reports and dashboards for retail operations. Performed market basket analysis and customer segmentation using advanced clustering algorithms.",
    technologies: ["Power BI", "SQL Server", "Python", "Excel", "Tableau"],
    achievements: [
      "Increased sales insights accuracy by 40%",
      "Segmented 50K+ customers",
      "Built 10+ BI reports"
    ],
    color: "from-green-500 to-emerald-500"
  }
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-blue-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
  <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
      Experience
    </h1>
    <p className="text-xl text-gray-300 mb-12 max-w-3xl">
      My journey through data science and analytics, from research to real-world applications.
    </p>
  </div>

  {/* Interactive Timeline */}
  <div className={`relative transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    {/* Timeline Line */}
    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 rounded-full animate-pulse opacity-50" />
    </div>

    {/* Timeline Events */}
    <div className="space-y-12">
      {timelineEvents.map((event, index) => (
        <div
          key={event.id}
          className={`relative flex items-center transition-all duration-1000 delay-${(index + 1) * 200} ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Timeline Node */}
          <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${event.color} border-4 border-gray-900 shadow-lg`}>
              <div className="absolute inset-0 rounded-full animate-ping bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            {/* Floating Icon */}
            <div className="absolute -top-2 -right-2 w-4 h-4">
              {event.type === 'work' ? (
                <div className="w-full h-full bg-blue-400 rounded transform rotate-45" />
              ) : (
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 border border-purple-400 rounded-full" />
                  <div className="absolute top-1 left-1 w-2 h-2 bg-purple-400 rounded-full" />
                </div>
              )}
            </div>
          </div>

          {/* Content Card */}
          <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} w-full md:w-5/12`}>
            <Card className="bg-white/10 border-blue-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 group overflow-hidden">
              {/* Card Header with Animated Background */}
              <div className={`relative p-6 bg-gradient-to-r ${event.color} bg-opacity-10`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                <CardHeader className="p-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <CardTitle className="text-xl text-white mb-1">{event.title}</CardTitle>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Building className="h-4 w-4 mr-2" />
                        {event.company}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 leading-relaxed">{event.description}</p>
                
                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {event.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 text-sm flex items-center">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-3" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Publications (for research) */}
                {event.publications && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-purple-300 mb-2 flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
                      Publications
                    </h4>
                    <ul className="space-y-1">
                      {event.publications.map((pub, pubIndex) => (
                        <li key={pubIndex} className="text-gray-300 text-sm flex items-center">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-3" />
                          {pub}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {event.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ))}
    </div>

    {/* Timeline End */}
    <div className="relative flex justify-center mt-12">
      <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2">
        <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-bounce" />
      </div>
      <div className="ml-20 md:ml-0 text-center">
        <div className="text-gray-400 text-sm">Present Day</div>
        <div className="text-teal-300 font-semibold">Ready for New Opportunities</div>
      </div>
    </div>
  </div>

  {/* Experience Stats */}
  <div className={`mt-16 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
    <h2 className="text-3xl font-bold mb-8 text-center text-teal-300">Experience Overview</h2>
    <div className="grid md:grid-cols-4 gap-6">
      <Card className="bg-white/10 border-blue-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 relative">
            <div className="absolute inset-0 bg-blue-400 rounded transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
            <div className="absolute inset-2 bg-gray-900 rounded" />
            <div className="absolute inset-3 bg-blue-400 rounded" />
          </div>
          <div className="text-2xl font-bold text-blue-400 mb-2">2+</div>
          <div className="text-gray-300 text-sm">Years Experience</div>
        </CardContent>
      </Card>
      <Card className="bg-white/10 border-purple-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 flex items-end justify-center space-x-1">
            <div className="w-2 h-6 bg-purple-400 rounded group-hover:h-8 transition-all duration-300" />
            <div className="w-2 h-8 bg-purple-400 rounded group-hover:h-10 transition-all duration-300" />
            <div className="w-2 h-4 bg-purple-400 rounded group-hover:h-6 transition-all duration-300" />
          </div>
          <div className="text-2xl font-bold text-purple-400 mb-2">3</div>
          <div className="text-gray-300 text-sm">Organizations</div>
        </CardContent>
      </Card>
      <Card className="bg-white/10 border-green-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-2 border-green-400 rounded-full group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute top-2 left-2 w-8 h-8 border-2 border-green-400 rounded-full" />
            <div className="absolute top-4 left-4 w-4 h-4 bg-green-400 rounded-full animate-pulse" />
          </div>
          <div className="text-2xl font-bold text-green-400 mb-2">15+</div>
          <div className="text-gray-300 text-sm">Projects Completed</div>
        </CardContent>
      </Card>
      <Card className="bg-white/10 border-teal-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 grid grid-cols-3 gap-1">
            <div className="w-2 h-2 bg-teal-400 rounded group-hover:scale-125 transition-transform duration-300" />
            <div className="w-2 h-2 bg-teal-400 rounded group-hover:scale-125 transition-transform duration-300 delay-75" />
            <div className="w-2 h-2 bg-teal-400 rounded group-hover:scale-125 transition-transform duration-300 delay-150" />
            <div className="w-2 h-2 bg-teal-400 rounded group-hover:scale-125 transition-transform duration-300 delay-225" />
            <div className="w-2 h-2 bg-teal-400 rounded group-hover:scale-125 transition-transform duration-300 delay-300" />
            <div className="w-2 h-2 bg-teal-400 rounded group-hover:scale-125 transition-transform duration-300 delay-375" />
          </div>
          <div className="text-2xl font-bold text-teal-400 mb-2">2</div>
          <div className="text-gray-300 text-sm">Publications</div>
        </CardContent>
      </Card>
    </div>
  </div>
</div>
    </div>
  )
}
