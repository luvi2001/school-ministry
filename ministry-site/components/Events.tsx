'use client'
import { useScrollReveal } from './useScrollReveal'

const events = [
  {
    date: 'August 25-28, 2025',
    isRange: true,
    startDay: '25',
    endDay: '28',
    month: 'August',
    title: 'Evangelism Camp',
    location: 'YGRO Madampe',
    type: 'Camp',
    typeColor: 'bg-amber-100 text-amber-700',
desc: 'An evangelism camp with the main reason to spread the Gospel of Jesus Christ. Targeted at teenagers aged 12 to 19, this camp aims to share God’s love with the next generation through worship, personal testimonies, and a clear call to faith—expecting 100+ young people to join us.',    icon: '🔥',
  },
  {
    date: 'July 26, 2025',
    isRange: false,
    startDay: '26',
    endDay: '',
    month: 'Jul',
    title: 'Back-to-School Supplies Drive',
    location: 'Kirulapone & Wellawatte',
    type: 'Outreach',
    typeColor: 'bg-teal-100 text-teal-700',
    desc: 'Distributing school kits to 80 children heading back to school. Volunteers needed — meals and stationery packs sponsored.',
    icon: '📚',
  },
]

export default function Events() {
  const headerRef = useScrollReveal()

  return (
    <section id="events" className="py-24 mt-0 bg-white">
      {/* Visual hierarchy animations */}
      <style jsx global>{`
        @keyframes containerPulse {
          0%, 100 { box-shadow: 0 25px 50px -12px rgba(245, 158, 11, 0.15); border-color: rgb(245, 158, 11); }
          50% { box-shadow: 0 25px 50px -12px rgba(245, 158, 11, 0.05); border-color: rgba(245, 158, 11, 0.3); }
        }
        .animate-mega-feature {
          animation: containerPulse 4s infinite ease-in-out;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
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

        <div className="grid grid-cols-1 gap-10">
          {events.map((event, i) => {
            const cardRef = useScrollReveal()
            const isFeatured = i === 0 // Target the key highlight notice

            return (
              <div
                key={i}
                ref={cardRef}
                className={`animate-on-scroll group bg-white rounded-2xl border transition-all overflow-hidden relative ${
                  isFeatured
                    ? 'animate-mega-feature border-2 border-amber-500 scale-[1.02] md:scale-[1.03] ring-4 ring-amber-500/5'
                    : 'border-secondary/10 hover:border-accent/20 hover:shadow-lg'
                }`}
              >
                {/* Visual Accent Anchor Line for Featured Card */}
                {isFeatured && (
                  <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-500 via-orange-500 to-amber-600 z-20" />
                )}

                {/* Date / Top Name Bar Component */}
                <div className={`px-6 py-5 flex flex-wrap items-center justify-between gap-4 relative z-10 ${
                  isFeatured ? 'bg-gradient-to-r from-secondary via-stone-900 to-secondary text-white' : 'bg-secondary'
                }`}>
                  
                  {/* FEATURED: Camp Name forced on top layout position */}
                  {isFeatured ? (
                    <div className="flex flex-col gap-1 pl-2">
                      <h3 className="font-body text-2xl md:text-4xl font-bold tracking-tight text-white">
                        {event.title}
                      </h3>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="font-body text-3xl text-white font-semibold leading-none">
                        {event.startDay}
                      </span>
                      <span className="text-accent text-xs uppercase tracking-widest font-medium">
                        {event.month} 2025
                      </span>
                    </div>
                  )}
                  
                  {/* Status Badges / Right side details */}
                  <div className="flex items-center gap-3 ml-auto sm:ml-0">
                    {isFeatured ? (
                      <>
                        <div className="text-right flex flex-col items-end mr-2">
                          <span className="font-body text-xl md:text-2xl font-bold text-white leading-none">
                            {event.startDay}-{event.endDay}
                          </span>
                          <span className="text-[10px] text-accent uppercase tracking-widest font-medium mt-0.5">
                            {event.month} 2025
                          </span>
                        </div>
                        <span className="text-xs bg-amber-500 text-stone-900 font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase shadow-md shadow-amber-500/30 animate-pulse">
                          ⚡ COMING SOON
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl">{event.icon}</span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className={`relative z-10 ${isFeatured ? 'p-8 md:p-10' : 'p-6'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    {isFeatured && (
                      <span className="text-xs bg-stone-900 text-amber-400 font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Youth Camp
                      </span>
                    )}
                  </div>

                  {/* Standard notice fallback title location */}
                  {!isFeatured && (
                    <h3 className="font-display font-semibold text-xl text-secondary mb-2 group-hover:text-accent transition-colors">
                      {event.title}
                    </h3>
                  )}

                  <p className="text-accent text-xs md:text-sm mb-4 flex items-center gap-1.5 font-semibold">
                    <span>📍</span> {event.location}
                  </p>
                  
                  <p className={`text-secondary/70 leading-relaxed ${
                    isFeatured ? 'text-lg md:text-xl max-w-4xl font-light text-secondary/80' : 'text-sm'
                  }`}>
                    {event.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
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