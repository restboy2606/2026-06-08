import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Games from './components/Games'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Games />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
