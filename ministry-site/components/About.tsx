'use client'
import { useScrollReveal } from './useScrollReveal'
import { useState, useEffect } from 'react'

const pillars = [
  {
    icon: '🙏',
    title: 'Faith',
    desc: 'Rooted in Scripture, we build relationships that point young people to Christ.',
  },
  {
    icon: '🤝',
    title: 'Community',
    desc: 'We create safe spaces where marginalized youth find belonging and purpose.',
  },
  {
    icon: '🌱',
    title: 'Transformation',
    desc: 'Through mentorship and discipleship, we invest in lives for lasting change.',
  },
  {
    icon: '🕊️',
    title: 'Hope',
    desc: 'We carry the gospel to areas that rarely hear of the love and grace of God.',
  },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div ref={ref} className="animate-on-scroll text-center mb-16">
          <p className="text-accent text-sm tracking-[0.25em] uppercase font-medium mb-3">Who We Are</p>
          <h2 className="font-body text-5xl md:text-6xl font-light text-secondary mb-6">
            Our <em className="text-accent not-italic font-medium">Ministry</em>
          </h2>
          <div className="cross-divider max-w-xs mx-auto mb-8">
            <span className="text-accent text-xl">✝</span>
          </div>
          <p className="text-secondary/70 text-lg leading-relaxed max-w-3xl mx-auto">
            The School Ministry is a ministry of Youth for Christ under the West Zone, sharing in the vision of giving every young person the opportunity to make an informed decision to follow Jesus Christ and become part of the local church.
            <br /><br />
            We engage school students through meaningful relationships and relevant programs, including tuition classes, monthly worship nights, sports events, outreach initiatives, and discipleship gatherings. Through these ministries, we help young people encounter Christ, grow in their faith, and discover God's purpose for their lives.
            <br /><br />
            By walking alongside students in their spiritual journey, we seek to raise a generation that knows Jesus, lives for Him, and impacts their schools, families, and communities for His glory.
          </p>
        </div>

        {/* Two column story */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
          <div ref={useScrollReveal()} className="animate-on-scroll">
            <h3 className="font-display text-3xl text-secondary mb-4 font-medium">What We Do</h3>
            <ul className="space-y-4 text-secondary/70 leading-relaxed">
              {[
                'Weekly tuition classes that build relationships and provide academic support for students',
                "Bible study groups and discipleship programs that help young people grow in their faith and understanding of God's Word",
                "Monthly worship gatherings through our youth event, '412', creating opportunities for students to encounter God and build Christ-centered friendships",
                'Weekly Play Days that engage students through sports, games, and meaningful fellowship',
                'An annual evangelistic camp designed to share the Gospel, challenge young people to follow Christ, and encourage spiritual growth',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-accent/20 border border-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-accent text-xs">✓</span>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={useScrollReveal()} className="animate-on-scroll">
            <div className="relative rounded-2xl overflow-hidden border border-accent/30 shadow-2xl shadow-accent/20 mt-8 h-80 md:h-96">
              <img
                src="/leadership.jpg"
                alt="Leadership Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>

        {/* Video Showcase Section (Replaced Slider) */}
        <div ref={useScrollReveal()} className="animate-on-scroll mt-20">
          <h3 className="font-body text-3xl text-stone-800 mb-8 font-medium text-center">Our Ministry in Action</h3>

          <div className="relative rounded-2xl overflow-hidden bg-secondary shadow-2xl border border-accent/20 max-w-4xl mx-auto">
            <div className="relative h-96 md:h-[500px]">
              <video
                src="/ministry-action.mp4"
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Optional dark gradient layout match overlay — ignores pointer events so video controls remain clickable */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-20 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {pillars.map((p, i) => (
            <div
              key={i}
              ref={useScrollReveal()}
              className="animate-on-scroll text-center p-6 rounded-2xl bg-white border border-secondary/10 shadow-sm hover:shadow-md hover:border-accent/20 transition-all group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-3xl mb-3 block">{p.icon}</span>
              <h4 className="font-display text-xl font-semibold text-secondary mb-2 group-hover:text-accent transition-colors">{p.title}</h4>
              <p className="text-secondary/60 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}