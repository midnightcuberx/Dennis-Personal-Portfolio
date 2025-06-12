import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className="bg-navy-deep grid grid-cols-2">
      <div className="text-white text-center py-4">
        <p>Made by Dennis Hu</p>
        <p>Powered by Payload CMS and Tailwind CSS</p>
      </div>
      <div className="text-white text-center py-4">
        <Link href="https://www.linkedin.com/in/dennishu811/">
          <p>LinkedIn</p>
        </Link>
        <Link href="https://github.com/midnightcuberx">
          <p>GitHub</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer
