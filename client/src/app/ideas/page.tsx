import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { Link } from 'wouter'
import { coolIdeas } from '@/lib/data'


export default function IdeasPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8">
              <Link
                href="/me-yapping"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-6"
                data-testid="link-back-me-yapping"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Me Yapping
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Cool Ideas & Curiosities</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Exploring fascinating concepts from mathematics, physics, economics, and information theory
              </p>
            </div>
          </FadeIn>
          
          {/* Ideas Visual Gallery */}
          <FadeIn delay={0.2}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Visual Concepts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="animate-fade-in-scale">
                  <ImagePlaceholder 
                    number={42} 
                    alt="Mathematical Concepts and Visual Proofs"
                    aspectRatio="square"
                    size="md"
                  />
                </div>
                <div className="animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
                  <ImagePlaceholder 
                    number={43} 
                    alt="Physics Phenomena and Demonstrations"
                    aspectRatio="square"
                    size="md"
                  />
                </div>
                <div className="animate-fade-in-scale" style={{animationDelay: '0.4s'}}>
                  <ImagePlaceholder 
                    number={44} 
                    alt="Information Theory Visualizations"
                    aspectRatio="square"
                    size="md"
                  />
                </div>
              </div>
              <div className="animate-fly-in-up" style={{animationDelay: '0.6s'}}>
                <ImagePlaceholder 
                  number={45} 
                  alt="Complex Ideas Made Simple - Infographic Style"
                  aspectRatio="wide"
                  size="xl"
                  className="mb-8"
                />
              </div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coolIdeas.map((idea, index) => (
              <FadeIn key={idea.slug} delay={index * 0.1}>
                <Link
                  href={`/ideas/${idea.slug}`}
                  className="block glass-card rounded-xl p-6 hover:bg-card/50 transition-all duration-500 group cursor-pointer"
                  data-testid={`card-idea-${idea.slug}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <i className={`${idea.icon} text-primary text-xl`}></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {idea.title}
                      </h3>
                    </div>
                    <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
                  </div>
                  <p className="text-muted-foreground">{idea.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
