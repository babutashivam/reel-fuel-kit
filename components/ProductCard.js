import { isPlaceholderLink } from "@/app/config";

// Single pricing card with launch-discount pricing and pay buttons.
// `product` comes from config.products. `offerEnded` dims the discount badges.
export default function ProductCard({ product, offerEnded = false }) {
  const isHighlight = product.highlight;
  const isCombo = product.id === "combo";

  const indiaHref = isPlaceholderLink(product.indiaUrl) ? "#" : product.indiaUrl;
  const globalHref = isPlaceholderLink(product.globalUrl) ? "#" : product.globalUrl;
  const indiaIsLive = !isPlaceholderLink(product.indiaUrl);
  const globalIsLive = !isPlaceholderLink(product.globalUrl);

  const linkProps = (isLive) =>
    isLive ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <div
      className={[
        "relative flex h-full flex-col rounded-3xl border p-6 pt-10 sm:p-7 sm:pt-12 transition-all duration-200",
        isHighlight
          ? "z-10 border-flame/80 bg-gradient-to-b from-flame/[0.18] via-flame/[0.08] to-transparent shadow-badge-glow-lg ring-2 ring-flame/50 md:scale-[1.03]"
          : "border-white/10 bg-white/[0.03] hover:border-flame/40 hover:bg-white/[0.05]",
      ].join(" ")}
    >
      {/* Launch-discount badge — top of card, impossible to miss */}
      {product.discountBadge ? (
        <span
          className={[
            "absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full font-extrabold uppercase tracking-wider transition-all",
            isCombo ? "-top-5 px-4 py-2.5 text-[11px] sm:-top-6 sm:px-6 sm:py-3 sm:text-sm" : "-top-5 px-6 py-2.5 text-sm sm:-top-6 sm:px-7 sm:py-3 sm:text-base",
            offerEnded
              ? "border border-white/15 bg-white/5 text-white/30 line-through shadow-none"
              : "bg-fire text-black shadow-badge-glow ring-2 ring-gold/70 animate-badgePulse",
          ].join(" ")}
        >
          {product.discountBadge}
        </span>
      ) : null}

      <h3 className={`font-extrabold text-white ${isCombo ? "text-2xl" : "text-xl"}`}>
        {product.name}
      </h3>

      {product.highlightText ? (
        <p className="mt-2 text-sm font-semibold text-flame sm:text-base">
          {product.highlightText}
        </p>
      ) : null}

      {/* Pricing */}
      <div className="mt-5">
        <div className="flex items-baseline gap-2">
          <span className={`font-extrabold text-white ${isCombo ? "text-4xl" : "text-3xl"}`}>
            {product.priceIndia}
          </span>
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
          className={[
            "inline-flex w-full items-center justify-center rounded-2xl bg-fire px-5 py-3.5 text-sm font-bold text-black transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame/70",
            isCombo ? "shadow-badge-glow" : "shadow-glow-sm",
          ].join(" ")}
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
