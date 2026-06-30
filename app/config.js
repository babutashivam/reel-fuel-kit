// =============================================================
//  EDIT EVERYTHING HERE — payment links, prices, and brand text.
//  This is the only file you normally need to touch.
// =============================================================

// -------------------------------------------------------------
//  PAYMENT LINKS — paste your real Razorpay (India) and
//  Payhip (Global) links here. While a value still starts with
//  "PASTE_", the button is treated as a placeholder and uses "#"
//  (clicking won't break the page).
// -------------------------------------------------------------
export const PAYMENT_LINKS = {
  creatorIndia: "PASTE_RAZORPAY_CREATOR_749_LINK_HERE",
  creatorGlobal: "PASTE_PAYHIP_CREATOR_10_99_LINK_HERE",
  reelsIndia: "PASTE_RAZORPAY_REELS_650_LINK_HERE",
  reelsGlobal: "PASTE_PAYHIP_REELS_9_99_LINK_HERE",
  comboIndia: "PASTE_RAZORPAY_COMBO_999_LINK_HERE",
  comboGlobal: "PASTE_PAYHIP_COMBO_14_99_LINK_HERE",
};

// Countdown: 2-hour launch-discount window (in milliseconds).
export const OFFER_DURATION_MS = 2 * 60 * 60 * 1000;

export const config = {
  brand: {
    name: "Reel Fuel Kit",
    instagram: "@reelfuelkit",
    instagramUrl: "https://instagram.com/reelfuelkit",
  },

  // -----------------------------------------------------------
  //  PRODUCTS / PRICING
  //  Each product has an India link (Razorpay) + Global link (Payhip).
  // -----------------------------------------------------------
  products: [
    {
      id: "creator-kit",
      name: "Reel Fuel Creator Kit",
      priceIndia: "₹749",
      priceGlobal: "$10.99",
      oldPriceIndia: "₹999",
      oldPriceGlobal: "$14.65",
      discountBadge: "25% OFF NOW",
      badge: null,
      highlight: false,
      features: [
        "500 viral-style hooks",
        "200 ChatGPT prompts",
        "100 ready captions",
        "30-day content calendar",
        "50 niche reel ideas",
        "Weak hook vs strong hook examples",
      ],
      indiaUrl: PAYMENT_LINKS.creatorIndia,
      globalUrl: PAYMENT_LINKS.creatorGlobal,
    },
    {
      id: "reels-bundle",
      name: "5000+ Reels Bundle",
      priceIndia: "₹650",
      priceGlobal: "$9.99",
      oldPriceIndia: "₹867",
      oldPriceGlobal: "$13.32",
      discountBadge: "25% OFF NOW",
      badge: null,
      highlight: false,
      features: [
        "Money motivation reels",
        "AI-generated reels",
        "Football-style reels",
        "Luxury and wealth reels",
        "Cat and animal reels",
        "Background clips for Instagram Reels and YouTube Shorts",
        "Ready-to-edit short-form video assets",
      ],
      indiaUrl: PAYMENT_LINKS.reelsIndia,
      globalUrl: PAYMENT_LINKS.reelsGlobal,
    },
    {
      id: "combo",
      name: "Best Value Combo",
      priceIndia: "₹999",
      priceGlobal: "$14.99",
      oldPriceIndia: "₹1,333",
      oldPriceGlobal: "$19.99",
      discountBadge: "25% OFF NOW",
      badge: "BEST VALUE",
      highlight: true,
      highlightText: "Everything inside Creator Kit + Reels Bundle",
      // Grouped includes — shows everything bundled together.
      groups: [
        {
          title: "Creator Kit includes:",
          items: [
            "500 viral-style hooks",
            "200 ChatGPT prompts",
            "100 ready captions",
            "30-day content calendar",
            "50 niche reel ideas",
            "Weak hook vs strong hook examples",
          ],
        },
        {
          title: "Reels Bundle includes:",
          items: [
            "5000+ ready-to-edit reel assets",
            "Money motivation reels",
            "AI-generated reels",
            "Football-style reels",
            "Luxury and wealth reels",
            "Cat and animal reels",
            "Background clips for reels and shorts",
          ],
        },
      ],
      indiaUrl: PAYMENT_LINKS.comboIndia,
      globalUrl: PAYMENT_LINKS.comboGlobal,
    },
  ],
};

// True while the link is still an unset placeholder.
export function isPlaceholderLink(url) {
  return !url || url.startsWith("PASTE_");
}
