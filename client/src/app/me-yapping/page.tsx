import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import FloatingBubbles from '@/components/FloatingBubbles'
import { Link } from 'wouter'

export default function MeYappingPage() {
  const yappingSections = [
    {
      slug: 'ideas',
      title: 'Cool Ideas & Curiosities',
      description: 'Exploring fascinating concepts from mathematics, physics, economics, and information theory',
      icon: 'fas fa-lightbulb',
      color: 'primary' as const
    },
    {
      slug: 'opinions',
      title: 'Opinions & Essays',
      description: 'Personal reflections on society, culture, philosophy, and the human experience',
      icon: 'fas fa-pen',
      color: 'secondary' as const
    },
    {
      slug: 'art',
      title: 'Art & Commentary',
      description: 'Reviews and reflections on books, movies, art, and creative works that inspire me',
      icon: 'fas fa-palette',
      color: 'accent' as const
    },
    {
      slug: 'faith',
      title: 'Faith',
      description: 'My spiritual journey, testimony, and resources for exploring questions of faith and meaning',
      icon: 'fas fa-pray',
      color: 'primary' as const
    }
  ]

  return (
    <>
      <FloatingBubbles />
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Me Yapping</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                My thoughts on ideas, philosophy, culture, art, and life - where curiosity meets commentary
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {yappingSections.map((section, index) => (
              <FadeIn key={section.slug} delay={index * 0.1}>
                <Link 
                  href={`/${section.slug}`}
                  className="block glass-card rounded-xl p-8 hover:bg-card/50 transition-all duration-500 group cursor-pointer"
                  data-testid={`link-${section.slug}`}
                >
                  <div className="mb-6">
                    <div className={`w-16 h-16 bg-${section.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <i className={`${section.icon} text-${section.color} text-2xl`}></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{section.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {section.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Explore Section</span>
                    <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}