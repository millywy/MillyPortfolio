'use client'

import { Link } from 'wouter'
import FadeIn from './FadeIn'

interface Research {
  slug: string
  title: string
  description: string
  tags: string[]
  icon: string
  color: 'primary' | 'secondary' | 'accent'
}

interface ResearchCardProps {
  research: Research
}

export default function ResearchCard({ research }: ResearchCardProps) {
  return (
    <Link 
      href={`/research/${research.slug}`}
      className="glass-card rounded-xl p-8 hover:bg-card/50 transition-all duration-500 group cursor-pointer block"
      data-testid={`card-research-${research.slug}`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
        <div className="flex-shrink-0">
          <div className={`w-16 h-16 bg-${research.color}/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <i className={`${research.icon} text-${research.color} text-2xl`}></i>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{research.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {research.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {research.tags.map((tag) => (
              <span 
                key={tag}
                className={`bg-${research.color}/20 text-${research.color} px-3 py-1 rounded-full text-xs font-medium`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-shrink-0">
          <i className="fas fa-arrow-right text-primary group-hover:translate-x-1 transition-transform text-xl"></i>
        </div>
      </div>
    </Link>
  )
}
