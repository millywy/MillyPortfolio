import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import { researchProjects } from '@/lib/data'
import { Link, useParams } from 'wouter'

export default function ResearchPage() {
  const params = useParams<{slug: string}>()
  const research = researchProjects.find((r) => r.slug === params.slug)

  if (!research) {
    return (
      <>
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Research Not Found</h1>
            <p className="text-muted-foreground mb-8">The research project you're looking for doesn't exist.</p>
            <Link href="/research" className="text-primary hover:underline">← Back to Research</Link>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8">
              <Link
                href="/research"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-6"
                data-testid="link-back-research"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Research
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-${research.color}/20 rounded-xl flex items-center justify-center`}>
                  <i className={`${research.icon} text-${research.color} text-2xl`}></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{research.title}</h1>
                  <p className="text-muted-foreground">{research.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {research.tags.map((tag) => (
                  <span 
                    key={tag}
                    className={`bg-${research.color}/20 text-${research.color} px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-xl p-8">
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: research.content.replace(/\n/g, '<br />') }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}
