import { useState } from 'react'

interface ProjectImageProps {
  src: string
  alt: string
  aspectRatio?: 'photo' | 'wide' | 'square'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  fallbackNumber?: number
}

export default function ProjectImage({ 
  src, 
  alt, 
  aspectRatio = 'photo', 
  size = 'lg', 
  className = '',
  fallbackNumber
}: ProjectImageProps) {
  const [imageError, setImageError] = useState(false)

  const aspectRatioClasses = {
    photo: 'aspect-[4/3]',
    wide: 'aspect-[16/9]',
    square: 'aspect-square'
  }

  const sizeClasses = {
    sm: 'h-32',
    md: 'h-48',
    lg: 'h-64',
    xl: 'h-80'
  }

  if (imageError && fallbackNumber) {
    // Fallback to ImagePlaceholder if image fails to load
    return (
      <div className={`${aspectRatioClasses[aspectRatio]} ${sizeClasses[size]} ${className} bg-muted/20 rounded-xl flex items-center justify-center border-2 border-dashed border-muted/30`}>
        <div className="text-center">
          <div className="text-4xl font-bold text-muted-foreground mb-2">{fallbackNumber}</div>
          <div className="text-sm text-muted-foreground">Image Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className={`${aspectRatioClasses[aspectRatio]} ${sizeClasses[size]} ${className} rounded-xl overflow-hidden`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={() => setImageError(true)}
        loading="lazy"
      />
    </div>
  )
}
