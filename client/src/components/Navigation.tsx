'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [pathname] = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== '/') return
      
      const sections = ['home', 'projects', 'yapping', 'about', 'contact']
      let current = 'home'
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section
            break
          }
        }
      }
      
      setActiveSection(current)
    }
    
    if (pathname === '/') {
      window.addEventListener('scroll', handleScroll)
      handleScroll()
      
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }
  
  const navItems = [
    { id: 'home', label: 'Home', href: '/', isHome: true },
    { id: 'projects', label: 'Projects', href: pathname === '/' ? '#projects' : '/projects' },
    { id: 'yapping', label: 'Curiosities & Reflections', href: pathname === '/' ? '#yapping' : '/me-yapping' },
    { id: 'about', label: 'About', href: pathname === '/' ? '#about' : '/about' },
    { id: 'contact', label: 'Contact', href: pathname === '/' ? '#contact' : '/contact' },
  ]
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => {
              window.location.href = '/'
              window.scrollTo(0, 0)
            }} 
            className="flex items-center space-x-2 cursor-pointer" 
            data-testid="link-home-logo"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">MW</span>
            </div>
            <span className="font-semibold text-lg">Milly Wong</span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = item.isHome 
                ? pathname === '/' && activeSection === item.id
                : pathname === '/' 
                  ? activeSection === item.id 
                  : pathname.startsWith(item.href === '/' ? item.href : item.href.split('#')[0])
              
              // Special handling for Home button - reload page and scroll to top
              if (item.isHome) {
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      window.location.href = '/'
                      window.scrollTo(0, 0)
                    }}
                    className={`nav-link relative text-sm font-medium transition-colors ${
                      isActive ? 'active text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                    data-testid={`nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                )
              }
              
              return item.href.startsWith('#') ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link relative text-sm font-medium transition-colors ${
                    isActive ? 'active text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`nav-link relative text-sm font-medium transition-colors ${
                    isActive ? 'active text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  data-testid={`nav-${item.id}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
          
          <button 
            className="md:hidden text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            <i className="fas fa-bars text-lg"></i>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => {
              // Special handling for Home button in mobile menu
              if (item.isHome) {
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setIsOpen(false)
                      window.location.href = '/'
                      window.scrollTo(0, 0)
                    }}
                    className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                )
              }
              
              return item.href.startsWith('#') ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
