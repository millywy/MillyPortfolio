import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import FloatingBubbles from '@/components/FloatingBubbles'
import { Link } from 'wouter'

export default function ArtsPage() {
  const artPieces = [
    {
      title: "The Great Wave off Kanagawa",
      artist: "Katsushika Hokusai",
      year: "1831",
      medium: "Woodblock Print",
      analysis: "A masterpiece of composition and motion. The dynamic wave creates tension while Mount Fuji provides stability. The use of Prussian blue was revolutionary for its time.",
      category: "Traditional Japanese",
      personalRating: 5
    },
    {
      title: "Starry Night",
      artist: "Vincent van Gogh", 
      year: "1889",
      medium: "Oil on Canvas",
      analysis: "Van Gogh's swirling sky creates movement and emotion that transcends realistic representation. The cypress tree connects earth and sky in a deeply spiritual way.",
      category: "Post-Impressionism",
      personalRating: 5
    },
    {
      title: "Girl with a Pearl Earring",
      artist: "Johannes Vermeer",
      year: "1665",
      medium: "Oil on Canvas", 
      analysis: "The mysterious gaze and luminous pearl create an intimate connection with the viewer. Vermeer's mastery of light makes this portrait timeless.",
      category: "Dutch Golden Age",
      personalRating: 4
    },
    {
      title: "The Persistence of Memory",
      artist: "Salvador Dalí",
      year: "1931",
      medium: "Oil on Canvas",
      analysis: "Dalí's melting clocks challenge our perception of time and reality. The surreal landscape reflects the unconscious mind's relationship with memory.",
      category: "Surrealism",
      personalRating: 4
    },
    {
      title: "Guernica",
      artist: "Pablo Picasso",
      year: "1937", 
      medium: "Oil on Canvas",
      analysis: "A powerful anti-war statement using fragmented cubist forms. The monochromatic palette emphasizes the brutality and chaos of conflict.",
      category: "Cubism",
      personalRating: 5
    }
  ]

  const artMovements = [
    {
      name: "Renaissance",
      description: "Revival of classical art and humanism",
      keyArtists: ["Leonardo da Vinci", "Michelangelo", "Raphael"],
      characteristics: "Perspective, realism, classical themes"
    },
    {
      name: "Impressionism", 
      description: "Capturing light and momentary effects",
      keyArtists: ["Claude Monet", "Pierre-Auguste Renoir", "Edgar Degas"],
      characteristics: "Loose brushwork, outdoor painting, light studies"
    },
    {
      name: "Abstract Expressionism",
      description: "Emotional abstraction and gestural painting",
      keyArtists: ["Jackson Pollock", "Mark Rothko", "Willem de Kooning"],
      characteristics: "Large scale, gestural, emotional intensity"
    }
  ]

  return (
    <>
      <FloatingBubbles />
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8">
              <Link
                href="/art"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-6"
                data-testid="link-back-art"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Art & Commentary
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Art Analysis</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explorations of visual art, design, and creative works that inspire innovation and reflection
              </p>
            </div>
          </FadeIn>
          
          {/* Featured Art Analyses */}
          <div className="mb-16">
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-bold mb-8 text-center">Featured Art Analyses</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {artPieces.map((piece, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="glass-card rounded-xl p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">{piece.title}</h3>
                        <p className="text-muted-foreground mb-2">
                          by {piece.artist} • {piece.year}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">{piece.medium}</p>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <i
                                key={i}
                                className={`fas fa-star text-sm ${
                                  i < piece.personalRating ? 'text-accent' : 'text-muted-foreground'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">({piece.personalRating}/5)</span>
                        </div>
                      </div>
                      <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                        {piece.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {piece.analysis}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
          {/* Art Movements Section */}
          <FadeIn delay={0.6}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center text-foreground">Art Movements That Inspire Me</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {artMovements.map((movement, index) => (
                  <div key={index} className="glass-card rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground">{movement.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{movement.description}</p>
                    <div className="mb-3">
                      <h4 className="text-sm font-semibold mb-2 text-foreground">Key Artists:</h4>
                      <p className="text-xs text-muted-foreground">{movement.keyArtists.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-foreground">Characteristics:</h4>
                      <p className="text-xs text-muted-foreground">{movement.characteristics}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          {/* Art Philosophy */}
          <FadeIn delay={0.7}>
            <div className="glass-card rounded-xl p-8">
              <div className="text-center mb-8">
                <i className="fas fa-palette text-primary text-3xl mb-4"></i>
                <h3 className="text-xl font-bold mb-4 text-foreground">My Art Analysis Philosophy</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-eye text-primary"></i>
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Visual Impact</h4>
                  <p className="text-sm text-muted-foreground">
                    How composition, color, and form create emotional resonance
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-history text-secondary"></i>
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Historical Context</h4>
                  <p className="text-sm text-muted-foreground">
                    Understanding art within its cultural and temporal setting
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-lightbulb text-accent"></i>
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Innovation</h4>
                  <p className="text-sm text-muted-foreground">
                    How artistic techniques inspire modern design and technology
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}