import { motion } from 'motion/react'
import { Truck, Thermometer, Package, Zap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Dry Van',
    tag: 'Most Popular',
    description:
      'Dependable dispatching for general freight with optimized route planning to maximize your weekly gross. We find the best-paying loads on every lane.',
    features: ['Route Optimization', 'Top Broker Access', 'Rate Negotiation', 'Paperwork Handled'],
    gradient: 'from-orange/20 to-orange/5',
    border: 'border-orange/30',
    glow: 'shadow-orange/20',
  },
  {
    icon: Thermometer,
    title: 'Reefer (Refrigerated)',
    tag: 'Premium Loads',
    description:
      'Specialized dispatching for temperature-controlled freight, ensuring on-time delivery and strict compliance for perishable goods across all major lanes.',
    features: ['Temp Compliance', 'Priority Lanes', 'FSMA Knowledge', 'On-Time Guarantee'],
    gradient: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-500/30',
    glow: 'shadow-blue-500/20',
  },
  {
    icon: Package,
    title: 'Flatbed & Step Deck',
    tag: 'High Rates',
    description:
      'Expert coordination for oversized loads, construction materials, and heavy haul freight. We negotiate premium rates for specialized equipment operators.',
    features: ['Oversized Permits', 'Heavy Haul Loads', 'Construction Freight', 'Premium Rates'],
    gradient: 'from-amber-500/20 to-amber-500/5',
    border: 'border-amber-500/30',
    glow: 'shadow-amber-500/20',
  },
  {
    icon: Zap,
    title: 'Box Trucks & Hotshots',
    tag: 'Fast Dispatch',
    description:
      'Dedicated dispatching for expedited, time-sensitive, and LTL shipments. We keep your smaller equipment loaded and profitable 7 days a week.',
    features: ['Expedited Loads', 'LTL Freight', 'Time-Sensitive', '7-Day Dispatch'],
    gradient: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/30',
    glow: 'shadow-purple-500/20',
  },
]

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`relative group rounded-2xl border ${service.border} bg-gradient-to-br ${service.gradient} backdrop-blur-sm p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:${service.glow} overflow-hidden`}
    >
      {/* Tag */}
      <div className="absolute top-4 right-4">
        <span className="px-2.5 py-1 rounded-full text-[10px] font-body font-600 tracking-widest uppercase bg-white/10 text-silver-light border border-white/10">
          {service.tag}
        </span>
      </div>

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-charcoal/60 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon size={26} className="text-orange" />
      </div>

      {/* Content */}
      <h3 className="font-heading font-800 text-white text-2xl mb-3 tracking-wide">{service.title}</h3>
      <p className="text-silver font-body text-sm leading-relaxed mb-5">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-5">
        {service.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm font-body text-silver-light">
            <span className="w-1.5 h-1.5 rounded-full bg-orange flex-shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="flex items-center gap-1.5 text-orange font-body font-600 text-sm group-hover:gap-2.5 transition-all duration-300"
      >
        Get Started <ArrowRight size={14} />
      </button>

      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-orange/5 to-transparent" />
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-charcoal-deep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange/10 border border-orange/30 text-orange text-xs font-body font-600 tracking-widest uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-heading font-900 text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Every Equipment Type. Every Lane.
          </h2>
          <p className="text-silver font-body text-lg max-w-2xl mx-auto leading-relaxed">
            We dispatch all major equipment types across the 48 states. Whatever you're running, we'll keep you loaded and earning.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-silver font-body mb-4">Don't see your equipment type? We handle it all.</p>
          <motion.button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-orange hover:bg-orange-dark text-white font-body font-600 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange/40 hover:shadow-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Talk to a Dispatcher
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
