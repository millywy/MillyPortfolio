import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import { extracurriculars } from '@/lib/data'


export default function ExtracurricularsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Communities & Activities</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The organizations and communities that have shaped my experience and values
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {extracurriculars.map((activity, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="glass-card rounded-xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="fas fa-users text-primary text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{activity.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.6}>
            <div className="glass-card rounded-xl p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Why Community Matters</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These organizations have taught me that meaningful work happens in community. Whether 
                it's exploring faith, celebrating culture, or solving healthcare challenges, the best 
                ideas emerge when diverse perspectives come together around shared values and goals.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}
