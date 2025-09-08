import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { projects } from '@/lib/data'
import { Link, useParams } from 'wouter'

export default function ProjectPage() {
  const params = useParams<{slug: string}>()
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    return (
      <>
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Link href="/projects" className="text-primary hover:underline">← Back to Projects</Link>
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
                href="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-6"
                data-testid="link-back-projects"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Projects
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-${project.color}/20 rounded-xl flex items-center justify-center`}>
                  <i className={`${project.icon} text-${project.color} text-2xl`}></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h1>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className={`bg-${project.color}/20 text-${project.color} px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.github && (
                <div className="mb-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                    data-testid="link-project-github"
                  >
                    <i className="fab fa-github"></i>
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
          
          {/* Project Images Gallery */}
          <FadeIn delay={0.2}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="animate-fly-in-left">
                  <ImagePlaceholder 
                    number={projects.findIndex(p => p.slug === params.slug) * 3 + 1} 
                    alt={`${project.title} - Main Overview`}
                    aspectRatio="photo"
                    size="lg"
                  />
                </div>
                <div className="animate-fly-in-right" style={{animationDelay: '0.2s'}}>
                  <ImagePlaceholder 
                    number={projects.findIndex(p => p.slug === params.slug) * 3 + 2} 
                    alt={`${project.title} - Technical Details`}
                    aspectRatio="photo"
                    size="lg"
                  />
                </div>
              </div>
              <div className="animate-fly-in-up" style={{animationDelay: '0.4s'}}>
                <ImagePlaceholder 
                  number={projects.findIndex(p => p.slug === params.slug) * 3 + 3} 
                  alt={`${project.title} - Results and Impact`}
                  aspectRatio="wide"
                  size="xl"
                  className="mb-8"
                />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="glass-card rounded-xl p-8">
              <div className="prose prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ __html: project.content.replace(/\n/g, '<br />') }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}
