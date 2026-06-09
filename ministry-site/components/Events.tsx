'use client'
import { useScrollReveal } from './useScrollReveal'

const events = [
  {
    date: 'July 12, 2025',
    day: '12',
    month: 'Jul',
    title: 'Colombo Youth Rally',
    location: 'Dematagoda Community Hall',
    type: 'Rally',
    typeColor: 'bg-amber-100 text-amber-700',
    desc: 'A joint youth gathering across all four areas — worship, testimonies, and a call to faith. Expecting 150+ young people.',
    icon: '🎵',
  },
  {
    date: 'July 26, 2025',
    day: '26',
    month: 'Jul',
    title: 'Back-to-School Supplies Drive',
    location: 'Kirulapone & Wellawatte',
    type: 'Outreach',
    typeColor: 'bg-teal-100 text-teal-700',
    desc: 'Distributing school kits to 80 children heading back to school. Volunteers needed — meals and stationery packs sponsored.',
    icon: '📚',
  },
  {
    date: 'Aug 9, 2025',
    day: '9',
    month: 'Aug',
    title: 'Leadership Training Weekend',
    location: 'Wattala Retreat Centre',
    type: 'Training',
    typeColor: 'bg-indigo-100 text-indigo-700',
    desc: 'Two-day intensive for our 15 youth leaders — discipleship, vision-casting, and peer mentorship skills.',
    icon: '🏕️',
  },
  {
    date: 'Aug 24, 2025',
    day: '24',
    month: 'Aug',
    title: 'Community Prayer Walk',
    location: 'All Four Areas',
    type: 'Prayer',
    typeColor: 'bg-rose-100 text-rose-700',
    desc: 'Our teams will walk and pray through each area, blessing homes, meeting neighbors, and believing for breakthrough.',
    icon: '🚶',
  },
  {
    date: 'Sep 6, 2025',
    day: '6',
    month: 'Sep',
    title: 'Women & Girls Empowerment Day',
    location: 'Wellawatte Church Hall',
    type: 'Empowerment',
    typeColor: 'bg-purple-100 text-purple-700',
    desc: 'A day dedicated to teenage girls and mothers — workshops on identity, health, vocational skills, and spiritual growth.',
    icon: '🌸',
  },
  {
    date: 'Oct 18, 2025',
    day: '18',
    month: 'Oct',
    title: 'Discipleship Graduation Ceremony',
    location: 'Dematagoda',
    type: 'Celebration',
    typeColor: 'bg-gold-100 text-gold-700',
    desc: 'Celebrating the second cohort of graduates from our 6-month discipleship program — 12 young people completing the course.',
    icon: '🎓',
  },
]

export default function Events() {
  const headerRef = useScrollReveal()

  return (
    <section id="events" className="py-24 mt-0 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <p className="text-accent text-sm tracking-[0.25em] uppercase font-medium mb-3">What's Ahead</p>
          <h2 className="font-body text-5xl md:text-6xl font-light text-secondary mb-4">
            Upcoming <em className="text-accent not-italic font-medium">Plans</em>
          </h2>
          <div className="cross-divider max-w-xs mx-auto mb-6">
            <span className="text-accent text-xl">✝</span>
          </div>
          <p className="text-secondary/60 max-w-xl mx-auto">
            Your prayers and partnership make these gatherings possible. Join us or hold us up in prayer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, i) => {
            const cardRef = useScrollReveal()
            return (
              <div
                key={i}
                ref={cardRef}
                className="animate-on-scroll group bg-white rounded-2xl border border-secondary/10 hover:border-accent/20 hover:shadow-lg transition-all overflow-hidden"
              >
                {/* Date bar */}
                <div className="bg-secondary px-5 py-3 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-white font-semibold leading-none">{event.day}</span>
                    <span className="text-accent text-sm uppercase tracking-widest">{event.month} 2025</span>
                  </div>
                  <span className="text-2xl">{event.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${event.typeColor} mb-3 inline-block`}>
                    {event.type}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-secondary mb-1 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-accent text-xs mb-3 flex items-center gap-1">
                    <span>📈</span> {event.location}
                  </p>
                  <p className="text-secondary/60 text-sm leading-relaxed">{event.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-secondary/60 text-sm mb-4">Want to volunteer or attend an event?</p>
          <a
            href="#support"
            className="inline-block px-8 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Involved →
          </a>
        </div>
      </div>
    </section>
  )
}
