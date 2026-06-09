'use client'
import { useScrollReveal } from './useScrollReveal'
import { useState } from 'react'

const supportOptions = [
  { icon: '💛', title: 'Monthly Giving', desc: 'Sustain the work with a regular monthly gift. Even $20/month feeds a child and keeps a youth group running.' },
  { icon: '🙋', title: 'Volunteer', desc: 'Join us on the ground. We need teachers, mentors, event helpers, and people willing to pray and show up.' },
  { icon: '📢', title: 'Spread the Word', desc: 'Share our story with your church, small group, or network. Awareness opens doors to partnership.' },
  { icon: '📦', title: 'In-Kind Donations', desc: 'School supplies, food, clothing, and sports equipment are always welcome.' },
]

export default function Support() {
  const headerRef = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '', interest: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="support" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="animate-on-scroll text-center mb-16">
          <p className="text-accent text-sm tracking-[0.25em] uppercase font-medium mb-3">Partner With Us</p>
          <h2 className="font-body text-5xl md:text-6xl font-light text-secondary mb-4">
            Support <em className="text-accent not-italic font-medium">Our Mission</em>
          </h2>
          <div className="cross-divider max-w-xs mx-auto mb-6">
            <span className="text-accent text-xl">✝</span>
          </div>
          <p className="text-secondary/60 max-w-2xl mx-auto text-lg">
            Every act of generosity — no matter the size — multiplies in the lives of youth who have very little.
            Here's how you can be part of this story.
          </p>
        </div>

        {/* Support options */}


        {/* Contact + bank details */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact form */}
          <div ref={useScrollReveal()} className="animate-on-scroll">
            <h3 className="font-body text-3xl text-secondary mb-2 font-medium">Get in Touch</h3>
            <p className="text-secondary/60 text-sm mb-6">Whether you want to give, volunteer, visit, or just know more — we'd love to hear from you.</p>

            {submitted ? (
              <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
                <span className="text-4xl mb-3 block">🙏</span>
                <h4 className="font-display text-2xl text-secondary mb-2">Thank you, {form.name}!</h4>
                <p className="text-secondary/60 text-sm">We've received your message and will be in touch soon. God bless you!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-secondary/60 text-sm font-medium mb-1 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-secondary/20 focus:border-accent focus:outline-none text-sm bg-white"
                      placeholder="John Perera"
                    />
                  </div>
                  <div>
                    <label className="text-secondary/60 text-sm font-medium mb-1 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-secondary/20 focus:border-accent focus:outline-none text-sm bg-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-secondary/60 text-sm font-medium mb-1 block">I'm interested in…</label>
                  <select
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-secondary/20 focus:border-accent focus:outline-none text-sm bg-white"
                  >
                    <option value="">Select an option</option>
                    <option>Monthly Giving</option>
                    <option>One-Time Donation</option>
                    <option>Volunteering</option>
                    <option>Prayer Partnership</option>
                    <option>Visiting / Learning More</option>
                    <option>In-Kind Donation</option>
                  </select>
                </div>
                <div>
                  <label className="text-secondary/60 text-sm font-medium mb-1 block">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-secondary/20 focus:border-accent focus:outline-none text-sm bg-white resize-none"
                    placeholder="Tell us a bit about yourself or how you'd like to help…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-accent hover:bg-orange-600 text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:shadow-accent/30"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact details + bank */}
          <div ref={useScrollReveal()} className="animate-on-scroll space-y-6">
            {/* Direct contact */}
            <div className="bg-secondary text-white rounded-2xl p-7">
              <h4 className="font-body text-2xl mb-5 font-medium">Contact Us Directly</h4>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent">📈</span>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Base Location</p>
                    <p className="text-white/90">Youth For Christ NHQ, Western Province, Sri Lanka</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent">📞</span>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Phone / WhatsApp</p>
                    <p className="text-white/90">+94 75 797 1821</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-accent">✉️</span>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-white/90">colombo.schoolministry@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank details */}
            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-7">
              <h4 className="font-body text-2xl text-secondary mb-2 font-medium">Support Us</h4>
              <p className="text-secondary/60 text-sm mb-5">All donations go directly to field ministry — outreach, programs, and staff support.</p>
              <div className="space-y-3 text-sm">
                {[
                  ['Bank', 'Bank of Ceylon / Commercial Bank'],
                  ['Account Name', 'Reaching the Unreached Ministry'],
                  ['Account No.', 'XXXX XXXX XXXX'],
                  ['Branch', 'Colombo Main Branch'],
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between items-center border-b border-accent/20 pb-2 last:border-0 last:pb-0">
                    <span className="text-secondary/60">{label}</span>
                    <span className="text-secondary font-medium">{val}</span>
                  </div>
                ))}
              </div>
              <p className="text-accent text-xs mt-4 italic">* For overseas donors: please contact us for USD/international transfer details.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
