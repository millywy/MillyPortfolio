'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission - in production, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Get In Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                I'm always excited to connect with fellow creators, researchers, and curious minds. 
                Let's build something amazing together!
              </p>
            </div>
          </FadeIn>
          
          {/* Contact Methods */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <a 
                href="mailto:milly@example.com" 
                className="glass-card rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 group text-center"
                data-testid="contact-email"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-envelope text-primary text-xl"></i>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Email</h3>
                <p className="text-sm text-muted-foreground">milly@example.com</p>
              </a>
              
              <a 
                href="https://github.com/millywong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 group text-center"
                data-testid="contact-github"
              >
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fab fa-github text-secondary text-xl"></i>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">GitHub</h3>
                <p className="text-sm text-muted-foreground">@millywong</p>
              </a>
              
              <a 
                href="https://linkedin.com/in/millywong" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 group text-center"
                data-testid="contact-linkedin"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fab fa-linkedin text-accent text-xl"></i>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">Milly Wong</p>
              </a>
              
              <a 
                href="/cv.pdf" 
                className="glass-card rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 group text-center"
                data-testid="contact-cv"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <i className="fas fa-file-pdf text-primary text-xl"></i>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Resume</h3>
                <p className="text-sm text-muted-foreground">Download CV</p>
              </a>
            </div>
          </FadeIn>
          
          {/* Contact Form */}
          <FadeIn delay={0.4}>
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-100 text-center">
                  <i className="fas fa-check-circle mr-2"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-100 text-center">
                  <i className="fas fa-exclamation-circle mr-2"></i>
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground"
                      placeholder="Your name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground"
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors text-foreground"
                    placeholder="What's this about?"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none text-foreground"
                    placeholder="Tell me about your project, idea, or just say hello!"
                    data-testid="textarea-message"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 disabled:hover:scale-100 disabled:hover:shadow-none"
                  data-testid="button-send-message"
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <i className="fas fa-paper-plane ml-2"></i>
                    </>
                  )}
                </button>
              </form>
            </div>
          </FadeIn>
          
          {/* Additional Info */}
          <FadeIn delay={0.6}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-lightbulb text-accent"></i>
                  Project Collaborations
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm always interested in collaborating on projects that combine technology 
                  with social impact. Whether it's biomedical devices, educational tools, 
                  or research initiatives, let's explore how we can work together.
                </p>
              </div>
              
              <div className="glass-card rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-comments text-primary"></i>
                  Speaking & Mentoring
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I enjoy speaking about the intersection of faith and science, 
                  bioengineering applications, and mentoring students interested 
                  in STEM fields. Feel free to reach out about opportunities.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}
