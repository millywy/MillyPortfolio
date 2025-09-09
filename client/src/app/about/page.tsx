import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { Link } from 'wouter'
import { extracurriculars } from '@/lib/data'


export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">About Me</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get to know the person behind the projects - my background, interests, and the communities I'm part of
              </p>
            </div>
          </FadeIn>
          
          {/* Personal Photos Section */}
          <FadeIn delay={0.2}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="gradient-text">Visual Journey</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="animate-fly-in-left">
                  <ImagePlaceholder 
                    number={37} 
                    alt="Milly Wong - Professional Headshot"
                    aspectRatio="photo"
                    size="lg"
                  />
                </div>
                <div className="animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
                  <ImagePlaceholder 
                    number={38} 
                    alt="Academic Life at Stanford"
                    aspectRatio="photo"
                    size="lg"
                  />
                </div>
                <div className="animate-fly-in-right" style={{animationDelay: '0.4s'}}>
                  <ImagePlaceholder 
                    number={39} 
                    alt="Research and Laboratory Work"
                    aspectRatio="photo"
                    size="lg"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-fly-in-up" style={{animationDelay: '0.6s'}}>
                  <ImagePlaceholder 
                    number={40} 
                    alt="Basketball and Sports Activities"
                    aspectRatio="video"
                    size="md"
                  />
                </div>
                <div className="animate-fly-in-up" style={{animationDelay: '0.8s'}}>
                  <ImagePlaceholder 
                    number={41} 
                    alt="Hong Kong Background and Culture"
                    aspectRatio="video"
                    size="md"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Personal Background */}
            <FadeIn delay={1.0}>
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <i className="fas fa-user text-primary"></i>
                  Personal Background
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Education & Academic Journey</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <i className="fas fa-graduation-cap text-primary text-sm"></i>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Stanford University</h4>
                          <p className="text-muted-foreground text-sm mb-2">BS EE (2027), MS CS (2028), GPA 3.9</p>
                          <p className="text-muted-foreground text-sm">
                            Coursework: EE101A/B (Circuits), EE102A/B (Signals & Systems), CS106B (Object-oriented programming), CS103 (Discrete Math), CS107E (Embedded programming), CS109 (Probability), CS 111 (Systems), MATH104 (Linear Algebra), MATH51(Multi-variable Calc & Linear Algebra), MATH53 (ODE & Fourier Transform), PHY61(Special Relativity and Mechanics).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-secondary">Origins & Cultural Background</h3>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="fas fa-globe text-secondary text-sm"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Prior Education</h4>
                        <p className="text-muted-foreground text-sm">
                          Cardiff Sixth Form College, United Kingdom; Heep Yunn School, Hong Kong. 
                          This multicultural background has shaped my approach to 
                          problem-solving and collaboration across diverse teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Interests & Hobbies */}
            <FadeIn delay={1.1}>
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <i className="fas fa-heart text-accent"></i>
                  Interests & Passions
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-basketball-ball text-secondary text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Basketball</h4>
                      <p className="text-muted-foreground text-sm">
                        Playing since high school, basketball has taught me teamwork, 
                        strategy, and how to perform under pressure. I love the fast-paced 
                        decision-making and the way individual skills contribute to team success.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-book text-accent text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Reading</h4>
                      <p className="text-muted-foreground text-sm">
                        Avid reader across genres - from philosophy and science to contemporary 
                        fiction. I believe diverse reading strengthens both analytical thinking 
                        and empathy, essential skills for any engineer.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-cogs text-primary text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Technology & Human Experience</h4>
                      <p className="text-muted-foreground text-sm">
                        Fascinated by how technology can enhance rather than replace human 
                        connection. I'm particularly interested in brain-computer interfaces 
                        and how they might help people with disabilities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-palette text-secondary text-sm"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Design & Creativity</h4>
                      <p className="text-muted-foreground text-sm">
                        I believe great engineering is also great design. Whether it's 
                        user interfaces, medical devices, or research presentations, 
                        I strive to make complex things beautifully simple.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
          
          {/* Communities & Activities */}
          <FadeIn delay={1.2}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="gradient-text">Communities & Activities</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {extracurriculars.map((activity, index) => (
                  <div key={index} className="glass-card rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="fas fa-users text-primary text-lg"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{activity.name}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{activity.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link
                  href="/extracurriculars"
                  className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 font-medium"
                  data-testid="link-detailed-extracurriculars"
                >
                  Learn more about my involvement
                  <i className="fas fa-arrow-right text-sm"></i>
                </Link>
              </div>
            </div>
          </FadeIn>
          
          {/* Philosophy & Approach */}
          <FadeIn delay={1.3}>
            <div className="glass-card rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold mb-6">My Philosophy</h2>
              <div className="max-w-3xl mx-auto space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Technology must serve people and communities, not just markets. Faith and love guide me to engineer systems that are powerful and humane. I reflect on my mistakes often, eager to grow. My mission is lasting social good.
                </p>
                <p className="text-primary font-medium">
                  "We love because He first loved us." (1 John 4:19)
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}
