import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import { Link } from 'wouter'


export default function CulturalDifferencesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8">
              <Link
                href="/opinions"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-6"
                data-testid="link-back-opinions"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Opinions
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-globe text-secondary text-2xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Cultural Differences</h1>
                  <p className="text-muted-foreground">Exploring diversity and understanding</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Reflections on Cultural Exchange</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">East Meets West</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Growing up in Hong Kong and studying in California has given me a unique perspective 
                    on the intersection of Eastern and Western cultures. I've learned that differences 
                    in communication styles, family values, and social structures aren't obstacles—they're 
                    opportunities for deeper understanding.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Myth of Cultural Monoliths</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    One of the most important lessons I've learned is that no culture is monolithic. 
                    Within any cultural group, there's tremendous diversity of thought, belief, and practice. 
                    Stereotypes, even positive ones, can be limiting and fail to capture human complexity.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Language and Identity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Language shapes not just how we communicate, but how we think. Speaking Cantonese, 
                    Mandarin, and English has taught me that some concepts simply don't translate directly. 
                    This isn't a limitation—it's evidence of the rich diversity of human experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Building Bridges</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In my work with the Hong Kong Student Association and other multicultural groups, 
                    I've seen how cultural exchange happens best through shared experiences and genuine 
                    curiosity. The goal isn't to eliminate differences, but to appreciate them.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}
