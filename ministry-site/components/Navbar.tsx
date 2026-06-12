'use client'
import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Our Areas', href: '#areas' },
  { label: 'Impact', href: '#stats' },
  { label: 'Events', href: '#events' },
  { label: 'Prayer', href: '#prayer' },
  { label: 'Support Us', href: '#support' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-secondary/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-4 group">
          {/* Two stacked logos */}
          <div className="flex flex-col gap-1">
            <img src="/sm-logo.png" alt="School Ministry" className="h-10 w-auto" />
            <img src="/tfc-logo.png" alt="Youth For Christ" className="h-8 w-auto" />
          </div>
          <div>
            <p className="font-body text-white font-semibold text-2xl uppercase leading-none">Colombo School Ministry</p>
            <p className="font-body text-accent text-xl tracking-widest  leading-none mt-4">Youth For Christ</p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-white/70 hover:text-accent text-sm font-body font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#support"
            className="ml-2 px-5 py-2 bg-accent hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
          >
            Give Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary/98 backdrop-blur-sm border-t border-white/20 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-accent font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#support"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center py-2.5 bg-accent text-white font-semibold rounded-full"
          >
            Give Now
          </a>
        </div>
      )}
    </nav>
  )
}
