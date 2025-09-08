import Navigation from '@/components/Navigation'
import FadeIn from '@/components/FadeIn'
import { Link } from 'wouter'


export default function FriendshipPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="mb-8">
              <Link
                href="/opinions"
                className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2 mb-6"
                data-testid="link-back-opinions"
              >
                <i className="fas fa-arrow-left"></i>
                Back to Opinions
              </Link>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-users text-accent text-2xl"></i>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Friendship</h1>
                  <p className="text-muted-foreground">Reflections on meaningful relationships</p>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">On Human Connection</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Quality Over Quantity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In our hyper-connected world, it's easy to confuse having many contacts with having 
                    meaningful relationships. True friendship requires time, vulnerability, and mutual 
                    investment. I'd rather have a few deep friendships than hundreds of shallow connections.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">The Art of Listening</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Good friendship starts with genuine listening—not just waiting for your turn to speak, 
                    but truly hearing and seeking to understand. Some of my most meaningful conversations 
                    have happened when I stopped trying to fix or advise and simply listened.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Friendships Across Distances</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Moving from Hong Kong to Stanford taught me that geography doesn't have to end friendship, 
                    but it does require intentionality. The friends who have remained close are those 
                    who've made the effort to stay connected despite time zones and busy schedules.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Growth and Change</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The best friendships allow space for growth and change. We're all evolving, and 
                    friendship isn't about keeping each other static. It's about supporting each other's 
                    journey while maintaining the core connection that brought you together.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Different Types of Friends</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Not every friend needs to be everything to you. I have friends who challenge my 
                    thinking, friends who provide comfort, friends who share my interests, and friends 
                    who help me laugh. Each type of friendship adds different value to life.
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
