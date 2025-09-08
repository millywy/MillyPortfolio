import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import ResearchCard from '@/components/ResearchCard'
import { researchProjects } from '@/lib/data'


export default function ResearchPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Research</span>
              </h1>
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
      </main>
    </>
  )
}
