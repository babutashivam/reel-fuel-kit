// Sticky bottom bar — mobile only. Three compact chips that jump to pricing.
export default function StickyMobileCTA() {
  const chips = [
    { label: "Creator ₹189" },
    { label: "Bundle ₹149" },
    { label: "Combo ₹299" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-ink/95 px-2 py-2.5 backdrop-blur-md sm:hidden">
      <div className="flex gap-2">
        {chips.map((chip, i) => (
          <a
            key={chip.label}
            href="#pricing"
            className={[
              "flex-1 rounded-xl px-2 py-2.5 text-center text-xs font-bold",
              i === 2
                ? "bg-fire text-black shadow-glow-sm"
                : "border border-white/20 bg-white/5 text-white",
            ].join(" ")}
          >
            {chip.label}
          </a>
        ))}
      </div>
    </div>
  );
}
