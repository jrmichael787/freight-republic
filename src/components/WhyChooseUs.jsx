import { motion } from 'motion/react'
import { Brain, ShieldCheck, UserCheck, FileText, CheckCircle2 } from 'lucide-react'
import logoPrimary from '../assets/logo-primary.png'

const reasons = [
  {
    icon: Brain,
    title: 'AI-Powered Route Optimization',
    description:
      'We use advanced logistics tools to plan your lanes and reduce empty (deadhead) miles by up to 35%. Smarter routes mean more money in your pocket on every load.',
    highlight: 'Up to 35% less deadhead',
    color: 'text-orange',
    bg: 'bg-orange/10',
    border: 'border-orange/20',
  },
  {
    icon: ShieldCheck,
    title: 'Strict Broker Vetting',
    description:
      'We protect your money by verifying every broker\'s $75,000 surety bond status and credit score before booking a load. You never haul for bad actors.',
    highlight: '$75K bond verification on every broker',
    color: 'text-green-400',
    bg: 'bg-green-400/10',
    border: 'border-green-400/20',
  },
  {
    icon: UserCheck,
    title: 'Zero Forced Dispatch',
    description:
      'You are the boss. You choose the regions you want to run; we negotiate the top rates on your behalf. No pressure, no forced loads — ever.',
    highlight: '100% driver-controlled decisions',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    icon: FileText,
    title: 'Complete Back-Office Support',
    description:
      'From rate confirmations to driver settlements and invoicing, we manage all the heavy administrative lifting so you stay focused on the road.',
    highlight: 'Rate confirmations, BOLs, PODs & more',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
]

const checkList = [
  'No setup fees or hidden charges',
  'Dedicated dispatcher assigned to you',
  'All 48 states covered',
  'Same-day load booking available',
  'Weekly performance reporting',
  'Direct factoring company submissions',
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-silver-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-charcoal/5 rounded-full blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/15 border border-orange/30 text-orange text-xs font-body font-600 tracking-widest uppercase mb-4">
            Why Choose Us
          </span>
          <h2
            className="font-heading font-900 text-charcoal mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            The Freight Republic Difference
          </h2>
          <p className="text-charcoal/60 font-body text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just book loads — we become your back-office partner, protecting your money and maximizing every mile you drive.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left — Reason cards */}
          <div className="grid gap-5">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`group flex gap-4 p-5 rounded-2xl bg-white border ${r.border} shadow-sm hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-xl ${r.bg} border ${r.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className={r.color} />
                  </div>
                  <div>
                    <h3 className="font-heading font-800 text-charcoal text-xl mb-1">{r.title}</h3>
                    <p className="text-charcoal/60 font-body text-sm leading-relaxed mb-2">{r.description}</p>
                    <div className={`inline-flex items-center gap-1.5 text-xs font-body font-600 ${r.color}`}>
                      <CheckCircle2 size={12} />
                      {r.highlight}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right — Logo + Checklist */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-charcoal rounded-3xl p-8 shadow-2xl"
            >
              {/* Logo */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-orange/40">
                  <img src={logoPrimary} alt="Freight Republic LLC" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-heading font-800 text-white text-xl leading-tight">FREIGHT REPUBLIC</div>
                  <div className="text-orange text-xs font-body tracking-widest uppercase">Your Dispatch Partner</div>
                </div>
              </div>

              {/* Headline */}
              <h3 className="font-heading font-800 text-white text-2xl mb-2">Everything Included.</h3>
              <p className="text-silver font-body text-sm mb-6 leading-relaxed">
                No à la carte fees. No surprises. One flat rate covers everything your operation needs.
              </p>

              {/* Checklist */}
              <ul className="space-y-3 mb-8">
                {checkList.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-3 text-sm font-body text-silver-light"
                  >
                    <div className="w-5 h-5 rounded-full bg-orange/20 border border-orange/40 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={11} className="text-orange" />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-orange hover:bg-orange-dark text-white font-body font-700 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange/40"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Your Free 7-Day Trial →
              </motion.button>

              <p className="text-center text-silver/50 text-xs font-body mt-3">No credit card required. Cancel anytime.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
