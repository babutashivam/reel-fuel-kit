import { isPlaceholderLink } from "@/app/config";

// Single pricing card with launch-discount pricing and pay buttons.
// `product` comes from config.products. `offerEnded` dims the discount badges.
export default function ProductCard({ product, offerEnded = false }) {
  const isHighlight = product.highlight;

  const indiaHref = isPlaceholderLink(product.indiaUrl) ? "#" : product.indiaUrl;
  const globalHref = isPlaceholderLink(product.globalUrl) ? "#" : product.globalUrl;
  const indiaIsLive = !isPlaceholderLink(product.indiaUrl);
  const globalIsLive = !isPlaceholderLink(product.globalUrl);

  const linkProps = (isLive) =>
    isLive ? { target: "_blank", rel: "noopener noreferrer" } : {};

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

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xl font-extrabold text-white">{product.name}</h3>
        {product.discountBadge ? (
          <span
            className={[
              "shrink-0 rounded-full px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide transition-opacity",
              offerEnded
                ? "border border-white/15 text-white/30 line-through"
                : "bg-flame/15 text-flame ring-1 ring-flame/40",
            ].join(" ")}
          >
            {product.discountBadge}
          </span>
        ) : null}
      </div>

      {product.highlightText ? (
        <p className="mt-2 text-sm font-semibold text-flame">{product.highlightText}</p>
      ) : null}

      {/* Pricing */}
      <div className="mt-5">
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-extrabold text-white">{product.priceIndia}</span>
          {product.oldPriceIndia ? (
            <span className="text-sm text-white/40 line-through">
              {product.oldPriceIndia}
            </span>
          ) : null}
        </div>
        <div className="mt-1 flex items-baseline gap-2 text-sm text-white/60">
          <span className="font-semibold text-white/80">{product.priceGlobal} global</span>
          {product.oldPriceGlobal ? (
            <span className="text-white/35 line-through">{product.oldPriceGlobal}</span>
          ) : null}
        </div>
      </div>

      {/* Includes */}
      {product.groups ? (
        <div className="mt-6 flex-1 space-y-5">
          {product.groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-white/55">
                {group.title}
              </p>
              <ul className="mt-2 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 shrink-0 text-flame">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="mt-6 flex-1 space-y-3">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm text-white/80">
              <span className="mt-0.5 shrink-0 text-flame">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Buttons */}
      <div className="mt-7 flex flex-col gap-3">
        <a
          href={indiaHref}
          {...linkProps(indiaIsLive)}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-fire px-5 py-3.5 text-sm font-bold text-black shadow-glow-sm transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame/70"
        >
          🇮🇳 India {product.priceIndia}
        </a>
        <a
          href={globalHref}
          {...linkProps(globalIsLive)}
          className="inline-flex w-full items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-5 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame/70"
        >
          🌍 Global {product.priceGlobal}
        </a>
      </div>
    </div>
  );
}
