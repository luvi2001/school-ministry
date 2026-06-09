'use client'
import { useEffect, useRef, useState } from 'react'

function useCountUp(target: number, duration = 2000, trigger: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, trigger])

  return count
}

const mainStats = [
  { value: 120, label: 'Youths Reached', suffix: '+', icon: '👥', desc: 'Total across all four areas' },
  { value: 25, label: 'Families Touched', suffix: '+', icon: '🏠', desc: 'Direct family impact' },
  { value: 18, label: 'Active Bible Study Groups', suffix: '', icon: '📖', desc: 'Fellowship & discipleship groups' },
  { value: 4, label: 'Communities', suffix: '', icon: '🗺️', desc: 'Areas across Colombo' },
]

const areaBreakdown = [
  { name: 'Dematagoda', count: 25, color: 'bg-amber-500', pct: 32 },
  { name: 'Wattala', count: 12, color: 'bg-teal-500', pct: 23 },
  { name: 'Kirulapone & Wellawatte', count: 40, color: 'bg-indigo-500', pct: 40},
]

const milestones = [
  { year: '2022', event: 'Conducted a remarkable Evangelism camp named "Top Gear" which the current mission team leaders participated as Campers' },
  { year: '2023', event: 'Expanded to Wattala; first community feeding program' },
  { year: '2024', event: 'Wellawatte launch + bilingual discipleship begins' },
  { year: '2025', event: 'Kirulapone planted; 100 youths milestone crossed' },
  { year: '2026', event: 'First discipleship graduation; 9 active groups running' },
]

// Add your slideshow images here
const slideshowImages = [
  { src: '/gallery-1.jpg', alt: 'Ministry Activity 1' },
  { src: '/gallery-2.jpg', alt: 'Ministry Activity 2' },
  { src: '/gallery-3.jpg', alt: 'Ministry Activity 3' },
  { src: '/leadership.jpg', alt: 'Leadership Team' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Slideshow Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 4000) // Changes every 4 seconds
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.25em] uppercase font-medium mb-3">By The Numbers</p>
          <h2 className="font-body text-5xl md:text-6xl font-light text-secondary mb-4">
            Our <em className="text-accent not-italic font-medium">Impact</em>
          </h2>
          <div className="cross-divider max-w-xs mx-auto mb-6">
            <span className="text-accent text-xl">✝</span>
          </div>
          <p className="text-secondary/60 max-w-xl mx-auto">
            Every number represents a name, a story, and a life that God is transforming.
          </p>
        </div>

        {/* Main stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {mainStats.map((stat, i) => {
            const count = useCountUp(stat.value, 2000 + i * 200, triggered)
            return (
              <div
                key={stat.label}
                className="text-center bg-white rounded-2xl p-7 border border-secondary/10 shadow-sm hover:shadow-md hover:border-accent/20 transition-all"
              >
                <span className="text-3xl mb-3 block">{stat.icon}</span>
                <p className="font-body text-5xl font-semibold text-secondary leading-none">
                  {count}<span className="text-accent">{stat.suffix}</span>
                </p>
                <p className="text-secondary/80 font-semibold mt-2 text-sm">{stat.label}</p>
                <p className="text-secondary/50 text-xs mt-1">{stat.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Area breakdown */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="font-body text-3xl text-secondary mb-6 font-medium">Youth Reach by Area</h3>
            <div className="space-y-5">
              {areaBreakdown.map((area) => {
                const pct = triggered ? area.pct : 0
                return (
                  <div key={area.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-medium text-secondary/80 text-sm">{area.name}</span>
                      <span className="text-secondary/60 text-sm font-body font-semibold">{area.count} youths</span>
                    </div>
                    <div className="h-3 bg-secondary/10 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${area.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="bg-secondary rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <p className="font-display text-2xl font-light leading-relaxed mb-6 text-white italic relative z-10">
              "We believe every young person in Colombo – regardless of their street address, religion, 
              or background – deserves to know they are seen, loved, and created with purpose."
            </p>
          </div>

          {/* Journey timeline */}
          <div>
            <h3 className="font-display text-3xl text-secondary mb-6 font-medium">Our Journey</h3>
            <div className="relative border-l-2 border-accent/20 pl-6 space-y-5">
              {milestones.map((m, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-accent border-2 border-white shadow-sm" />
                  <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-0.5">{m.year}</p>
                  <p className="text-secondary/70 text-sm leading-relaxed">{m.event}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Slideshow Image Section */}
          <div className="relative rounded-2xl overflow-hidden border border-accent/30 shadow-2xl shadow-accent/20 mt-8 h-80 md:h-96 bg-secondary/5">
            {slideshowImages.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  i === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent pointer-events-none" />
            
            {/* Slide Indicators (Dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {slideshowImages.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'w-4 bg-accent' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}