import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Areas from '@/components/Areas'
import Stats from '@/components/Stats'
import Events from '@/components/Events'
import Prayer from '@/components/Prayer'
import Support from '@/components/Support'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Areas />
      <Stats />
      <Events />
      <Prayer />
      <Support />
      <Footer />
    </main>
  )
}
