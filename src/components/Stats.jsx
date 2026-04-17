import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const stats = [
  { value: 500, suffix: '+', label: 'Trucks Dispatched', description: 'Active owner-operators in our network' },
  { value: 35, suffix: '%', label: 'Less Deadhead Miles', description: 'Average reduction vs industry standard' },
  { value: 98, suffix: '%', label: 'On-Time Delivery', description: 'Across all equipment types & lanes' },
  { value: 24, suffix: '/7', label: 'Dispatch Coverage', description: 'Round-the-clock support, always live' },
]

function CountUp({ target, suffix, isVisible }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = 0
    const duration = 2000
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-orange relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-dark/50 via-transparent to-orange-dark/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="font-heading font-900 text-white mb-1 tabular-nums"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1 }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} isVisible={isInView} />
              </div>
              <div className="font-heading font-700 text-white/90 text-lg uppercase tracking-wide mb-1">
                {stat.label}
              </div>
              <div className="text-white/70 font-body text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
