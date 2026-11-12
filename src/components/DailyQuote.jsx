
import { useEffect, useState } from 'react'

export default function DailyQuote() {
  const [quote, setQuote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadQuote() {
      try {
        const response = await fetch(
          'https://dummyjson.com/quotes/random'
        )

        if (!response.ok) {
          throw new Error('Could not load quote')
        }

        const data = await response.json()
        setQuote(data)
      } catch (err) {
        setError('Could not load quote. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    loadQuote()
  }, [])

  if (loading) return <p>Loading quote...</p>

  if (error) return <p className="error">{error}</p>

  return (
    <blockquote>
      <p>{quote.quote}</p>
      <footer>— {quote.author}</footer>
    </blockquote>
  )
}
