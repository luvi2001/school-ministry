'use client'
import { useScrollReveal } from './useScrollReveal'

const prayerNeeds = [
  {
    icon: '🙏',
    title: 'Open Hearts',
    body: 'Pray for the young people in our areas — that their hearts would be open to receive the gospel and that lasting faith would take root.',
  },
  {
    icon: '👩‍💼',
    title: 'More Workers',
    body: 'We urgently need 4–5 more committed volunteers and 2 full-time staff members who can give consistent time to our communities.',
  },
  {
    icon: '🏠',
    title: 'A Community Space in Kirulapone',
    body: 'We are believing for a dedicated gathering space in Kirulapone. Pray for God to open a door for a venue we can meet in regularly.',
  },
  {
    icon: '💰',
    title: 'Monthly Financial Provision',
    body: 'Our ministry runs on very limited funds. Pray for God to raise up faithful donors who can sustain and grow the work long-term.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Whole Families',
    body: 'Many of our youths come from broken or absent-parent homes. Pray for healing, restoration, and that entire families would come to know Jesus.',
  },
  {
    icon: '🌏',
    title: 'Multi-Ethnic Unity',
    body: 'Our communities include Tamil, Sinhalese, and Muslim youth. Pray for genuine unity, cultural sensitivity, and bridges of love across divides.',
  },
  {
    icon: '🔒',
    title: 'Safety & Protection',
    body: 'Some areas we serve have gang presence and risk. Pray for the safety of our team, youth, and families as we go into challenging streets.',
  },
  {
    icon: '📖',
    title: 'Discipleship Depth',
    body: 'Pray for our discipleship program — that those who begin would finish and that our graduates would become leaders who disciple others.',
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
            Will you carry these needs with us?
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
                className="animate-on-scroll bg-white/5 border border-white/20 hover:border-accent/30 rounded-2xl p-6 transition-all hover:bg-white/10 group"
              >
                <span className="text-3xl mb-4 block">{need.icon}</span>
                <h4 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">{need.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{need.body}</p>
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
          <a
            href="#support"
            className="inline-block px-8 py-3 bg-accent hover:bg-orange-600 text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-accent/30"
          >
            Join Our Prayer Network
          </a>
        </div>
      </div>
    </section>
  )
}
