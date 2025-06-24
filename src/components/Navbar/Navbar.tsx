'use client'

import React, { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Twirl as Hamburger } from 'hamburger-react'
import { TbHexagonLetterD } from 'react-icons/tb'

export interface NavLink {
  href: string
  text: string
}

interface NavBarProps {
  navElements?: NavLink[]
}

const NavBar: React.FC<NavBarProps> = memo(({ navElements }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [hasScrolled, setHasScrolled] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <div className="text-white">
      <nav
        className={`py-2 px-[5%] pr-[8%] sticky top-0 left-0 w-full z-50 transition-shadow duration-300 bg-navy-deep shadow-lg ${hasScrolled ? 'opacity-90' : ''}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/">
            <div className="flex flex-row items-center space-x-2">
              <TbHexagonLetterD size={30} />
              <p>Dennis Hu</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-15">
            {navElements?.map((navElement, index) => (
              <div key={index} className="relative group p-2">
                <Link href={navElement.href} className="nav-link-text">
                  {navElement.text}
                </Link>
                <span
                  className={`nav-link-text-underline scale-x-0 group-hover:scale-x-100 ${pathname === navElement.href ? 'scale-x-100' : ''}`}
                />
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden bg-navy-deep">
            <Hamburger toggled={isOpen} toggle={toggleMenu} size={30} />
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden fixed px-5 left-0 w-screen transition-all duration-300 ease-in-out z-50 ${
            isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          }
        bg-navy-deep`}
        >
          {navElements?.map((navElement, index) => (
            <div key={index} className="p-[5%]">
              {/* {navElement} */}
              <Link href={navElement.href} className="nav-link-text">
                {navElement.text}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
})

NavBar.displayName = 'NavBar'
export default NavBar
