import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ArrowRight } from 'lucide-react'
import logoPrimary from '../assets/logo-primary.png'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
]

const services = [
  { label: 'Dry Van Dispatching', href: '#services' },
  { label: 'Reefer Dispatching', href: '#services' },
  { label: 'Flatbed & Step Deck', href: '#services' },
  { label: 'Box Truck & Hotshot', href: '#services' },
  { label: 'Back-Office Support', href: '#services' },
  { label: 'Rate Negotiation', href: '#services' },
]

const socials = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Twitter, label: 'Twitter/X', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer id="footer" className="bg-charcoal-deeper border-t border-white/10">

      {/* CTA Strip */}
      <div className="bg-orange py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white font-heading font-800 text-xl sm:text-2xl text-center sm:text-left">
            Ready to Keep Your Trucks Rolling 24/7?
          </div>
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 px-6 py-3 bg-white text-orange font-body font-700 rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-lg flex-shrink-0"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Claim Free Trial <ArrowRight size={16} />
          </motion.button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-orange/30">
                <img src={logoPrimary} alt="Freight Republic LLC" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-heading font-800 text-white text-lg leading-tight">FREIGHT REPUBLIC</div>
                <div className="text-orange text-xs font-body tracking-widest">LLC</div>
              </div>
            </div>
            <p className="text-silver font-body text-sm leading-relaxed mb-5">
              Professional truck dispatching services that negotiate the best rates, reduce deadhead miles, and handle the paperwork so you can focus on driving.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:+13072176455" className="flex items-center gap-2.5 text-silver hover:text-orange transition-colors text-sm font-body">
                <Phone size={14} className="text-orange flex-shrink-0" />
                (307) 217-6455
              </a>
              <a href="mailto:info@freightrepublicllc.co" className="flex items-center gap-2.5 text-silver hover:text-orange transition-colors text-sm font-body break-all">
                <Mail size={14} className="text-orange flex-shrink-0" />
                info@freightrepublicllc.co
              </a>
              <a
                href="https://maps.google.com/?q=1021+E+Lincolnway+Suite+412+Cheyenne+WY+82001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-silver hover:text-orange transition-colors text-sm font-body leading-relaxed"
              >
                <MapPin size={14} className="text-orange flex-shrink-0 mt-0.5" />
                <span>
                  1021 E Lincolnway, Suite 412<br />
                  Cheyenne, WY 82001
                </span>
              </a>
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="font-heading font-800 text-white text-base uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-silver hover:text-orange font-body text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange/40 group-hover:bg-orange transition-colors flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="font-heading font-800 text-white text-base uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(s.href) }}
                    className="text-silver hover:text-orange font-body text-sm transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-orange/40 group-hover:bg-orange transition-colors flex-shrink-0" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Social + Hours */}
          <div>
            <h4 className="font-heading font-800 text-white text-base uppercase tracking-widest mb-5">
              Follow Us
            </h4>
            <div className="flex gap-3 mb-7">
              {socials.map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-charcoal border border-white/10 flex items-center justify-center text-silver hover:text-white hover:bg-orange hover:border-orange transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            <h4 className="font-heading font-800 text-white text-base uppercase tracking-widest mb-3">
              Dispatch Hours
            </h4>
            <div className="space-y-1.5 text-sm font-body">
              <div className="flex justify-between text-silver">
                <span>Mon – Fri</span>
                <span className="text-white">24 Hours</span>
              </div>
              <div className="flex justify-between text-silver">
                <span>Saturday</span>
                <span className="text-white">24 Hours</span>
              </div>
              <div className="flex justify-between text-silver">
                <span>Sunday</span>
                <span className="text-white">24 Hours</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-2 text-orange text-xs font-600">
                <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
                Always Open — 24/7/365
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-silver/50 font-body text-xs text-center sm:text-left">
            © 2026 Freight Republic LLC · All Rights Reserved · Proudly serving carriers across the USA
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Privacy Policy', 'Terms of Service', 'Dispatcher-Carrier Agreement'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-silver/50 hover:text-orange font-body text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
