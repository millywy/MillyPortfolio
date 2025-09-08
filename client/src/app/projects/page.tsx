import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/data'


export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">All Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A comprehensive collection of my work spanning engineering, design, research, and innovation across multiple disciplines
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
