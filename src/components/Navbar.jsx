import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Phone } from 'lucide-react'
import logoPrimary from '../assets/logo-primary.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl bg-charcoal-deeper/80 border-b border-white/10 shadow-2xl'
            : 'backdrop-blur-md bg-white/5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">

            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home') }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <div className="w-11 h-11 rounded-xl overflow-hidden ring-2 ring-orange/30 group-hover:ring-orange transition-all duration-300">
                <img src={logoPrimary} alt="Freight Republic LLC" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <div className="font-heading font-800 text-xl text-white leading-tight tracking-wide">
                  FREIGHT REPUBLIC
                </div>
                <div className="text-orange text-xs font-body font-500 tracking-widest uppercase">
                  Dispatching Services
                </div>
              </div>
            </motion.a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className="relative px-4 py-2 text-sm font-body font-500 text-silver hover:text-white transition-colors duration-200 group"
                  whileHover={{ y: -1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-orange rounded-full group-hover:w-4/5 transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+1-800-FREIGHT" className="flex items-center gap-2 text-silver hover:text-white text-sm font-body transition-colors duration-200">
                <Phone size={14} className="text-orange" />
                <span className="font-500">24/7 Support</span>
              </a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                className="px-5 py-2.5 bg-orange hover:bg-orange-dark text-white text-sm font-body font-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange/40 hover:shadow-xl"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Free Trial
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-silver hover:text-white transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[72px] left-0 right-0 z-40 backdrop-blur-2xl bg-charcoal-deeper/95 border-b border-white/10 shadow-2xl lg:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-silver hover:text-white hover:bg-white/5 rounded-lg font-body font-500 transition-all duration-200 border border-transparent hover:border-orange/20"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('#contact') }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-2 px-4 py-3 bg-orange hover:bg-orange-dark text-white font-body font-600 rounded-lg text-center transition-all duration-300"
              >
                🚀 Claim Your 7-Day Free Trial
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
