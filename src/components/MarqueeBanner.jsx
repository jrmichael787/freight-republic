const items = [
  '24/7 DISPATCH SUPPORT',
  'ZERO FORCED DISPATCH',
  'AI-POWERED ROUTE OPTIMIZATION',
  'VERIFIED BROKER NETWORK',
  'FREE 7-DAY TRIAL',
  'DRY VAN • REEFER • FLATBED • HOTSHOT',
  '35% LESS DEADHEAD MILES',
  'RATE CONFIRMATIONS HANDLED',
  'FACTORING COMPANY SUBMISSIONS',
  'TOP RATES GUARANTEED',
]

export default function MarqueeBanner() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-orange py-3 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-orange to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-orange to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap will-change-transform">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 mx-6 text-white font-heading font-700 text-sm tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
