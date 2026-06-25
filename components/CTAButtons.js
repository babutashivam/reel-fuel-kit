import { config } from "@/app/config";

// Two payment CTA buttons. Both open in a new tab.
export default function CTAButtons({ size = "lg", className = "" }) {
  const base =
    "group relative inline-flex w-full items-center justify-center gap-2 rounded-2xl font-bold transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-flame/70";
  const sizes = {
    lg: "px-6 py-4 text-base sm:text-lg",
    md: "px-5 py-3 text-sm sm:text-base",
  };
  const s = sizes[size] || sizes.lg;

  return (
    <div className={`flex w-full flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={config.links.india}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${s} bg-fire text-black shadow-glow`}
      >
        {config.pricing.indiaLabel}
      </a>
      <a
        href={config.links.global}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${s} border border-white/20 bg-white/5 text-white hover:bg-white/10`}
      >
        {config.pricing.globalLabel}
      </a>
    </div>
  );
}
