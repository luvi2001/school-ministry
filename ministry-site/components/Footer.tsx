export default function Footer() {
  return (
    <footer className="bg-secondary text-white/70 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div>
                <p className="font-body text-white font-semibold text-lg leading-none">COLOMBO SCHOOL MINISTRY</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Serving the forgotten youth of Colombo — Dematagoda, Wattala, Wellawatte & Kirulapone — through faith, community, and love.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white text-sm font-semibold mb-4 tracking-widest uppercase">Navigate</p>
            <ul className="space-y-2 text-sm">
              {[
                ['About', '#about'],
                ['Our Areas', '#areas'],
                ['Impact Stats', '#stats'],
                ['Events', '#events'],
                ['Prayer Requests', '#prayer'],
                ['Support Us', '#support'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-accent transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Scripture */}
          <div className="border border-white/20 rounded-2xl p-6">
            <p className="text-white italic font-display text-lg leading-relaxed mb-3">
              "How beautiful are the feet of those who bring good news!"
            </p>
            <p className="font-body text-accent text-xs tracking-widest uppercase">Romans 10:15</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Colombo SchoolJI Ministry. All rights reserved.</p>
          <p>Built with prayer and purpose · Colombo, Sri Lanka 🇱🇰</p>
        </div>
      </div>
    </footer>
  )
}
