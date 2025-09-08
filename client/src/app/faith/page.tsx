import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { Link } from 'wouter'


export default function FaithPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
                <span className="gradient-text">Faith</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                My spiritual journey, testimony, and resources for exploring questions of faith and meaning
              </p>
            </div>
          </FadeIn>
          
          {/* Faith Journey Visual Story */}
          <FadeIn delay={0.2}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Journey of Faith</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="animate-fly-in-left">
                  <ImagePlaceholder 
                    number={51} 
                    alt="Faith and Science Integration"
                    aspectRatio="photo"
                    size="lg"
                  />
                </div>
                <div className="animate-fly-in-right" style={{animationDelay: '0.3s'}}>
                  <ImagePlaceholder 
                    number={52} 
                    alt="Community and Spiritual Growth"
                    aspectRatio="photo"
                    size="lg"
                  />
                </div>
              </div>
              <div className="animate-fly-in-up" style={{animationDelay: '0.6s'}}>
                <ImagePlaceholder 
                  number={53} 
                  alt="Stanford Faith Communities and Events"
                  aspectRatio="wide"
                  size="xl"
                  className="mb-8"
                />
              </div>
            </div>
          </FadeIn>
          
          <div className="space-y-12">
            {/* My Testimony Section */}
            <FadeIn delay={0.2}>
              <div className="glass-card rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-heart text-accent text-xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold">My Testimony</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    My faith journey began during my undergraduate years when I was grappling with big questions 
                    about purpose, meaning, and the intersection of science and spirituality. As someone deeply 
                    immersed in bioengineering and computer science, I initially saw faith and science as separate, 
                    perhaps even contradictory domains.
                  </p>
                  
                  <p>
                    Through my involvement with Christian Union and the Veritas Forum at Stanford, I discovered 
                    that faith doesn't require abandoning intellectual rigor. Instead, it offers a framework 
                    for understanding the deeper questions that science alone cannot answer: Why does the universe 
                    exist? What gives life meaning? How should we treat one another?
                  </p>
                  
                  <p>
                    My work in neuroscience, particularly with EEG and brain-computer interfaces, has deepened 
                    rather than diminished my sense of wonder about consciousness and the human experience. 
                    The more I learn about the complexity of the brain, the more I'm amazed by the mystery 
                    of consciousness itself.
                  </p>
                  
                  <p>
                    Faith, for me, is not about having all the answers but about trusting in something greater 
                    than ourselves while using our minds and talents to serve others. It's what drives my 
                    passion for using technology to solve meaningful problems and improve human lives.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Apologetics Resources Section */}
            <FadeIn delay={0.4}>
              <div className="glass-card rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-book-open text-primary text-xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold">Apologetics Resources</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Books, articles, and resources that have shaped my understanding of faith and reason:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Essential Books</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-background/50 rounded-lg">
                        <h4 className="font-medium">"Mere Christianity" by C.S. Lewis</h4>
                        <p className="text-sm text-muted-foreground">A logical exploration of Christian faith</p>
                      </div>
                      <div className="p-3 bg-background/50 rounded-lg">
                        <h4 className="font-medium">"The Reason for God" by Timothy Keller</h4>
                        <p className="text-sm text-muted-foreground">Addressing doubts about Christianity</p>
                      </div>
                      <div className="p-3 bg-background/50 rounded-lg">
                        <h4 className="font-medium">"The Language of God" by Francis Collins</h4>
                        <p className="text-sm text-muted-foreground">A scientist's perspective on faith</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Organizations</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-background/50 rounded-lg">
                        <h4 className="font-medium">The Veritas Forum</h4>
                        <p className="text-sm text-muted-foreground">University discussions on life's hardest questions</p>
                      </div>
                      <div className="p-3 bg-background/50 rounded-lg">
                        <h4 className="font-medium">Reasons to Believe</h4>
                        <p className="text-sm text-muted-foreground">Science-faith integration resources</p>
                      </div>
                      <div className="p-3 bg-background/50 rounded-lg">
                        <h4 className="font-medium">BioLogos</h4>
                        <p className="text-sm text-muted-foreground">Evolution and Christian faith dialogue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Faith & Science Section */}
            <FadeIn delay={0.6}>
              <div className="glass-card rounded-xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <i className="fas fa-question-circle text-secondary text-xl"></i>
                  </div>
                  <h2 className="text-2xl font-bold">Faith & Science</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    One of the most common questions I encounter is how I reconcile my scientific work with 
                    my faith. I believe science and faith address different but complementary questions.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-4 bg-background/50 rounded-lg">
                      <h3 className="font-semibold mb-2 text-primary">Science asks:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• How does the universe work?</li>
                        <li>• What are the mechanisms?</li>
                        <li>• How can we predict and control?</li>
                      </ul>
                    </div>
                    
                    <div className="p-4 bg-background/50 rounded-lg">
                      <h3 className="font-semibold mb-2 text-accent">Faith asks:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• Why does anything exist?</li>
                        <li>• What is our purpose?</li>
                        <li>• How should we live?</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="mt-6">
                    Rather than seeing conflict, I see beautiful harmony. The more I study the intricate 
                    design of biological systems, the more I'm filled with wonder at the elegance and 
                    complexity of creation. My faith motivates my scientific work, and my scientific 
                    work deepens my faith.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>
    </>
  )
}
