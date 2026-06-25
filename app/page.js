import Logo from "@/components/Logo";
import ProductCard from "@/components/ProductCard";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { config } from "@/app/config";

const ctaNote =
  "Choose India if you pay via UPI/cards in India. Choose Global for international checkout.";

const deliveryNote =
  "After payment, you’ll receive early access instructions and the full kit delivery link when it launches.";

const statusNote =
  "Current status: Early access. Full kit delivery will be shared with buyers at launch.";

const pickerNote =
  "Choose the Creator Kit for strategy, the Reels Bundle for video assets, or the Combo for everything.";

const steps = [
  "Buy early access",
  "Get launch access",
  "Copy hooks, prompts, captions, ideas, or video assets",
  "Customize for your niche",
  "Post faster with less overthinking",
];

const audience = [
  "Creators",
  "YouTubers",
  "Instagram pages",
  "Coaches",
  "Freelancers",
  "Small businesses",
  "AI creators",
  "Motivation pages",
  "Fitness pages",
  "Finance pages",
  "Luxury pages",
  "Cat pages",
  "Personal brands",
];

const disclaimers = [
  "This is a digital product. No physical product will be shipped.",
  "We do not guarantee views, followers, monetization, platform approval, or earnings.",
  "Results depend on your niche, editing, consistency, captions, hooks, and execution.",
  "Users are responsible for ensuring they have the rights to post any asset on their platform.",
];

function SectionHeading({ kicker, children }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-flame">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-white">
      {/* Ambient glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-ember/25 blur-[120px]"
      />

      {/* ===================== HERO ===================== */}
      <section className="relative mx-auto flex max-w-6xl flex-col items-center px-5 pt-12 pb-16 text-center sm:pt-16">
        <Logo imgClassName="h-24 w-24 animate-floaty object-contain sm:h-28 sm:w-28" />

        <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-flame/40 bg-flame/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-flame">
          <span className="h-2 w-2 animate-pulseGlow rounded-full bg-flame" />
          Early Access Now Open
        </span>

        <p className="mt-4 text-sm font-medium text-white/50">{config.brand.domain}</p>

        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold leading-[1.05] sm:text-6xl">
          Start posting reels today with hooks, prompts, captions, and{" "}
          <span className="text-gradient">5000+ ready-to-edit video assets.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          Reel Fuel Kit gives creators everything they need to start from zero:
          viral-style hooks, ChatGPT prompts, captions, content ideas, and a
          massive reels asset bundle.
        </p>

        <p className="mt-6 inline-flex max-w-xl items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-flame" />
          {statusNote}
        </p>

        <div className="mt-8 flex w-full max-w-md flex-col gap-3">
          <a
            href="#pricing"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-fire px-6 py-4 text-base font-bold text-black shadow-glow transition-transform duration-200 hover:-translate-y-0.5 sm:text-lg"
          >
            See pricing &amp; offers
          </a>
          <p className="text-xs text-white/50">{deliveryNote}</p>
        </div>

        <p className="mt-8 max-w-xl text-sm text-white/50">
          Built for creators, niche pages, freelancers, coaches, and small
          businesses.
        </p>
      </section>

      {/* ===================== START FROM ZERO ===================== */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading kicker="No Overthinking">
          Start from zero without overthinking what to post.
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/70">
          You don&rsquo;t need to spend weeks planning content. Reel Fuel Kit
          gives you hooks, prompts, captions, ideas, and ready-to-edit video
          assets so you can start creating faster.
        </p>
      </section>

      {/* ===================== PRICING / OFFERS ===================== */}
      <section id="pricing" className="mx-auto max-w-6xl scroll-mt-8 px-5 py-16">
        <SectionHeading kicker="Pick Your Kit">Choose your offer</SectionHeading>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/60">
          {pickerNote}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {config.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl text-center">
          <p className="text-xs text-white/50">{ctaNote}</p>
          <p className="mt-2 text-xs text-white/50">{deliveryNote}</p>
        </div>
      </section>

      {/* ===================== PROBLEM ===================== */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading>
          Most creators don&rsquo;t have an idea problem.{" "}
          <span className="text-gradient">They have a packaging problem.</span>
        </SectionHeading>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/70">
          Your content may be useful, but if the first line is weak, people
          scroll. Reel Fuel Kit helps you package ideas with better hooks,
          prompts, captions, visual assets, and posting angles.
        </p>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="mx-auto max-w-5xl px-5 py-16">
        <SectionHeading kicker="Simple Steps">How it works</SectionHeading>

        <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fire text-sm font-extrabold text-black">
                {i + 1}
              </span>
              <span className="pt-1 text-sm font-medium text-white/85">{step}</span>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-center text-sm font-semibold text-flame">
          Early access buyers get the launch offer first.
        </p>
      </section>

      {/* ===================== WHO IT'S FOR ===================== */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <SectionHeading kicker="Who It's For">
          Made for people who want to post more but think too much.
        </SectionHeading>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {audience.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/80 transition-colors hover:border-flame/50 hover:text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="mx-auto max-w-4xl px-5 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-flame/30 bg-gradient-to-b from-flame/[0.12] to-transparent p-8 text-center sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-ember/30 blur-[100px]"
          />
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to <span className="text-gradient">fuel your next reel?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-white/70">
            Pick the Creator Kit, the Reels Bundle, or the Best Value Combo and
            start creating faster today.
          </p>

          <div className="mx-auto mt-8 flex max-w-md flex-col gap-3">
            <a
              href="#pricing"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-fire px-6 py-4 text-base font-bold text-black shadow-glow transition-transform duration-200 hover:-translate-y-0.5 sm:text-lg"
            >
              See pricing &amp; offers
            </a>
            <p className="text-xs text-white/50">{deliveryNote}</p>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mx-auto mt-10 max-w-2xl space-y-3 text-center text-xs leading-relaxed text-white/45">
          {disclaimers.map((d) => (
            <p key={d}>{d}</p>
          ))}
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="border-t border-white/10 px-5 pb-28 pt-12 sm:pb-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
          <Logo imgClassName="h-12 w-12 object-contain" />
          <div className="text-sm text-white/70">
            <p className="font-bold text-white">{config.brand.name}</p>
            <p className="mt-1">{config.brand.domain}</p>
            <a
              href={config.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-flame transition-colors hover:text-gold"
            >
              {config.brand.instagram}
            </a>
          </div>
          <p className="max-w-md text-xs text-white/40">
            Digital creator resources. No physical product will be shipped.
          </p>
          <p className="mt-2 text-xs text-white/30">
            © {new Date().getFullYear()} {config.brand.name}. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyMobileCTA />
    </main>
  );
}
