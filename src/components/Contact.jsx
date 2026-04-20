import { useState } from 'react'
import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Send, CheckCircle2, ChevronDown, AlertCircle } from 'lucide-react'
import logoPrimary from '../assets/logo-primary.png'

// ⚠️ REPLACE THIS with your own Web3Forms access key from https://web3forms.com
// (Free — just enter your email and you'll get a key instantly. Submissions arrive in your inbox.)
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE'

const equipmentOptions = [
  'Select Equipment Type',
  'Dry Van',
  'Reefer (Refrigerated)',
  'Flatbed',
  'Step Deck',
  'Box Truck',
  'Hotshot',
  'Other',
]

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(307) 217-6455', href: 'tel:+13072176455' },
  { icon: Mail, label: 'Email', value: 'info@freightrepublicllc.co', href: 'mailto:info@freightrepublicllc.co' },
  {
    icon: MapPin,
    label: 'Headquarters',
    value: '1021 E Lincolnway, Suite 412, Cheyenne, WY 82001',
    href: 'https://maps.google.com/?q=1021+E+Lincolnway+Suite+412+Cheyenne+WY+82001',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    mcDot: '',
    equipment: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `🚚 New Free Trial Request — ${form.fullName}`,
        from_name: 'Freight Republic Website',
        'Full Name': form.fullName,
        'Email': form.email,
        'Phone': form.phone,
        'MC / DOT Number': form.mcDot,
        'Equipment Type': form.equipment,
        'Message / Preferred Routes': form.message || '(none provided)',
      }

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const data = await res.json()

      if (data.success) {
        setSubmitted(true)
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      setError(
        'Sorry, something went wrong. Please email us directly at info@freightrepublicllc.co or call (307) 217-6455.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-charcoal-deeper relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,117,31,0.1)_0%,_transparent_60%)]" />

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
            Get Started
          </span>
          <h2
            className="font-heading font-900 text-white mb-4"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Ready to Maximize Your Truck's Earning Potential?
          </h2>
          <p className="text-silver font-body text-lg max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and a dedicated dispatcher will contact you within 2 hours to get your free trial started.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left — Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Logo card */}
            <div className="bg-charcoal rounded-2xl p-6 mb-6 border border-white/10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-orange/40">
                  <img src={logoPrimary} alt="Freight Republic LLC" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-heading font-800 text-white text-lg">FREIGHT REPUBLIC LLC</div>
                  <div className="text-orange text-xs font-body tracking-widest">freightrepublicllc.co</div>
                </div>
              </div>
              <p className="text-silver font-body text-sm leading-relaxed">
                Professional truck dispatching services trusted by hundreds of owner-operators across the 48 states.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4 mb-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-charcoal/50 border border-white/10 hover:border-orange/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-orange" />
                  </div>
                  <div>
                    <div className="text-silver/60 text-xs font-body uppercase tracking-widest">{label}</div>
                    {href ? (
                      <a href={href} className="text-white font-body font-500 text-sm hover:text-orange transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="text-white font-body font-500 text-sm">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <div className="p-4 rounded-xl bg-orange/10 border border-orange/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-orange flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-body font-600 text-sm mb-1">7-Day Free Trial — No Risk</div>
                  <div className="text-silver/70 font-body text-xs leading-relaxed">
                    No credit card required. No contracts. Start dispatching with us risk-free and see the difference in your first week.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-charcoal rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-orange/20 border-2 border-orange flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-orange" />
                  </div>
                  <h3 className="font-heading font-800 text-white text-2xl mb-3">Request Received!</h3>
                  <p className="text-silver font-body leading-relaxed max-w-md mx-auto">
                    A dedicated dispatcher will contact you within 2 hours to start your free trial. Welcome to Freight Republic!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                      className="mb-5 flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                    >
                      <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-200 font-body text-sm leading-relaxed">{error}</p>
                    </motion.div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-5 mb-5">

                    {/* Full Name */}
                    <div className="sm:col-span-2">
                      <label className="block text-silver text-sm font-body font-500 mb-2" htmlFor="fullName">
                        Full Name <span className="text-orange">*</span>
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-deeper border border-white/10 text-white font-body placeholder-silver/30 focus:outline-none focus:border-orange/60 focus:ring-1 focus:ring-orange/30 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-silver text-sm font-body font-500 mb-2" htmlFor="email">
                        Email Address <span className="text-orange">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-deeper border border-white/10 text-white font-body placeholder-silver/30 focus:outline-none focus:border-orange/60 focus:ring-1 focus:ring-orange/30 transition-all"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-silver text-sm font-body font-500 mb-2" htmlFor="phone">
                        Phone Number <span className="text-orange">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-deeper border border-white/10 text-white font-body placeholder-silver/30 focus:outline-none focus:border-orange/60 focus:ring-1 focus:ring-orange/30 transition-all"
                      />
                    </div>

                    {/* MC/DOT */}
                    <div>
                      <label className="block text-silver text-sm font-body font-500 mb-2" htmlFor="mcDot">
                        MC Number / DOT Number <span className="text-orange">*</span>
                      </label>
                      <input
                        id="mcDot"
                        name="mcDot"
                        type="text"
                        required
                        value={form.mcDot}
                        onChange={handleChange}
                        placeholder="MC-123456 or DOT-654321"
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-deeper border border-white/10 text-white font-body placeholder-silver/30 focus:outline-none focus:border-orange/60 focus:ring-1 focus:ring-orange/30 transition-all"
                      />
                    </div>

                    {/* Equipment Type */}
                    <div>
                      <label className="block text-silver text-sm font-body font-500 mb-2" htmlFor="equipment">
                        Equipment Type <span className="text-orange">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="equipment"
                          name="equipment"
                          required
                          value={form.equipment}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-charcoal-deeper border border-white/10 text-white font-body focus:outline-none focus:border-orange/60 focus:ring-1 focus:ring-orange/30 transition-all appearance-none cursor-pointer"
                        >
                          {equipmentOptions.map((opt) => (
                            <option
                              key={opt}
                              value={opt === 'Select Equipment Type' ? '' : opt}
                              disabled={opt === 'Select Equipment Type'}
                              className="bg-charcoal-deep"
                            >
                              {opt}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-silver pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-silver text-sm font-body font-500 mb-2" htmlFor="message">
                        Message / Preferred Routes
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your operation — preferred states, lanes, or any questions..."
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-deeper border border-white/10 text-white font-body placeholder-silver/30 focus:outline-none focus:border-orange/60 focus:ring-1 focus:ring-orange/30 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-orange hover:bg-orange-dark disabled:opacity-70 text-white font-body font-700 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange/40 hover:shadow-xl"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Request & Start Free Trial
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-silver/40 text-xs font-body mt-3">
                    By submitting, you agree to our Terms of Service. We'll never share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
