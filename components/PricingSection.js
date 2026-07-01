"use client";

import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import DeliveryEmailNotice from "@/components/DeliveryEmailNotice";
import { config, OFFER_DURATION_MS } from "@/app/config";

function format2(n) {
  return String(n).padStart(2, "0");
}

function TimePart({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="min-w-[2.5ch] text-center text-4xl font-extrabold tabular-nums text-white sm:text-5xl">
        {value}
      </span>
      <span className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/50">
        {label}
      </span>
    </div>
  );
}

export default function PricingSection() {
  // Fresh 2-hour countdown on every page load — no localStorage.
  const endTimeRef = useRef(null);
  const [remaining, setRemaining] = useState(null);

  useEffect(() => {
    endTimeRef.current = Date.now() + OFFER_DURATION_MS;

    const tick = () => {
      const left = Math.max(0, endTimeRef.current - Date.now());
      setRemaining(left);
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const ended = remaining === 0;
  const totalSeconds = Math.floor((remaining ?? 0) / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-16">
      {/* Scarcity banner — above Pick Your Bundle */}
      <div className="mx-auto mb-10 max-w-3xl rounded-3xl border border-flame/50 bg-gradient-to-r from-flame/[0.14] via-ember/10 to-flame/[0.14] px-5 py-6 text-center shadow-glow sm:px-8 sm:py-7">
        <p className="text-lg font-extrabold uppercase tracking-[0.15em] text-white sm:text-xl">
          FIRST 100 BUYERS ONLY
        </p>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70">
          Launch pricing is active for the first batch. Bonus access closes when
          spots are filled.
        </p>
      </div>

      {/* Spots badge + countdown timer */}
      <div className="mx-auto mb-12 max-w-xl">
        <div className="mb-5 flex justify-center">
          <span className="inline-flex rounded-full bg-fire px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-black shadow-badge-glow ring-2 ring-gold/70 animate-badgePulse sm:px-7 sm:py-3 sm:text-base">
            20 BONUS SPOTS LEFT
          </span>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-flame/40 bg-charcoal/80 p-6 text-center shadow-glow sm:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-ember/30 blur-[90px]"
          />
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-flame">
            Launch Discount Ends In:
          </p>

          {ended ? (
            <p className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">
              Offer window ended
            </p>
          ) : (
            <div className="mt-5 flex items-start justify-center gap-3 sm:gap-5">
              <TimePart value={format2(hours)} label="Hours" />
              <span className="text-4xl font-extrabold text-flame sm:text-5xl">:</span>
              <TimePart value={format2(minutes)} label="Minutes" />
              <span className="text-4xl font-extrabold text-flame sm:text-5xl">:</span>
              <TimePart value={format2(seconds)} label="Seconds" />
            </div>
          )}

          <p className="mt-5 text-xs leading-relaxed text-white/55">
            Offer timer resets when you visit. Launch discount is active during
            this window.
          </p>
        </div>
      </div>

      {/* Heading */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
          Pick Your Bundle Before The Launch Spots Close
        </h2>
        <p className="mt-4 text-base text-white/65">
          Only the first 100 launch buyers get this pricing. After that, prices
          may increase.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:items-stretch">
        {config.products.map((product) => (
          <ProductCard key={product.id} product={product} offerEnded={ended} />
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-white/50">
        Choose India if you pay via UPI/cards in India. Choose Global for
        international checkout. After payment, you’ll receive product access
        instructions.
      </p>

      <DeliveryEmailNotice className="mt-4" />
    </section>
  );
}
