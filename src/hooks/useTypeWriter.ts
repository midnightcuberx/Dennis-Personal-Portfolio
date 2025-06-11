import { useState, useEffect, useRef } from 'react'

export const useTypewriter = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState(text[0])
  const [index, setIndex] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index])
        setIndex(index + 1)
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [index, text, speed])

  return displayedText
}
