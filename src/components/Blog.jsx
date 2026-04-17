import { motion } from 'motion/react'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'

const posts = [
  {
    category: 'Industry Tips',
    title: 'How to Maximize Your Weekly Gross as an Owner-Operator in 2026',
    excerpt:
      'Learn the strategies top-earning owner-operators use to consistently pull $8,000–$12,000+ per week — from lane selection to broker negotiation tactics.',
    readTime: '6 min read',
    date: 'Apr 10, 2026',
    accent: 'bg-orange/10 text-orange border-orange/20',
    tag: 'Earnings',
  },
  {
    category: 'Dispatching',
    title: 'The Truth About Deadhead Miles: How to Cut Empty Miles by 35%',
    excerpt:
      'Deadhead miles are profit killers. We break down the exact routing strategies, load board techniques, and triangulation methods that reduce empty miles significantly.',
    readTime: '8 min read',
    date: 'Apr 5, 2026',
    accent: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    tag: 'Routes',
  },
  {
    category: 'Compliance',
    title: 'Broker Vetting 101: How to Protect Your Money from Bad Actors',
    excerpt:
      'Not every broker is trustworthy. Here\'s exactly how to check surety bonds, credit scores, and payment history before you ever put a load on your truck.',
    readTime: '5 min read',
    date: 'Mar 28, 2026',
    accent: 'bg-green-400/10 text-green-400 border-green-400/20',
    tag: 'Safety',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-silver-light relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange/15 border border-orange/30 text-orange text-xs font-body font-600 tracking-widest uppercase mb-4">
              The Freight Republic Blog
            </span>
            <h2
              className="font-heading font-900 text-charcoal"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Insights for Owner-Operators
            </h2>
            <p className="text-charcoal/60 font-body mt-2 max-w-lg">
              Tips, strategies, and industry knowledge to help you run a more profitable trucking operation.
            </p>
          </div>
          <motion.a
            href="#"
            className="flex items-center gap-2 text-orange font-body font-600 hover:gap-3 transition-all duration-300 flex-shrink-0"
            whileHover={{ x: 3 }}
          >
            View All Posts <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-silver-light/50 hover:border-orange/20 transition-all duration-300 cursor-pointer"
            >
              {/* Decorative top bar */}
              <div className="h-1.5 bg-gradient-to-r from-orange to-orange-dark" />

              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-body font-600 tracking-widest uppercase border ${post.accent}`}>
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-charcoal/40 text-xs font-body">
                    <Clock size={11} />
                    {post.readTime}
                  </div>
                </div>

                {/* Category */}
                <div className="text-orange text-xs font-body font-600 uppercase tracking-widest mb-2">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="font-heading font-800 text-charcoal text-xl mb-3 leading-tight group-hover:text-orange transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-charcoal/60 font-body text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-silver-light">
                  <span className="text-charcoal/40 font-body text-xs">{post.date}</span>
                  <span className="flex items-center gap-1.5 text-orange font-body font-600 text-sm group-hover:gap-2.5 transition-all duration-300">
                    <BookOpen size={13} />
                    Read More
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter signup teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 p-6 md:p-8 rounded-2xl bg-charcoal border border-orange/20 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <div className="font-heading font-800 text-white text-xl mb-1">Get Weekly Trucking Insights</div>
            <div className="text-silver font-body text-sm">Rate trends, hot lanes, and earnings tips delivered to your inbox.</div>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 md:w-60 px-4 py-2.5 rounded-xl bg-charcoal-deeper border border-white/10 text-white font-body text-sm placeholder-silver/40 focus:outline-none focus:border-orange/50 transition-colors"
            />
            <motion.button
              className="px-5 py-2.5 bg-orange hover:bg-orange-dark text-white font-body font-600 rounded-xl transition-all duration-300 flex-shrink-0"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
