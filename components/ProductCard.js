// Single pricing card. Renders features + India/Global pay buttons.
// `product` comes from config.products in app/config.js.
export default function ProductCard({ product }) {
  const isHighlight = product.highlight;

  return (
    <div
      className={[
        "relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 transition-all duration-200",
        isHighlight
          ? "border-flame/60 bg-gradient-to-b from-flame/[0.12] to-transparent shadow-glow"
          : "border-white/10 bg-white/[0.03] hover:border-flame/40 hover:bg-white/[0.05]",
      ].join(" ")}
    >
      {product.badge ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-fire px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-black shadow-glow-sm">
          {product.badge}
        </span>
      ) : null}

      <h3 className="text-xl font-extrabold text-white">{product.name}</h3>
      {product.blurb ? (
        <p className="mt-2 text-sm leading-relaxed text-white/60">{product.blurb}</p>
      ) : null}

      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-3xl font-extrabold text-white">{product.priceIndia}</span>
        <span className="text-sm text-white/50">/ {product.priceGlobal} global</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/80">
            <span className="mt-0.5 shrink-0 text-flame">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-7 flex flex-col gap-3">
        <a
          href={product.indiaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-2xl bg-fire px-5 py-3.5 text-sm font-bold text-black shadow-glow-sm transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame/70"
        >
          🇮🇳 India {product.priceIndia}
        </a>
        <a
          href={product.globalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame/70"
        >
          🌍 Global {product.priceGlobal}
        </a>
      </div>
    </div>
  );
}
