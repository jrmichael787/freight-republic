import { motion } from 'motion/react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      '"Excellent service, communication, and fairness in all dealings. They treat each load like it\'s their own. A highly organized team that ensures you get the best price and service out there."',
    name: 'Robert M.',
    title: 'President, Trucking Company',
    rating: 5,
    equipment: 'Dry Van Fleet',
    initials: 'RM',
    color: 'from-orange to-orange-dark',
  },
  {
    quote:
      '"My drivers have experienced a real increase in their income because we are constantly kept on the road with great loads. They handle the hard work so we can drive."',
    name: 'James T.',
    title: 'Independent Owner-Operator',
    rating: 5,
    equipment: 'Flatbed',
    initials: 'JT',
    color: 'from-charcoal to-charcoal-deep',
  },
  {
    quote:
      '"I was skeptical at first, but after my first week with Freight Republic I saw my gross jump by over $1,400. The dispatcher is always available and never misses a beat."',
    name: 'Maria S.',
    title: 'Owner-Operator',
    rating: 5,
    equipment: 'Reefer',
    initials: 'MS',
    color: 'from-orange/80 to-orange-dark',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={14} className="text-orange fill-orange" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-charcoal-deep relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange/5 rounded-full blur-2xl pointer-events-none" />

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
            Testimonials
          </span>
          <h2
            className="font-heading font-900 text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Drivers Trust Freight Republic
          </h2>
          <p className="text-silver font-body text-lg max-w-xl mx-auto leading-relaxed">
            Real results from real owner-operators who made the switch.
          </p>

          {/* Social proof bar */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['RM', 'JT', 'MS', 'DK', 'AL'].map((init) => (
                  <div key={init} className="w-8 h-8 rounded-full bg-orange border-2 border-charcoal-deep flex items-center justify-center text-white text-[10px] font-heading font-800">
                    {init}
                  </div>
                ))}
              </div>
              <span className="text-silver text-sm font-body">500+ drivers dispatched</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-orange fill-orange" />)}
              </div>
              <span className="text-silver text-sm font-body">4.9/5 average rating</span>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative group bg-charcoal/60 border border-white/10 rounded-2xl p-6 hover:border-orange/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange/10"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-orange" />
              </div>

              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Quote */}
              <p className="text-silver-light font-body text-sm leading-relaxed my-4 italic">
                {t.quote}
              </p>

              {/* Equipment badge */}
              <div className="inline-block px-2.5 py-1 rounded-full bg-orange/10 border border-orange/20 text-orange text-[10px] font-body font-600 tracking-wide uppercase mb-4">
                {t.equipment}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                  <span className="text-white text-xs font-heading font-800">{t.initials}</span>
                </div>
                <div>
                  <div className="text-white font-body font-600 text-sm">{t.name}</div>
                  <div className="text-silver/70 font-body text-xs">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-silver font-body mb-2">Join hundreds of satisfied owner-operators.</p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange hover:bg-orange-dark text-white font-body font-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange/40"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Your Free Trial Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
