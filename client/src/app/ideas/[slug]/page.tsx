import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import { coolIdeas } from '@/lib/data'
import { Link, useParams } from 'wouter'

export default function IdeaPage() {
  const params = useParams<{slug: string}>()
  const idea = coolIdeas.find((i) => i.slug === params.slug)

  if (!idea) {
    return (
      <>
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Idea Not Found</h1>
            <p className="text-muted-foreground mb-8">The idea you're looking for doesn't exist.</p>
            <Link href="/ideas" className="text-primary hover:underline">← Back to Ideas</Link>
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
                href="/ideas"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-6"
                data-testid="link-back-ideas"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Ideas
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                  <i className={`${idea.icon} text-primary text-2xl`}></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{idea.title}</h1>
                  <p className="text-muted-foreground">{idea.description}</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-xl p-8">
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: idea.content.replace(/\n/g, '<br />') }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}
