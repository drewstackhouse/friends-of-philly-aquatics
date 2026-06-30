'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const aboutLinks = [
  { href: '/our-mission', label: 'Our Mission' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/advocacy', label: 'Advocacy' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    setDropdownOpen(false)
    setMobileOpen(false)
  }, [pathname])

  const isAboutActive = aboutLinks.some(l => l.href === pathname)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-slate-900 leading-tight text-base sm:text-lg"
        >
          Friends of Philly Aquatics
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex items-center gap-7">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === '/' ? 'text-blue-700' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              Home
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(prev => !prev)}
                className={`text-sm font-medium flex items-center gap-1 transition-colors ${
                  isAboutActive || dropdownOpen
                    ? 'text-blue-700'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                About Us
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-44 bg-white border border-slate-200 shadow-lg py-1">
                  {aboutLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`block px-4 py-2.5 text-sm transition-colors ${
                        pathname === href
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  pathname === href ? 'text-blue-700' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/donate"
            className={`text-sm font-semibold ml-3 px-4 py-1.5 transition-colors ${
              pathname === '/donate'
                ? 'bg-blue-800 text-white'
                : 'bg-blue-700 text-white hover:bg-blue-800'
            }`}
          >
            Donate
          </Link>

          <button
            type="button"
            className="md:hidden p-2 -mr-2 text-slate-500"
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-medium ${pathname === '/' ? 'text-blue-700' : 'text-slate-600'}`}
            >
              Home
            </Link>

            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 mb-3">About Us</p>
              <div className="flex flex-col gap-3 pl-4 border-l border-slate-200">
                {aboutLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`text-sm font-medium ${pathname === href ? 'text-blue-700' : 'text-slate-600'}`}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(1).map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium ${pathname === href ? 'text-blue-700' : 'text-slate-600'}`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
