'use client'

import { useState, useEffect } from 'react'

interface PoliticsGateProps {
  children: React.ReactNode
}

export default function PoliticsGate({ children }: PoliticsGateProps) {
  const [hasAccess, setHasAccess] = useState<boolean | null>(null)
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    // Check if user already has access stored in sessionStorage
    const storedAccess = sessionStorage.getItem('politicsAccess')
    if (storedAccess === 'true') {
      setHasAccess(true)
    } else {
      setHasAccess(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const correctAnswer = 'Minnnie'
    
    if (inputValue.toLowerCase().trim() === correctAnswer.toLowerCase()) {
      sessionStorage.setItem('politicsAccess', 'true')
      setHasAccess(true)
      setError('')
    } else {
      setError('Incorrect answer. Try again!')
      setInputValue('')
    }
  }

  if (hasAccess === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="glass-card rounded-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <i className="fas fa-lock text-accent text-2xl"></i>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Protected Content</h1>
          <p className="text-muted-foreground mb-6">
            This section is for friends only. Answer the question below to access:
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                What is Milly's first English name?
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
                placeholder="Your answer..."
                data-testid="input-politics-passcode"
              />
            </div>
            
            {error && (
              <p className="text-destructive text-sm" data-testid="text-politics-error">
                {error}
              </p>
            )}
            
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              data-testid="button-politics-submit"
            >
              Access Content
            </button>
          </form>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
