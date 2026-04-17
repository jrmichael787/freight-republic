import { motion } from 'motion/react'
import { ArrowRight, Shield, TrendingUp, Clock, ChevronDown } from 'lucide-react'
import logoContrast from '../assets/logo-contrast.png'

const trustBadges = [
  { icon: TrendingUp, text: '35% Less Deadhead Miles' },
  { icon: Shield, text: 'Verified Broker Network' },
  { icon: Clock, text: '24/7 Dispatch Support' },
]

const floatingCards = [
  { label: 'Avg. Weekly Gross', value: '$8,400+', delta: '+22%', color: 'text-green-400' },
  { label: 'Loads Booked Today', value: '47', delta: 'Live', color: 'text-orange' },
  { label: 'Deadhead Saved', value: '35%', delta: 'vs industry avg', color: 'text-blue-400' },
]

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-charcoal-deeper"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,117,31,0.15)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(53,52,52,0.8)_0%,_transparent_70%)]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Highway road lines */}
      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 w-0.5 bg-orange-light"
            style={{ left: `${15 + i * 18}%`, height: '100%' }}
            animate={{ scaleY: [0, 1, 0], y: [0, -200, -400] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.5, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/10 border border-orange/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-orange animate-pulse" />
              <span className="text-orange text-sm font-body font-500 tracking-wide">
                #1 Truck Dispatching Service — Now Accepting New Clients
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-900 text-white leading-none mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', lineHeight: 1.05, letterSpacing: '-0.01em' }}
            >
              Keep Your Trucks{' '}
              <span className="text-orange relative">
                Moving
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-orange/40 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                />
              </span>{' '}
              and Your Profits{' '}
              <span className="text-orange">Growing</span>{' '}
              in 2026.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-silver text-lg font-body font-400 leading-relaxed mb-8 max-w-xl"
            >
              Professional truck dispatching services that negotiate the best rates, reduce deadhead miles, and handle the paperwork—so you can focus on driving.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <motion.button
                onClick={scrollToContact}
                className="group flex items-center justify-center gap-2 px-7 py-4 bg-orange hover:bg-orange-dark text-white font-body font-700 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange/50 hover:shadow-2xl animate-pulse-glow"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Claim Your 7-Day Free Trial Today!
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
              <motion.button
                onClick={scrollToServices}
                className="flex items-center justify-center gap-2 px-7 py-4 bg-white/5 hover:bg-white/10 text-white font-body font-500 text-base rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Services
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-7 h-7 rounded-full bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={13} className="text-orange" />
                  </div>
                  <span className="text-silver-light text-sm font-body font-400">{text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Logo + Floating Cards */}
          <div className="relative flex items-center justify-center">
            {/* Large logo glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
              className="relative"
            >
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-3xl bg-orange/10 blur-3xl scale-110" />
              <div className="absolute inset-0 rounded-3xl bg-orange/5 blur-xl scale-125" />

              {/* Logo container */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border border-orange/20"
              >
                <img
                  src={logoContrast}
                  alt="Freight Republic LLC"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Floating stat cards */}
            {floatingCards.map((card, i) => {
              const positions = [
                'absolute -top-4 -right-4 lg:-right-8',
                'absolute top-1/2 -left-4 lg:-left-10 -translate-y-1/2',
                'absolute -bottom-4 -right-4 lg:-right-8',
              ]
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, type: 'spring' }}
                  className={`${positions[i]} backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 lg:p-4 shadow-xl min-w-[130px]`}
                  style={{ animation: `float ${4 + i}s ease-in-out infinite` }}
                >
                  <div className="text-xs text-silver font-body mb-1">{card.label}</div>
                  <div className="text-xl font-heading font-800 text-white">{card.value}</div>
                  <div className={`text-xs font-body font-500 ${card.color}`}>{card.delta}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-silver/60 hover:text-silver transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
