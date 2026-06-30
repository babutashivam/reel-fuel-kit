// Sticky bottom bar — mobile only. One button that jumps to pricing.
export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 px-3 py-3 backdrop-blur-md sm:hidden">
      <a
        href="#pricing"
        className="flex w-full items-center justify-center rounded-xl bg-fire px-4 py-3.5 text-center text-sm font-extrabold text-black shadow-glow-sm"
      >
        Pick Your Bundle
      </a>
    </div>
  );
}
