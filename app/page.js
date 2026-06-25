import Logo from "@/components/Logo";
import CTAButtons from "@/components/CTAButtons";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { config } from "@/app/config";

const ctaNote =
  "Choose India if you pay via UPI/cards in India. Choose Global for international checkout.";

const deliveryNote =
  "After payment, you’ll receive early access instructions and the full kit delivery link when it launches.";

const statusNote =
  "Current status: Early access. Full kit delivery will be shared with buyers at launch.";

const kit = [
  {
    title: "500 Viral-Style Hooks",
    body: "Scroll-stopping opening lines for reels, shorts, ads, and creator posts.",
  },
  {
    title: "200 ChatGPT Prompts",
    body: "Copy-paste prompts for ideas, scripts, captions, thumbnails, and content planning.",
  },
  {
    title: "100 Ready Captions",
    body: "Caption starters and CTA lines you can quickly customize.",
  },
  {
    title: "30-Day Content Calendar",
    body: "A simple posting plan so you always know what to create next.",
  },
  {
    title: "50 Niche Reel Ideas",
    body: "Content ideas for creators, businesses, coaches, freelancers, and theme pages.",
  },
  {
    title: "Bonus: Weak Hook vs Strong Hook",
    body: "Learn how to turn boring content into clickable content.",
  },
];

const bonusCategories = [
  "AI-generated cat videos",
  "AI-generated short-form clips",
  "Luxury, wealth, and rich lifestyle style videos",
  "Creator-friendly reel and shorts assets",
  "Extra visual assets for Instagram Reels and YouTube Shorts",
];

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
          Stop staring at a blank screen.{" "}
          <span className="text-gradient">Start posting better reels today.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          Get hooks, ChatGPT prompts, captions, ready-to-edit video assets, and
          content ideas built for creators who want to post faster and make
          better short-form content.
        </p>

        <p className="mt-4 max-w-2xl text-pretty text-sm font-medium text-white/60">
          Everything you need to create reels faster — hooks, prompts, captions,
          ideas, and bonus video assets in one kit.
        </p>

        <p className="mt-6 inline-flex max-w-xl items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-white/70">
          <span className="h-1.5 w-1.5 rounded-full bg-flame" />
          {statusNote}
        </p>

        <div className="mt-8 w-full max-w-xl">
          <p className="mb-3 text-sm font-semibold text-white">Choose your checkout:</p>
          <CTAButtons />
          <p className="mt-3 text-xs text-white/50">{ctaNote}</p>
          <p className="mt-2 text-xs text-white/50">{deliveryNote}</p>
        </div>

        <p className="mt-8 max-w-xl text-sm text-white/50">
          Built for creators, niche pages, freelancers, coaches, and small
          businesses.
        </p>
      </section>

      {/* ===================== WHAT YOU GET ===================== */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHeading kicker="The Creator Kit">
          What&rsquo;s inside the Creator Kit?
        </SectionHeading>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {kit.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-flame/40 hover:bg-white/[0.05] hover:shadow-glow-sm"
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== FREE BONUS VIDEO ASSETS ===================== */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="rounded-3xl border border-flame/25 bg-gradient-to-b from-flame/[0.08] to-transparent p-7 sm:p-10">
          <SectionHeading kicker="Included Free">
            Free Bonus: Ready-to-Edit Video Assets
          </SectionHeading>

          <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-white/70">
            Along with the Creator Kit, early access buyers will also get access
            to a bonus Google Drive folder with ready-to-edit short-form video
            assets.
          </p>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
            {bonusCategories.map((cat) => (
              <li
                key={cat}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80"
              >
                <span className="mt-0.5 text-flame">▸</span>
                {cat}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-center text-sm font-semibold text-flame">
            Bonus Drive access will be shared after purchase.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-white/65">
            Use these assets as inspiration, background clips, or ready-to-edit
            content for your reels and shorts. The goal is to help creators save
            time and start posting faster.
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-center text-xs leading-relaxed text-white/45">
            Only use assets that you have the rights to use. We do not guarantee
            views, followers, monetization, or platform approval. Results depend
            on your niche, editing, captions, hooks, consistency, and execution.
          </p>
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
            Join early access today and get the Creator Kit launch offer.
          </p>

          <div className="mx-auto mt-8 max-w-xl">
            <p className="mb-3 text-sm font-semibold text-white">Choose your checkout:</p>
            <CTAButtons />
            <p className="mt-3 text-xs text-white/50">{ctaNote}</p>
            <p className="mt-2 text-xs text-white/50">{deliveryNote}</p>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="mx-auto mt-10 max-w-2xl space-y-3 text-center text-xs leading-relaxed text-white/45">
          <p>
            This is a digital product. Results depend on your content, niche,
            consistency, and execution.
          </p>
          <p>
            Bonus assets are provided for creator use and editing inspiration.
            Users are responsible for ensuring they have the rights to post any
            asset on their platform.
          </p>
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
