'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { ArrowLeft, Wrench, TrendingUp, Sparkles, Filter } from 'lucide-react'

type SkillKey = 'Python' | 'Statistics' | 'Machine Learning' | 'Visualization' | 'Systems'

type SkillMilestone = {
  label: string
  notes?: string
  levels: Record<SkillKey, number>
}

export default function SkillsPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [selected, setSelected] = useState<SkillKey | 'all'>('all')

  useEffect(() => setIsLoaded(true), [])

  // Core skills grid content (trimmed for brevity; keep your existing categories if you prefer)
  const skillCategories = [
    {
      title: 'Data Analysis & Statistics',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python (Pandas, NumPy)', level: 95 },
        { name: 'R Programming', level: 88 },
        { name: 'Statistical Modeling', level: 92 },
        { name: 'Hypothesis Testing', level: 90 },
        { name: 'Time Series Analysis', level: 85 },
        { name: 'A/B Testing', level: 87 },
      ],
    },
    {
      title: 'Machine Learning & AI',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Scikit-learn', level: 93 },
        { name: 'TensorFlow/Keras', level: 89 },
        { name: 'XGBoost/LightGBM', level: 91 },
        { name: 'Deep Learning', level: 82 },
        { name: 'NLP', level: 78 },
      ],
    },
    {
      title: 'Visualization & BI',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Matplotlib/Seaborn', level: 90 },
        { name: 'Plotly/Dash', level: 87 },
        { name: 'Tableau', level: 85 },
        { name: 'Power BI', level: 83 },
        { name: 'D3.js', level: 78 },
      ],
    },
  ]

  // Skill progression timeline data (yearly milestones)
  const milestones: SkillMilestone[] = [
    {
      label: '2021',
      notes: 'Foundations: programming + stats basics',
      levels: {
        Python: 60,
        Statistics: 55,
        'Machine Learning': 30,
        Visualization: 45,
        Systems: 35,
      },
    },
    {
      label: '2022',
      notes: 'Projects + BI internship; first ML models',
      levels: {
        Python: 75,
        Statistics: 70,
        'Machine Learning': 55,
        Visualization: 65,
        Systems: 50,
      },
    },
    {
      label: '2023',
      notes: 'DS internship; production pipelines',
      levels: {
        Python: 88,
        Statistics: 82,
        'Machine Learning': 72,
        Visualization: 78,
        Systems: 65,
      },
    },
    {
      label: '2024',
      notes: 'Research + advanced modeling',
      levels: {
        Python: 93,
        Statistics: 90,
        'Machine Learning': 85,
        Visualization: 84,
        Systems: 72,
      },
    },
  ]

  const skills: (SkillKey | 'all')[] = ['all', 'Python', 'Statistics', 'Machine Learning', 'Visualization', 'Systems']

  const filteredMilestones = useMemo(() => milestones, [milestones])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-indigo-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            A comprehensive overview of my technical skills and how they have grown over time.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-white/10 border-indigo-500/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg text-indigo-300">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-300">{skill.name}</span>
                        <span className="text-sm text-indigo-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-gray-700" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Progression Timeline */}
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-indigo-300">Skill Progression Timeline</h2>
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-indigo-300" />
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <Button
                    key={s}
                    size="sm"
                    variant={selected === s ? 'default' : 'outline'}
                    onClick={() => setSelected(s)}
                    className={
                      selected === s
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700'
                        : 'border-indigo-400 text-indigo-300 hover:bg-indigo-400/20'
                    }
                  >
                    {s}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-white/5 border-indigo-500/20 backdrop-blur-md">
            <CardContent className="p-6">
              <div className="relative pl-10 md:pl-12">
                {/* Vertical line */}
                <div className="absolute left-3 md:left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
                  <div className="absolute inset-0 opacity-40 animate-pulse bg-gradient-to-b from-white/10 to-transparent rounded-full" />
                </div>

                {/* Milestones */}
                <div className="space-y-12">
                  {filteredMilestones.map((m, idx) => {
                    const entries =
                      selected === 'all'
                        ? (Object.keys(m.levels) as SkillKey[])
                        : ([selected] as SkillKey[])

                    return (
                      <div key={m.label} className="relative">
                        {/* Node */}
                        <div className="absolute left-0 md:left-1 top-0.5">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 shadow ring-4 ring-indigo-900/60">
                            <div className="w-4 h-4 rounded-full animate-ping bg-indigo-400/40" />
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                          {/* Year */}
                          <div className="min-w-[72px] md:min-w-[96px] text-indigo-300 font-semibold">
                            {m.label}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            {m.notes && (
                              <div className="text-sm text-gray-400 mb-4">{m.notes}</div>
                            )}

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                              {entries.map((key) => (
                                <div key={key} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse" />
                                      <div className="text-sm text-white">{key}</div>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-indigo-300">
                                      <TrendingUp className="h-4 w-4" />
                                      {m.levels[key]}%
                                    </div>
                                  </div>
                                  {/* Micro sparkline */}
                                  <div className="h-10 relative mb-2">
                                    <div className="absolute inset-0 opacity-30 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded" />
                                    <svg viewBox="0 0 100 24" className="w-full h-full">
                                      <polyline
                                        fill="none"
                                        stroke="url(#grad)"
                                        strokeWidth="2"
                                        points={`0,20 20,18 40,${24 - Math.max(8, m.levels[key] / 12)} 60,${24 - Math.max(10, m.levels[key] / 10)} 80,${24 - Math.max(12, m.levels[key] / 9)} 100,${24 - Math.max(14, m.levels[key] / 8)}`}
                                      />
                                      <defs>
                                        <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
                                          <stop offset="0%" stopColor="#6366F1" />
                                          <stop offset="100%" stopColor="#A855F7" />
                                        </linearGradient>
                                      </defs>
                                    </svg>
                                  </div>
                                  <Progress value={m.levels[key]} className="h-2 bg-gray-700" />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tools & Certifications (optional example; keep/add your existing content below) */}
        <div className={`mt-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Card className="bg-white/10 border-purple-500/20 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                  <Wrench className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-purple-300">Tools & Technologies</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {['Jupyter', 'RStudio', 'Tableau', 'Power BI', 'Airflow', 'MLflow', 'GitHub'].map((tool) => (
                  <div
                    key={tool}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-colors duration-300"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
