/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        charcoal: "#111114",
        ember: "#ff7a18",
        flame: "#ff9d2f",
        gold: "#ffd23f",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255,122,24,0.55)",
        "glow-sm": "0 0 22px -6px rgba(255,122,24,0.45)",
        "badge-glow": "0 0 24px rgba(255,157,47,0.75), 0 0 48px rgba(255,122,24,0.5)",
        "badge-glow-lg": "0 0 32px rgba(255,210,63,0.9), 0 0 64px rgba(255,122,24,0.65)",
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        badgePulse: {
          "0%, 100%": {
            boxShadow:
              "0 0 22px rgba(255,157,47,0.8), 0 0 44px rgba(255,122,24,0.55), 0 0 0 2px rgba(255,210,63,0.35)",
            transform: "scale(1)",
          },
          "50%": {
            boxShadow:
              "0 0 36px rgba(255,210,63,1), 0 0 72px rgba(255,122,24,0.75), 0 0 0 3px rgba(255,210,63,0.55)",
            transform: "scale(1.04)",
          },
        },
      },
      animation: {
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        badgePulse: "badgePulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
