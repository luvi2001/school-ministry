'use client'
import { useScrollReveal } from './useScrollReveal'

const prayerNeeds = [
  {
    icon: '🔥',
    title: 'The Evangelism Youth Camp',
    body: 'Pray for our upcoming camp from August 25–28—that the hearts of the 100+ teenagers (ages 12–19) will be fully receptive to the Gospel, and that true spiritual transformation takes root.',
  },
  {
    icon: '🎓',
    title: 'Current Leadership Team',
    body: 'Many of our current mission team leaders are approaching the end of their formal education. Pray for God’s clear guidance, open doors, and a blessed, impactful future ahead as they transition.',
  },
  {
    icon: '⚡',
    title: 'Flash Team Training',
    body: 'We have chosen 20+ emerging young leaders into our new leadership training pool (Flash Team). Pray for wisdom as we filter and nurture them into the next generation of committed core workers.',
  },
  {
    icon: '🎥',
    title: 'Media Team Development',
    body: 'Intercede for our media team as they capture what God is doing. Pray for creative inspiration, smooth technical operations, and financial provision for their future media works.',
  },
]

export default function Prayer() {
  const headerRef = useScrollReveal()

  return (
    <section id="prayer" className="py-24 bg-secondary relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 60% 40%, rgba(255,101,63,0.07) 0%, transparent 60%)`,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <p className="text-accent text-sm tracking-[0.25em] uppercase font-medium mb-3">Stand With Us</p>
          <h2 className="font-body text-5xl md:text-6xl font-light text-white mb-4">
            Prayer <em className="text-accent not-italic font-medium">Requests</em>
          </h2>
          <div className="cross-divider max-w-xs mx-auto mb-6">
            <span className="text-accent text-xl">✝</span>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Prayer is the backbone of everything we do. Your intercession moves mountains.
            Will you carry these specific needs with us?
          </p>
        </div>

        {/* Prayer cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {prayerNeeds.map((need, i) => {
            const ref = useScrollReveal()
            return (
              <div
                key={i}
                ref={ref}
                className="animate-on-scroll bg-white/5 border border-white/20 hover:border-accent/30 rounded-2xl p-6 transition-all hover:bg-white/10 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl mb-4 block">{need.icon}</span>
                  <h4 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {need.title}
                  </h4>
                  <p className="text-white/60 text-sm leading-relaxed">{need.body}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Prayer prompt banner */}
        <div className="bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
          <p className="font-display text-2xl text-white italic mb-3">
            "The prayer of a righteous person is powerful and effective."
          </p>
          <p className="font-body text-accent text-sm tracking-widest uppercase mb-6">James 5:16</p>
          <p className="text-white/60 mb-6 max-w-lg mx-auto">
            Would you commit to praying for our ministry daily or weekly? Sign up below to receive our monthly prayer newsletter.
          </p>
        </div>
      </div>
    </section>
  )
}