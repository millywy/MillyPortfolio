import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { Link } from 'wouter'


export default function ArtPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8">
              <Link
                href="/me-yapping"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-6"
                data-testid="link-back-me-yapping"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Me Yapping
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Art & Commentary</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reviews and reflections on books, movies, art, and creative works that inspire me
              </p>
            </div>
          </FadeIn>
          
          {/* Art Inspiration Gallery */}
          <FadeIn delay={0.2}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Creative Inspiration</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="animate-fade-in-scale">
                  <ImagePlaceholder 
                    number={48} 
                    alt="Book Covers and Literary Analysis"
                    aspectRatio="photo"
                    size="md"
                  />
                </div>
                <div className="animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
                  <ImagePlaceholder 
                    number={49} 
                    alt="Film Stills and Cinema Commentary"
                    aspectRatio="photo"
                    size="md"
                  />
                </div>
                <div className="animate-fade-in-scale" style={{animationDelay: '0.4s'}}>
                  <ImagePlaceholder 
                    number={50} 
                    alt="Art Pieces and Visual Analysis"
                    aspectRatio="photo"
                    size="md"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <FadeIn delay={0.1}>
              <Link href="/art/book-reviews" className="block">
                <div className="glass-card rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-book text-primary text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Book Reviews</h3>
                  <p className="text-muted-foreground">
                    Deep dives into literature that has shaped my thinking, from philosophy to science fiction
                  </p>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Link href="/art/movie-commentary" className="block">
                <div className="glass-card rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-film text-secondary text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Movie Commentary</h3>
                  <p className="text-muted-foreground">
                    Analysis of films that explore technology, humanity, and the stories that connect us
                  </p>
                </div>
              </Link>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <Link href="/art/arts" className="block">
                <div className="glass-card rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-paint-brush text-accent text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Art Analysis</h3>
                  <p className="text-muted-foreground">
                    Explorations of visual art, design, and creative works that inspire innovation
                  </p>
                </div>
              </Link>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-pen text-muted-foreground text-2xl"></i>
              </div>
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm currently working on a collection of reviews and commentary. This section will feature 
                in-depth analysis of books, films, and artworks that have influenced my thinking about 
                technology, creativity, and human experience. Check back soon for thoughtful explorations 
                of works that bridge art and science.
              </p>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}
