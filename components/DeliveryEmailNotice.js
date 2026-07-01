// Delivery email notice — shown after pricing and near disclaimers.
export default function DeliveryEmailNotice({ className = "" }) {
  return (
    <p
      className={`mx-auto flex max-w-2xl items-start justify-center gap-2 text-center text-xs leading-relaxed text-white/55 sm:items-center ${className}`}
    >
      <svg
        aria-hidden
        className="mt-0.5 h-4 w-4 shrink-0 text-flame sm:mt-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.75}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0l-7.5-4.615a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
      <span>
        After payment, your access email will be sent from Reel Fuel Kit. Please
        also check your{" "}
        <span className="font-semibold text-flame">Spam/Promotions folder</span>{" "}
        if you don&rsquo;t see it within a few minutes.
      </span>
    </p>
  );
}
