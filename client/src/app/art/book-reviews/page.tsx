import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import FloatingBubbles from '@/components/FloatingBubbles'
import { Link } from 'wouter'

export default function BookReviewsPage() {
  const bookReviews = [
    {
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      rating: 5,
      review: "A masterpiece for any developer. The principles and practices outlined here have fundamentally changed how I approach software development.",
      category: "Technology",
      readDate: "2024"
    },
    {
      title: "Klara and the Sun", 
      author: "Kazuo Ishiguro",
      rating: 4,
      review: "A beautiful exploration of consciousness, love, and what it means to be human, told from the perspective of an artificial friend.",
      category: "Science Fiction",
      readDate: "2024"
    },
    {
      title: "Atomic Habits",
      author: "James Clear", 
      rating: 5,
      review: "Incredible insights into how small changes compound over time. Changed my entire approach to personal development.",
      category: "Self-Development",
      readDate: "2023"
    },
    {
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      rating: 5,
      review: "Revolutionary science fiction that challenges our understanding of gender, politics, and human nature. A true classic.",
      category: "Science Fiction", 
      readDate: "2023"
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
                <span className="gradient-text">Book Reviews</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deep dives into literature that has shaped my thinking, from philosophy to science fiction
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bookReviews.map((book, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="glass-card rounded-xl p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                      <p className="text-muted-foreground mb-2">by {book.author}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fas fa-star text-sm ${
                                i < book.rating ? 'text-accent' : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">({book.rating}/5)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {book.category}
                      </span>
                      <p className="text-xs text-muted-foreground mt-2">{book.readDate}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {book.review}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.5}>
            <div className="mt-16 text-center">
              <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
                <i className="fas fa-book-open text-primary text-3xl mb-4"></i>
                <h3 className="text-xl font-bold mb-4">Currently Reading</h3>
                <p className="text-muted-foreground mb-4">
                  "The Three-Body Problem" by Liu Cixin - A fascinating hard science fiction trilogy exploring first contact and humanity's place in the universe.
                </p>
                <div className="w-full bg-muted/30 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-sm text-muted-foreground mt-2">75% complete</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </main>
    </>
  )
}