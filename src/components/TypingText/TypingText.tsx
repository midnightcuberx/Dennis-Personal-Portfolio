'use client'

import { useTypewriter } from '@/hooks/useTypeWriter'
import React, { memo } from 'react'

interface TypingTextProps {
  title: string
  text: string
}

const TypingText: React.FC<TypingTextProps> = memo(({ title, text }) => {
  const displayText = useTypewriter(text, 50)
  return (
    <div>
      <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
        {title} <br />
        <span className="text-blue-300">
          {displayText}
          <span className="animate-blink inline-block w-[1ch]">|</span>
        </span>
      </h1>
    </div>
  )
})

TypingText.displayName = 'TypingText'
export default TypingText
