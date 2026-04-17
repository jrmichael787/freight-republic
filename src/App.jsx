import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeBanner from './components/MarqueeBanner'
import Services from './components/Services'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <MarqueeBanner />
        <Services />
        <Stats />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
