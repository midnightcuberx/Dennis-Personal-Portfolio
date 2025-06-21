import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <div className="bg-navy-deep grid grid-cols-2 py-4">
      <div className="text-white text-center py-4">
        <p>Made by Dennis Hu</p>
        <p>Powered by Payload CMS and Tailwind CSS</p>
      </div>
      <div className="flex flex-col gap-2 text-white text-center py-4">
        <Link
          href="https://www.linkedin.com/in/dennishu811/"
          className="flex flex-row justify-center items-center gap-2"
        >
          <FaLinkedin className="text-2xl" />
          <p>LinkedIn</p>
        </Link>
        <Link
          href="https://github.com/midnightcuberx"
          className="flex flex-row justify-center items-center gap-2"
        >
          <FaGithub className="text-2xl" />
          <p>GitHub</p>
        </Link>
      </div>
    </div>
  )
}

export default Footer
