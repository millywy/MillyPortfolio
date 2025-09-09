import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { Link } from 'wouter'


const opinionsTopics = [
  {
    slug: 'politics',
    title: 'Politics',
    description: 'Thoughts on political systems, governance, and social policy',
    icon: 'fas fa-lock',
    color: 'accent',
    protected: true
  },
  {
    slug: 'inequality',
    title: 'Inequality',
    description: 'Examining social and economic disparities in modern society',
    icon: 'fas fa-balance-scale',
    color: 'primary',
    protected: false
  },
  {
    slug: 'cultural-differences',
    title: 'Cultural Differences',
    description: 'Exploring diversity, understanding, and cultural exchange',
    icon: 'fas fa-globe',
    color: 'secondary',
    protected: false
  },
  {
    slug: 'friendship',
    title: 'Friendship',
    description: 'Reflections on human connections and meaningful relationships',
    icon: 'fas fa-users',
    color: 'accent',
    protected: false
  },
  {
    slug: 'philosophy',
    title: 'Philosophy',
    description: 'General reflections on philosophers and philosophical concepts',
    icon: 'fas fa-brain',
    color: 'primary',
    protected: false
  }
]

export default function OpinionsPage() {
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
                Back to Curiosities & Reflections
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Opinions & Essays</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Personal reflections on society, culture, philosophy, and the human experience
              </p>
            </div>
          </FadeIn>
          
          {/* Opinion Themes Gallery */}
          <FadeIn delay={0.2}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Themes & Perspectives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="animate-fly-in-left">
                  <ImagePlaceholder 
                    number={46} 
                    alt="Social Issues and Cultural Commentary"
                    aspectRatio="photo"
                    size="lg"
                  />
                </div>
                <div className="animate-fly-in-right" style={{animationDelay: '0.3s'}}>
                  <ImagePlaceholder 
                    number={47} 
                    alt="Philosophy and Deep Thinking"
                    aspectRatio="photo"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opinionsTopics.map((topic, index) => (
              <FadeIn key={topic.slug} delay={index * 0.1}>
                <Link
                  href={`/opinions/${topic.slug}`}
                  className="block glass-card rounded-xl p-8 hover:bg-card/50 transition-all duration-500 group cursor-pointer"
                  data-testid={`card-opinion-${topic.slug}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-${topic.color}/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <i className={`${topic.icon} text-${topic.color} text-xl`}></i>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {topic.title}
                        {topic.protected && (
                          <small className="text-xs text-muted-foreground ml-2">(friends only)</small>
                        )}
                      </h3>
                    </div>
                    <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
                  </div>
                  <p className="text-muted-foreground">{topic.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
