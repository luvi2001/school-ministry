'use client'
import { useScrollReveal } from './useScrollReveal'

const areas = [
  {
    name: 'Dematagoda',
    color: 'from-amber-700 to-amber-900',
    accent: 'bg-amber-100 text-amber-800 border-amber-200',
    tag: 'Since 2019',
    description:
      'One of Colombo\'s most densely populated working-class areas. We run weekly Bible studies, youth fellowships, and tutoring centers serving children from low-income families in the area.',
    focus: ['Youth Discipleship', 'Math Tutoring'],
    youths: 20,
    groups: 4,
    verse: '"The Spirit of the Lord is upon me…" — Luke 4:18',
  },
    {
    name: 'Kirulapone & Wellawatte',
    color: 'from-rose-700 to-rose-900',
    accent: 'bg-rose-100 text-rose-800 border-rose-200',
    tag: 'Since 2022',
    description:
      'A central Colombo neighborhood with growing youth vulnerability. We recently planted a new fellowship here, focusing on teen girls\' empowerment, prayer groups, and gospel sharing.',
    focus: ['Teen Girls Ministry', 'Prayer Groups', 'New Fellowship'],
    youths: 28,
    groups: 7,
    verse: '"She is clothed with strength and dignity." — Proverbs 31:25',
  },
  {
    name: 'Wattala',
    color: 'from-teal-700 to-teal-900',
    accent: 'bg-teal-100 text-teal-800 border-teal-200',
    tag: 'Since 2020',
    description:
      'A coastal suburb with a mixed community facing economic hardship. Our team holds sports fellowships, prayer meetings, and skills training workshops for young adults seeking direction.',
    focus: ['Sports Ministry', 'Young Adults', 'Skills Training'],
    youths: 12,
    groups: 4,
    verse: '"I came that they may have life abundantly." — John 10:10',
  },


]

export default function Areas() {
  const headerRef = useScrollReveal()

  return (
    <section id="areas" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <p className="text-accent text-sm tracking-[0.25em] uppercase font-medium mb-3">Where We Serve</p>
          <h2 className="font-body text-5xl md:text-6xl font-light text-primary mb-4">
            Our <em className="text-accent not-italic font-medium">Four Areas</em>
          </h2>
          <div className="cross-divider max-w-xs mx-auto mb-6">
            <span className="text-accent text-xl">✝</span>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Each community has its own story, needs, and opportunities. Here's a glimpse into the work God is doing through our teams on the ground.
          </p>
        </div>

        {/* Area cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, i) => {
            const cardRef = useScrollReveal()
            return (
              <div
                key={area.name}
                ref={cardRef}
                className="animate-on-scroll group rounded-2xl overflow-hidden border border-white/20 hover:border-accent/40 transition-all hover:shadow-2xl hover:shadow-accent/10 flex flex-col h-full"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Card header */}
                <div className={`bg-gradient-to-br ${area.color} p-7 h-64 relative overflow-hidden80`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="flex items-start justify-between relative z-10">
                    <div className="flex-1 pr-2">
                      <h3 className="font-body text-sm md:text-lg lg:text-2xl text-primary font-bold mt-1 leading-tight">{area.name}</h3>
                    </div>
                  </div>
                  {/* Quick stats */}
                  <div className="flex gap-8 mt-5 relative z-10 justify-center">
                    <div className="text-center px-6 py-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                      <p className="text-primary font-bold text-5xl md:text-6xl font-body">{area.youths}+</p>
                      <p className="text-white/70 text-xs tracking-wide uppercase mt-1">Youths</p>
                    </div>
                    <div className="text-center px-6 py-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                      <p className="text-primary font-bold text-5xl md:text-6xl font-body">{area.groups}</p>
                      <p className="text-white/70 text-xs tracking-wide uppercase mt-1">Groups</p>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-white/5 p-7 flex-grow flex flex-col">
                  <p className="text-white/70 leading-relaxed mb-5 text-sm flex-grow">{area.description}</p>

                  {/* Focus tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {area.focus.map(tag => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-white border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Scripture */}
                  <p className="text-accent/80 italic text-sm font-display text-base border-t border-white/20 pt-4 mt-auto">
                    {area.verse}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
