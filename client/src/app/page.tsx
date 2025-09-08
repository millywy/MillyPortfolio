import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FadeIn from '@/components/FadeIn'
import ProjectCard from '@/components/ProjectCard'
import ResearchCard from '@/components/ResearchCard'
import FloatingBubbles from '@/components/FloatingBubbles'
import { Link } from 'wouter'
import { projects, researchProjects, coolIdeas, extracurriculars } from '@/lib/data'

export default function HomePage() {
  return (
    <>
      <FloatingBubbles />
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        
        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Featured Projects</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A collection of engineering, design, and research projects showcasing innovation across multiple disciplines
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.slice(0, 6).map((project, index) => (
                  <ProjectCard key={project.slug} project={project} delay={index * 0.1} />
                ))}
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <Link
                  href="/projects"
                  className="glass-card hover:bg-card/50 text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
                  data-testid="link-view-all-projects"
                >
                  View All Projects
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Research</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Academic research spanning neuroscience, medical technology, and information theory
                </p>
              </div>
            </FadeIn>
            
            <div className="space-y-8">
              {researchProjects.map((research, index) => (
                <FadeIn key={research.slug} delay={index * 0.2}>
                  <ResearchCard research={research} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Me Yapping Section */}
        <section id="yapping" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">Me Yapping</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  My thoughts on ideas, philosophy, culture, art, and life - where curiosity meets commentary
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Cool Ideas Subsection */}
              <FadeIn delay={0.2}>
                <Link 
                  href="/ideas"
                  className="block glass-card rounded-xl p-8 hover:bg-card/50 transition-all duration-500 group cursor-pointer"
                  data-testid="link-cool-ideas"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <i className="fas fa-lightbulb text-primary text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Cool Ideas & Curiosities</h3>
                    <p className="text-muted-foreground mb-6">
                      Exploring fascinating concepts from mathematics, physics, economics, and information theory
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    {coolIdeas.slice(0, 5).map((idea) => (
                      <div key={idea.slug} className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                        <i className={`${idea.icon} text-primary text-sm`}></i>
                        <span className="font-medium">{idea.title}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Explore Ideas</span>
                      <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              </FadeIn>
              
              {/* Opinions & Essays Subsection */}
              <FadeIn delay={0.3}>
                <Link 
                  href="/me-yapping"
                  className="block glass-card rounded-xl p-8 hover:bg-card/50 transition-all duration-500 group cursor-pointer"
                  data-testid="link-opinions"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <i className="fas fa-pen text-secondary text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Opinions & Essays</h3>
                    <p className="text-muted-foreground mb-6">
                      Personal reflections on society, culture, philosophy, and the human experience
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-lock text-accent text-sm"></i>
                      <span className="font-medium">Politics <small className="text-xs text-muted-foreground">(friends only)</small></span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-balance-scale text-primary text-sm"></i>
                      <span className="font-medium">Inequality</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-globe text-secondary text-sm"></i>
                      <span className="font-medium">Cultural Differences</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-users text-accent text-sm"></i>
                      <span className="font-medium">Friendship</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-brain text-primary text-sm"></i>
                      <span className="font-medium">Philosophy</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Read Essays</span>
                      <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              </FadeIn>
              
              {/* Art & Commentary Subsection */}
              <FadeIn delay={0.4}>
                <Link 
                  href="/art"
                  className="block glass-card rounded-xl p-8 hover:bg-card/50 transition-all duration-500 group cursor-pointer"
                  data-testid="link-art"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <i className="fas fa-palette text-accent text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Art & Commentary</h3>
                    <p className="text-muted-foreground mb-6">
                      Reviews and reflections on books, movies, art, and creative works that inspire me
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-book text-primary text-sm"></i>
                      <span className="font-medium">Book Reviews</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-film text-secondary text-sm"></i>
                      <span className="font-medium">Movie Commentary</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-paint-brush text-accent text-sm"></i>
                      <span className="font-medium">Art Analysis</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">View Commentary</span>
                      <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              </FadeIn>
              
              {/* Faith Subsection */}
              <FadeIn delay={0.5}>
                <Link 
                  href="/faith"
                  className="block glass-card rounded-xl p-8 hover:bg-card/50 transition-all duration-500 group cursor-pointer"
                  data-testid="link-faith"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <i className="fas fa-pray text-primary text-xl"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Faith</h3>
                    <p className="text-muted-foreground mb-6">
                      My spiritual journey, testimony, and resources for exploring questions of faith and meaning
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-heart text-accent text-sm"></i>
                      <span className="font-medium">My Testimony</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-book-open text-primary text-sm"></i>
                      <span className="font-medium">Apologetics Resources</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-background/50 transition-colors">
                      <i className="fas fa-question-circle text-secondary text-sm"></i>
                      <span className="font-medium">Faith & Science</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Learn More</span>
                      <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">About Me</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Get to know the person behind the projects - my background, interests, and the communities I'm part of
                </p>
              </div>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Background */}
              <FadeIn delay={0.2}>
                <div className="glass-card rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <i className="fas fa-user text-primary"></i>
                    Fun Facts
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="fas fa-graduation-cap text-primary text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Education</h4>
                        <p className="text-muted-foreground text-sm">Stanford University - Bioengineering & Computer Science</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="fas fa-basketball-ball text-secondary text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Sports</h4>
                        <p className="text-muted-foreground text-sm">Basketball enthusiast - playing since high school</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="fas fa-book text-accent text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Reading</h4>
                        <p className="text-muted-foreground text-sm">Avid reader of philosophy, science, and contemporary fiction</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="fas fa-cogs text-primary text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Interests</h4>
                        <p className="text-muted-foreground text-sm">Intersection of technology, art, and human experience</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* Extracurriculars */}
              <FadeIn delay={0.3}>
                <div className="glass-card rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <i className="fas fa-users text-secondary"></i>
                    Communities & Activities
                  </h3>
                  
                  <div className="space-y-4">
                    {extracurriculars.map((activity, index) => (
                      <div key={index} className="p-4 bg-background/50 rounded-lg border border-border/50">
                        <h4 className="font-semibold mb-2">{activity.name}</h4>
                        <p className="text-muted-foreground text-sm">{activity.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <Link
                  href="/about"
                  className="glass-card hover:bg-card/50 text-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-block"
                  data-testid="link-full-about"
                >
                  Learn More About Me
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Get In Touch</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always excited to connect with fellow creators, researchers, and curious minds. Let's build something amazing together!
              </p>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <a href="mailto:millywy@stanford.edu" className="glass-card rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 group" data-testid="link-email-stanford">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Stanford Email</h3>
                  <p className="text-sm text-muted-foreground">millywy@stanford.edu</p>
                </a>
                
                <a href="https://github.com/millywy" className="glass-card rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 group" data-testid="link-github">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i className="fab fa-github text-secondary text-xl"></i>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">GitHub</h3>
                  <p className="text-sm text-muted-foreground">@millywy</p>
                </a>
                
                <a href="https://www.linkedin.com/in/millyyuwong" className="glass-card rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 group" data-testid="link-linkedin">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i className="fab fa-linkedin text-accent text-xl"></i>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">millyyuwong</p>
                </a>
                
                <a href="mailto:millywong78@gmail.com" className="glass-card rounded-xl p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105 group" data-testid="link-email-personal">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Personal Email</h3>
                  <p className="text-sm text-muted-foreground">millywong78@gmail.com</p>
                </a>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="text-center">
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 inline-block"
                  data-testid="button-full-contact"
                >
                  Get In Touch
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Chatbot placeholder */}
        <div className="fixed bottom-6 right-6 z-50">
          <button className="w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group" data-testid="button-chatbot">
            <i className="fas fa-comments text-xl group-hover:scale-110 transition-transform"></i>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">MW</span>
              </div>
              <span className="font-medium">© 2025 Milly Wong</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
              <span>Built with React & Tailwind</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
