'use client'

import { Link } from 'wouter'
import FadeIn from './FadeIn'

interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  icon: string
  color: 'primary' | 'secondary' | 'accent'
  github?: string
}

interface ProjectCardProps {
  project: Project
  delay?: number
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay}>
      <Link 
        href={`/projects/${project.slug}`}
        className="project-card glass-card rounded-xl p-6 transition-all duration-500 hover:bg-card/50 group cursor-pointer block"
        data-testid={`card-project-${project.slug}`}
      >
        <div className="mb-4">
          <div className={`w-12 h-12 bg-${project.color}/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <i className={`${project.icon} text-${project.color} text-xl`}></i>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
          <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className={`bg-${project.color}/20 text-${project.color} px-3 py-1 rounded-full text-xs font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">View Details</span>
          <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform"></i>
        </div>
      </Link>
    </FadeIn>
  )
}
