'use client'

import FadeIn from './FadeIn'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hero-gradient absolute inset-0 z-0"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-secondary/10 rounded-full animate-float" style={{animationDelay: '-4s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <FadeIn>
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="gradient-text">Milly Wong</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Designer, Developer & Researcher exploring the intersection of 
              <span className="text-primary font-semibold"> technology</span>, 
              <span className="text-accent font-semibold"> creativity</span>, and 
              <span className="text-secondary font-semibold"> human experience</span>
            </p>
            
            {/* 3D Scene placeholder */}
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto my-12 border-2 border-dashed border-primary/30">
              <div className="text-primary/60 text-center">
                <i className="fas fa-cube text-4xl mb-4 animate-pulse-slow"></i>
                <p className="text-lg font-medium">3D Interactive Scene</p>
                <p className="text-sm text-muted-foreground mt-2">Future: Floating islands/brain objects with Spline</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                onClick={() => {
                  const projectsSection = document.getElementById('projects')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                data-testid="button-explore-work"
              >
                Explore My Work
              </button>
              <a 
                href="/cv.pdf"
                className="glass-card hover:bg-card/50 text-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-block"
                data-testid="button-download-cv"
              >
                Download CV
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
