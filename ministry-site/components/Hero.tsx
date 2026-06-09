'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    setTimeout(() => el.classList.add('visible'), 100)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(255,101,63,0.12) 0%, transparent 60%),
                            radial-gradient(ellipse at 80% 20%, rgba(255,101,63,0.08) 0%, transparent 50%)`,
        }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-px h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-1/3 right-16 w-px h-48 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      </div>

      <div
        ref={ref}
        className="animate-on-scroll relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mt-28 mb-6 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10">
          <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">School Ministry · Colombo, Sri Lanka</span>
        </div>

        {/* Headline */}
        <h1 className="font-body text-6xl md:text-8xl font-light text-primary leading-[1.05] mb-6">
          Reaching the{' '}
          <em className="text-accent not-italic font-semibold">Unreached</em>
        </h1>

        <p className="font-body text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Bringing hope, dignity, and the love of Christ to the forgotten corners of Colombo — one young life at a time.
        </p>

        {/* Scripture */}
        <blockquote className="mb-10 text-white/50 italic font-display text-xl">
          "Go therefore and make disciples of all nations…"
          <span className="block text-accent/70 text-sm not-italic font-body mt-1 tracking-widest uppercase">Matthew 28:19</span>
        </blockquote>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#about"
            className="px-8 py-3.5 bg-accent hover:bg-orange-600 text-white font-semibold rounded-full transition-all hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-1"
          >
            Our Story
          </a>
          <a
            href="#support"
            className="px-8 py-3.5 border border-white/30 hover:border-accent text-white hover:text-accent rounded-full transition-all hover:-translate-y-1"
          >
            Support Us
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-stone-500 tracking-widest uppercase"></span>
          <div className="w-px h-12 bg-gradient-to-b from-stone-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
