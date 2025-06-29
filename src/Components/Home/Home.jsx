import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const canvasRef = useRef(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles = []
    const particleCount = 50

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.size = Math.random() * 3 + 1
        this.opacity = Math.random() * 0.5 + 0.2
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
      }

      update() {
        this.x += this.vx
        this.y += this.vy

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "This AI platform transformed our data analysis capabilities. We've seen a 300% increase in efficiency.",
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "Data Scientist, InnovateAI",
      content: "The machine learning models are incredibly accurate. This is exactly what we needed for our predictive analytics.",
      avatar: "👨‍🔬"
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, FutureTech",
      content: "Implementation was seamless and the results exceeded our expectations. Highly recommended!",
      avatar: "👩‍💻"
    }
  ]

  const aiTools = [
    {
      icon: "🤖",
      title: "Chatbot",
      description: "Chat with AI to get answers to your questions",
      category: "AI",
      link: "/products/chatbot"
    },
    {
      icon: "✍️",
      title: "AI Content Writer",
      description: "Generate high-quality content with advanced AI assistance",
      category: "Content",
      link: "/products/content-writer"
    },
    {
      icon: "🎨",
      title: "AI Image Generator",
      description: "Create stunning images from text descriptions",
      category: "Creative",
      link: "/products/image-generator"
    },
    {
      icon: "💻",
      title: "AI Code Assistant",
      description: "Write better code faster with AI-powered suggestions",
      category: "Development",
      link: "/products/code-assistant"
    }
  ]

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" />
      
    

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI-Powered
            </span>
            <br />
            <span className="text-white">Future Solutions</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto px-4">
            Transform your business with cutting-edge artificial intelligence technology.
            Discover the power of machine learning, neural networks, and predictive analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 lg:mb-16">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-white/20 transition-all duration-300">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-300 text-sm sm:text-base">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-sm sm:text-base">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm sm:text-base">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">AI Tools & Solutions</h2>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            Powerful AI tools designed to transform your workflow and boost productivity
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {aiTools.map((tool, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer transform hover:-translate-y-2"
               onClick={() => navigate(tool.link)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{tool.icon}</div>
                  <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {tool.category}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                
                <div className="text-blue-600 font-semibold text-sm">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105">
              <Link to="/products">
                View All products
              </Link>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12 lg:mb-16">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 text-center">
              <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">{testimonials[currentTestimonial].avatar}</div>
              <p className="text-lg sm:text-xl text-gray-700 mb-4 sm:mb-6 italic">"{testimonials[currentTestimonial].content}"</p>
              <div className="mb-4 sm:mb-6">
                <h4 className="text-lg font-semibold text-gray-900">{testimonials[currentTestimonial].name}</h4>
                <span className="text-gray-600">{testimonials[currentTestimonial].role}</span>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6 sm:mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">Join thousands of companies already leveraging AI to drive growth and innovation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-gray-100 transition-colors">
              Start Your AI Journey
            </button>
            <button className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-white hover:text-blue-600 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 