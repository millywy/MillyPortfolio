import { useState } from 'react'

interface ImagePlaceholderProps {
  number: number
  alt?: string
  className?: string
  aspectRatio?: 'square' | 'video' | 'photo' | 'wide'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export default function ImagePlaceholder({ 
  number, 
  alt = `Image ${number}`, 
  className = '',
  aspectRatio = 'photo',
  size = 'md'
}: ImagePlaceholderProps) {
  const [isVisible, setIsVisible] = useState(false)

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video', 
    photo: 'aspect-[4/3]',
    wide: 'aspect-[3/1]'
  }

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg', 
    xl: 'text-xl'
  }

  return (
    <div 
      className={`image-placeholder relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 ${aspectClasses[aspectRatio]} ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      data-testid={`img-placeholder-${number}`}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer"></div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="floating-particle absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 hover:scale-105">
        <div className={`w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${isVisible ? 'scale-110 bg-primary/30' : ''}`}>
          <i className="fas fa-image text-primary text-2xl"></i>
        </div>
        
        <div className={`text-center transition-all duration-300 ${sizeClasses[size]} ${isVisible ? 'text-primary' : 'text-muted-foreground'}`}>
          <div className="font-bold mb-2">Image {number}</div>
          <div className="text-xs opacity-70">{alt}</div>
        </div>
        
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`} />
      </div>
      
      {/* Corner number badge */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-xs font-bold text-primary border border-primary/30">
        {number}
      </div>
    </div>
  )
}