import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import { Link } from 'wouter'


export default function InequalityPage() {
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
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-balance-scale text-primary text-2xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Inequality</h1>
                  <p className="text-muted-foreground">Examining social and economic disparities</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Thoughts on Social and Economic Disparities</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Education Gap</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Access to quality education remains one of the most significant drivers of inequality. 
                    In my work with students from different backgrounds, I've seen how early educational 
                    opportunities create compounding advantages that persist throughout life.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technology's Double Edge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While technology has the potential to democratize access to information and opportunities, 
                    it also risks widening the digital divide. The same tools that empower some can 
                    inadvertently exclude others who lack access or digital literacy.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Systemic vs. Individual Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Addressing inequality requires both systemic change and individual action. While 
                    policy reforms are essential for creating equitable systems, we also need individuals 
                    who are willing to use their privileges responsibly and advocate for others.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Global Perspectives</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Having grown up in Hong Kong and studied at Stanford, I've witnessed inequality 
                    across different contexts. Each society faces unique challenges, but the fundamental 
                    human desire for dignity and opportunity is universal.
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
