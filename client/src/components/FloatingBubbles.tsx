'use client'

import { useEffect, useState } from 'react'

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Create initial bubbles
    const initialBubbles: Bubble[] = []
    for (let i = 0; i < 8; i++) {
      initialBubbles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 60 + 20,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.3 + 0.1
      })
    }
    setBubbles(initialBubbles)

    // Animation loop
    const animate = () => {
      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => {
          let newX = bubble.x + bubble.speedX
          let newY = bubble.y + bubble.speedY
          let newSpeedX = bubble.speedX
          let newSpeedY = bubble.speedY

          // Bounce off edges
          if (newX <= 0 || newX >= window.innerWidth - bubble.size) {
            newSpeedX = -bubble.speedX
            newX = Math.max(0, Math.min(window.innerWidth - bubble.size, newX))
          }
          if (newY <= 0 || newY >= window.innerHeight - bubble.size) {
            newSpeedY = -bubble.speedY
            newY = Math.max(0, Math.min(window.innerHeight - bubble.size, newY))
          }

          return {
            ...bubble,
            x: newX,
            y: newY,
            speedX: newSpeedX,
            speedY: newSpeedY
          }
        })
      )
    }

    const interval = setInterval(animate, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full animate-pulse-slow"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: `radial-gradient(circle, rgba(33, 150, 243, ${bubble.opacity}) 0%, rgba(255, 215, 0, ${bubble.opacity * 0.3}) 50%, transparent 70%)`,
            transition: 'all 0.1s ease-out'
          }}
        />
      ))}
    </div>
  )
}