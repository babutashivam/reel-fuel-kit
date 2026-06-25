import { config } from "@/app/config";

// Sticky bottom bar with both CTAs — mobile only.
export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 px-3 py-3 backdrop-blur-md sm:hidden">
      <div className="flex gap-2">
        <a
          href={config.links.india}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl bg-fire px-3 py-3 text-center text-sm font-bold text-black shadow-glow-sm"
        >
          🇮🇳 India ₹189
        </a>
        <a
          href={config.links.global}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-xl border border-white/20 bg-white/5 px-3 py-3 text-center text-sm font-bold text-white"
        >
          🌍 Global $5
        </a>
      </div>
    </div>
  );
}
