// =============================================================
//  EDIT EVERYTHING HERE — links, prices, and brand text.
//  This is the only file you normally need to touch.
// =============================================================

export const config = {
  brand: {
    name: "Reel Fuel Kit",
    domain: "reelfuelkit.com",
    instagram: "@reelfuelkit",
    instagramUrl: "https://instagram.com/reelfuelkit",
  },

  // Bonus Google Drive folder — shared with buyers after purchase.
  // Replace with your real Drive link when ready (not shown on the page).
  bonusDrive: "https://drive.google.com/your-folder-link-here",

  // -----------------------------------------------------------
  //  PRODUCTS / PRICING
  //  Each product has an India link + a Global link.
  //  Replace the PLACEHOLDER_* links with your real
  //  Razorpay (India) and Payhip (Global) links per product.
  // -----------------------------------------------------------
  products: [
    {
      id: "creator-kit",
      name: "Reel Fuel Creator Kit",
      blurb: "Strategy, hooks, prompts & captions to plan content faster.",
      priceIndia: "₹189",
      priceGlobal: "$7",
      highlight: false,
      badge: null,
      features: [
        "500 viral-style hooks",
        "200 ChatGPT prompts",
        "100 ready captions",
        "30-day content calendar",
        "50 niche reel ideas",
        "Weak hook vs strong hook examples",
      ],
      // India = Razorpay, Global = Payhip
      indiaUrl: "https://rzp.io/rzp/VKHKZYFg",
      globalUrl: "#", // TODO: replace with Creator Kit Global Payhip link
    },
    {
      id: "reels-bundle",
      name: "5000+ Reels Bundle",
      blurb: "A massive library of ready-to-edit video assets.",
      priceIndia: "₹149",
      priceGlobal: "$7",
      highlight: false,
      badge: null,
      features: [
        "Money motivation reels",
        "AI-generated reels",
        "Football-style reels",
        "Luxury and wealth reels",
        "Cat and animal reels",
        "Background clips for Instagram Reels and YouTube Shorts",
      ],
      indiaUrl: "https://rzp.io/rzp/yth7uyrV",
      globalUrl: "#", // TODO: replace with Reels Bundle Global Payhip link
    },
    {
      id: "combo",
      name: "Best Value Combo",
      blurb: "Everything — strategy + assets + bonus drive in one bundle.",
      priceIndia: "₹299",
      priceGlobal: "$9",
      highlight: true,
      badge: "Best Value",
      features: [
        "Reel Fuel Creator Kit",
        "5000+ Reels Bundle",
        "Bonus Drive access",
        "All hooks, prompts, captions, ideas, and video assets in one bundle",
      ],
      indiaUrl: "https://rzp.io/rzp/bzac8xR",
      globalUrl: "#", // TODO: replace with Combo Global Payhip link
    },
  ],
};
