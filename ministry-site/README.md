# Reaching the Unreached — Ministry Website

A beautiful, single-page Next.js website for your urban youth ministry in Colombo, Sri Lanka.

---

## 🚀 Setup Steps

### 1. Prerequisites
Make sure you have **Node.js 18+** installed.
Download from: https://nodejs.org

### 2. Create Your Project

Open your terminal and run:

```bash
# Unzip the project folder, then navigate into it
cd ministry-site

# Install dependencies
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

### 4. Build for Production

```bash
npm run build
npm start
```

---

## 📁 File Structure

```
ministry-site/
├── app/
│   ├── layout.tsx       ← Fonts, metadata, global layout
│   ├── page.tsx         ← Main page (assembles all sections)
│   └── globals.css      ← Global styles + Tailwind
├── components/
│   ├── Navbar.tsx       ← Sticky navigation bar
│   ├── Hero.tsx         ← Hero banner with scripture + CTAs
│   ├── About.tsx        ← Ministry intro + what we do
│   ├── Areas.tsx        ← Dematagoda, Wattala, Wellawatte, Kirulapone
│   ├── Stats.tsx        ← Youth stats, area breakdown, timeline
│   ├── Events.tsx       ← Upcoming events calendar
│   ├── Prayer.tsx       ← 8 prayer request cards
│   ├── Support.tsx      ← Contact form + bank/giving details
│   ├── Footer.tsx       ← Footer with links + scripture
│   └── useScrollReveal.ts ← Scroll animation hook
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ✏️ How to Customize

### Update Your Real Info
Edit these files with your actual details:

| What to change | Where |
|---|---|
| Ministry name & tagline | `app/layout.tsx` (metadata) + `components/Navbar.tsx` |
| Phone, email, address | `components/Support.tsx` (Contact Us section) |
| Bank account details | `components/Support.tsx` (Give Financially section) |
| Social media handles | `components/Support.tsx` + `components/Footer.tsx` |
| Youth counts per area | `components/Areas.tsx` (youths, families, groups fields) |
| Total stats | `components/Stats.tsx` (mainStats array) |
| Upcoming events | `components/Events.tsx` (events array) |
| Prayer requests | `components/Prayer.tsx` (prayerNeeds array) |
| Your story/quote | `components/About.tsx` (blockquote section) |

---

## 🌐 Deploy Online (Free)

### Option 1: Vercel (Recommended — easiest)
1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repo
4. Deploy — done! You get a free `.vercel.app` URL

### Option 2: Netlify
1. Run `npm run build`
2. Upload the `.next` folder to https://netlify.com

---

## 🎨 Design Features

- **Fonts**: Cormorant Garamond (elegant serif display) + Nunito (clean body)
- **Colors**: Warm stone + gold — faith-inspired, dignified palette
- **Animations**: Scroll-reveal, animated stat counters, smooth hover effects
- **Responsive**: Works on mobile, tablet, and desktop
- **Sections**: Hero → About → Areas → Stats → Events → Prayer → Support → Footer

---

Built with love for the youth of Colombo 🇱🇰 ✝
