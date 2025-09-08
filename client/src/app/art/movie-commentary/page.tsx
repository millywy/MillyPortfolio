import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import FloatingBubbles from '@/components/FloatingBubbles'
import { Link } from 'wouter'

export default function MovieCommentaryPage() {
  const movieReviews = [
    {
      title: "Blade Runner 2049",
      director: "Denis Villeneuve",
      year: "2017",
      rating: 5,
      review: "A masterful sequel that explores themes of identity, consciousness, and what makes us human. The visual storytelling is breathtaking.",
      category: "Sci-Fi",
      watchDate: "2024"
    },
    {
      title: "Her",
      director: "Spike Jonze", 
      year: "2013",
      rating: 5,
      review: "A profound meditation on love, loneliness, and human connection in the digital age. Joaquin Phoenix delivers an incredible performance.",
      category: "Drama/Sci-Fi",
      watchDate: "2024"
    },
    {
      title: "The Social Network",
      director: "David Fincher",
      year: "2010", 
      rating: 4,
      review: "Sharp, intelligent filmmaking that captures the ambition and consequences of the social media revolution. Relevant more than ever.",
      category: "Drama/Biography",
      watchDate: "2023"
    },
    {
      title: "Ex Machina",
      director: "Alex Garland",
      year: "2014",
      rating: 5,
      review: "A chilling and beautiful exploration of artificial intelligence, consciousness, and manipulation. Every frame is purposeful.",
      category: "Sci-Fi/Thriller",
      watchDate: "2023"
    },
    {
      title: "The Pursuit of Happyness",
      director: "Gabriele Muccino",
      year: "2006",
      rating: 4,
      review: "An inspiring story of perseverance and determination. Will Smith's performance is both heartbreaking and uplifting.",
      category: "Drama/Biography", 
      watchDate: "2023"
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
                <span className="gradient-text">Movie Commentary</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Analysis of films that explore technology, humanity, and the stories that connect us
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {movieReviews.map((movie, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="glass-card rounded-xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{movie.title}</h3>
                      <p className="text-muted-foreground mb-2">
                        Directed by {movie.director} • {movie.year}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star text-sm ${
                                i < movie.rating ? 'text-accent' : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({movie.rating}/5)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {movie.category}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2">{movie.watchDate}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {movie.review}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.6}>
            <div className="mt-16">
              <div className="glass-card rounded-xl p-8">
                <div className="text-center mb-8">
                  <i className="fas fa-film text-primary text-3xl mb-4"></i>
                  <h3 className="text-xl font-bold mb-4">Film Analysis Philosophy</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-brain text-primary"></i>
                    </div>
                    <h4 className="font-semibold mb-2">Psychological Depth</h4>
                    <p className="text-sm text-muted-foreground">
                      Films that explore the human condition and inner complexity
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-cogs text-secondary"></i>
                    </div>
                    <h4 className="font-semibold mb-2">Tech & Society</h4>
                    <p className="text-sm text-muted-foreground">
                      How technology impacts relationships and society
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="fas fa-palette text-accent"></i>
                    </div>
                    <h4 className="font-semibold mb-2">Visual Storytelling</h4>
                    <p className="text-sm text-muted-foreground">
                      Cinematography that enhances narrative meaning
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}