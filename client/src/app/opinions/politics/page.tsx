import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import PoliticsGate from '@/components/PoliticsGate'
import { Link } from 'wouter'


export default function PoliticsPage() {
  return (
    <>
      <Navigation />
      <PoliticsGate>
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
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                    <i className="fas fa-lock text-accent text-2xl"></i>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">Politics</h1>
                    <p className="text-muted-foreground">Protected thoughts for friends only</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Political Reflections</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">On Governance and Democracy</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Democracy, while imperfect, remains our best tool for collective decision-making. 
                      The challenge isn't in the system itself, but in ensuring informed participation 
                      and protecting minority voices while respecting majority will.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Technology and Political Discourse</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Social media has fundamentally changed how we engage with politics. While it 
                      democratizes access to information and platforms, it also creates echo chambers 
                      and amplifies extreme voices. We need better systems for nuanced political discourse.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Global Perspectives</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Having lived in different countries, I've seen how political systems reflect 
                      cultural values and historical contexts. There's no one-size-fits-all approach 
                      to governance, but there are universal principles of human dignity and rights.
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground italic">
                      These are personal reflections based on my experiences and observations. 
                      I believe in respectful dialogue and the importance of considering multiple perspectives.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </main>
      </PoliticsGate>
    </>
  )
}
