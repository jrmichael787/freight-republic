import { motion } from 'motion/react'
import { Search, DollarSign, Navigation, FileCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Finding Loads',
    description:
      'We analyze live market rates and use premium load boards to find the most profitable freight for your specific equipment and preferred regions.',
    detail: 'DAT, Truckstop & Convoy load boards monitored in real time.',
  },
  {
    number: '02',
    icon: DollarSign,
    title: 'Negotiating Rates',
    description:
      'We negotiate directly with brokers to secure above-average rates and optimal conditions for your trip. We never settle for lowball offers.',
    detail: 'Avg. 18–22% higher rates vs booking direct.',
  },
  {
    number: '03',
    icon: Navigation,
    title: 'Assigning & Routing',
    description:
      'We assign the load, plan the most efficient route, and send all pickup/drop-off details directly to the driver — no guesswork.',
    detail: 'Full load details, directions & contacts delivered instantly.',
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Paperwork & Billing',
    description:
      'We handle the rate confirmations, BOLs, and PODs, and submit everything directly to your factoring company for fast payment.',
    detail: 'Same-day factoring submissions on every load.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-charcoal-deeper relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,117,31,0.06)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 border border-orange/30 text-orange text-xs font-body font-600 tracking-widest uppercase mb-4">
            How It Works
          </span>
          <h2
            className="font-heading font-900 text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            From Empty to Loaded in 4 Steps
          </h2>
          <p className="text-silver font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Our streamlined process gets you on the road faster with better-paying loads and zero administrative headaches.
          </p>
        </motion.div>

        {/* Steps — Desktop horizontal timeline */}
        <div className="hidden lg:block relative mb-16">
          {/* Connector line */}
          <div className="absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative w-16 h-16 rounded-full bg-charcoal border-2 border-orange/50 flex items-center justify-center mb-6 z-10 shadow-xl group-hover:border-orange group-hover:shadow-orange/30 transition-all duration-300"
                  >
                    <Icon size={24} className="text-orange" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-orange flex items-center justify-center">
                      <span className="text-white text-[10px] font-heading font-900">{step.number.slice(1)}</span>
                    </div>
                  </motion.div>

                  {/* Step number */}
                  <div className="text-orange/30 font-heading font-900 text-5xl absolute opacity-20 -mt-2 select-none">
                    {step.number}
                  </div>

                  <h3 className="font-heading font-800 text-white text-xl mb-3 mt-2">{step.title}</h3>
                  <p className="text-silver font-body text-sm leading-relaxed mb-3">{step.description}</p>
                  <div className="px-3 py-1.5 rounded-full bg-orange/10 border border-orange/20 text-orange text-xs font-body font-500">
                    {step.detail}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Steps — Mobile vertical */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-7 top-0 bottom-0 w-px bg-orange/20" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-5"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-charcoal border-2 border-orange/50 flex items-center justify-center flex-shrink-0 z-10 shadow-lg">
                    <Icon size={20} className="text-orange" />
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="text-orange/50 font-heading font-900 text-xs tracking-widest mb-1">{step.number}</div>
                    <h3 className="font-heading font-800 text-white text-xl mb-2">{step.title}</h3>
                    <p className="text-silver font-body text-sm leading-relaxed mb-2">{step.description}</p>
                    <div className="inline-block px-3 py-1 rounded-full bg-orange/10 border border-orange/20 text-orange text-xs font-body font-500">
                      {step.detail}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-orange to-orange-dark p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <div className="relative">
            <h3 className="font-heading font-900 text-white text-3xl md:text-4xl mb-3">
              Ready to Get Rolling?
            </h3>
            <p className="text-white/80 font-body mb-6 max-w-xl mx-auto">
              Join hundreds of owner-operators who trust Freight Republic to keep them loaded and earning every week.
            </p>
            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-orange font-body font-700 rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-xl"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Claim Your 7-Day Free Trial
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
