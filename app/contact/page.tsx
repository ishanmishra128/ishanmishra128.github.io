'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react'

export default function ContactPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "hello@yourname.com",
      link: "mailto:hello@yourname.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      name: "GitHub",
      url: "#",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      name: "Twitter",
      url: "#",
      color: "hover:text-sky-400"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="text-white hover:text-teal-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Contact
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl">
            Let's collaborate and bring your ideas to life. I'm always excited to work on 
            new projects and connect with fellow developers and innovators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <Card className="bg-white/10 border-teal-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-300">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-teal-500/30 text-white placeholder-gray-400 focus:border-teal-400"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-teal-500/30 text-white placeholder-gray-400 focus:border-teal-400"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/10 border-teal-500/30 text-white placeholder-gray-400 focus:border-teal-400"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-white/10 border-teal-500/30 text-white placeholder-gray-400 focus:border-teal-400 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Contact Details */}
            <Card className="bg-white/10 border-teal-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-300">Get in touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.title}</div>
                        <a 
                          href={info.link}
                          className="text-white hover:text-teal-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white/10 border-teal-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-300">Follow me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`p-3 bg-white/10 rounded-lg transition-all duration-300 hover:bg-white/20 ${social.color} transform hover:scale-110`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-white/10 border-teal-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-300">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white">Available for new projects</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    I'm currently accepting new freelance projects and full-time opportunities. 
                    Let's discuss how we can work together!
                  </p>
                  <div className="text-sm text-gray-400">
                    <div>Response time: Usually within 24 hours</div>
                    <div>Timezone: PST (UTC-8)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
