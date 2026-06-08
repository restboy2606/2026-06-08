import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BottomCTA />
      </main>
      <Footer />
    </>
  )
}
