import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import { Link } from 'wouter'


export default function PhilosophyPage() {
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
                  <i className="fas fa-brain text-primary text-2xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Philosophy</h1>
                  <p className="text-muted-foreground">Reflections on big questions and deep thinking</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Philosophical Reflections</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">On the Nature of Knowledge</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Socrates' famous declaration "I know that I know nothing" becomes more profound the 
                    more I learn. In my scientific studies, each answer reveals new questions. True 
                    wisdom seems to lie not in accumulating facts, but in developing better questions 
                    and remaining humble about the limits of our understanding.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ethics in Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As someone working in bioengineering and AI, I often think about the ethical 
                    implications of technological advancement. Kant's categorical imperative—act only 
                    according to principles you could will to be universal laws—feels particularly 
                    relevant when developing technologies that could reshape society.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Mind-Body Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Working with EEG and brain signals has given me a unique perspective on consciousness. 
                    While we can measure neural activity, the subjective experience of consciousness 
                    remains mysterious. This intersection of neuroscience and philosophy continues to 
                    fascinate and humble me.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Meaning and Purpose</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Viktor Frankl's insights about finding meaning in suffering resonate with my 
                    engineering mindset. Problems aren't obstacles to happiness—they're opportunities 
                    to create meaning through the act of solving them. Every engineering challenge 
                    is ultimately about improving human experience.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Eastern and Western Thought</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    My cultural background has exposed me to both Western analytical philosophy and 
                    Eastern contemplative traditions. I find value in the Western emphasis on logical 
                    reasoning and the Eastern focus on holistic understanding and balance.
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
