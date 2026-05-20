export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          For Shopify Stores with 100+ SKUs
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Stop the Inventory<br />
          <span className="text-[#58a6ff]">Death Spiral</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Predicts stockouts before they kill your conversions. Tracks sales velocity across every SKU and fires email or SMS alerts before you hit zero.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Protecting Inventory — $19/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">No contracts. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Sales Velocity Tracking', desc: 'Calculates real-time sell-through rates per SKU so predictions stay accurate.' },
            { title: 'Configurable Alert Windows', desc: 'Set your own lead time — get warned 7, 14, or 30 days before projected stockout.' },
            { title: 'Email & SMS Alerts', desc: 'Instant notifications the moment a SKU crosses your danger threshold.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited SKU monitoring',
              'Sales velocity predictions',
              'Email + SMS alerts',
              'Configurable alert windows',
              'Shopify webhook integration',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How does it connect to my Shopify store?',
              a: 'You install the app and authorize it via Shopify OAuth. It then listens to order and inventory webhooks to track real-time sales velocity without any manual data entry.',
            },
            {
              q: 'How accurate are the stockout predictions?',
              a: 'Predictions use a rolling sales velocity window (configurable from 7 to 90 days) so they adapt to seasonal trends and recent spikes rather than relying on stale averages.',
            },
            {
              q: 'Can I customize when alerts fire?',
              a: 'Yes. You set the lead-time threshold per SKU or globally — for example, alert me when any product is projected to stock out within 14 days.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Shopify Inventory Death Spiral Alerter. All rights reserved.
      </footer>
    </main>
  )
}
